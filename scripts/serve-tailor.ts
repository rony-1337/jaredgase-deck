/**
 * serve-tailor.ts  ·  local-only generation server for the Customize builder
 * ---------------------------------------------------------------------------
 * A tiny Node HTTP server (no framework) that exposes POST /api/tailor and
 * calls buildSpec. Runs on your machine next to `astro dev`; the Astro dev
 * server proxies /api -> here (see astro.config.mjs), so the browser stays
 * same-origin (no CORS) and your ANTHROPIC_API_KEY never reaches the page.
 *
 * Run it in a second terminal:
 *   npm run serve:tailor      (astro dev in the first: npm run dev)
 * There is NO auth here on purpose — it only listens on localhost.
 */
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { buildSpec, type Audience } from "../src/lib/tailor/buildSpec.ts";

// load .env.local so ANTHROPIC_API_KEY (and CUSTOMIZE_EFFORT) are available
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

const PORT = 4326;
const AUDIENCES: Audience[] = ["recruiter", "panel", "design-leader", "hiring-manager", "executive"];

const server = createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/api/tailor") {
    res.writeHead(404);
    res.end();
    return;
  }
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", async () => {
    const send = (status: number, data: unknown) => {
      res.writeHead(status, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
    };
    try {
      const b = JSON.parse(body || "{}");
      const company = String(b.company ?? "").trim();
      const role = String(b.role ?? "").trim();
      const date = String(b.date ?? "").trim();
      const audience: Audience = AUDIENCES.includes(b.audience) ? b.audience : "panel";
      const durationMin = Math.min(120, Math.max(10, Number(b.durationMin) || 30));
      let jdText = String(b.jdText ?? "").trim();
      const jdUrl = String(b.jdUrl ?? "").trim();
      // if no paste but a link is given, fetch it and strip to text (works when
      // the JD is in the page source: Greenhouse, Lever, Ashby, plain pages)
      if (jdText.length < 40 && jdUrl) {
        try {
          const r = await fetch(jdUrl, { headers: { "user-agent": "Mozilla/5.0" } });
          jdText = (await r.text())
            .replace(/<script[\s\S]*?<\/script>/gi, " ")
            .replace(/<style[\s\S]*?<\/style>/gi, " ")
            .replace(/<[^>]+>/g, " ")
            .replace(/&[a-z]+;/gi, " ")
            .replace(/\s+/g, " ")
            .trim();
          console.log(`  fetched JD from link (${jdText.length} chars)`);
        } catch (e: any) {
          console.log(`  JD fetch failed: ${e?.message ?? e}`);
        }
      }
      if (!company || !role || jdText.length < 40) {
        return send(400, { error: "Company, role, and a real job description are required (paste it if the link didn't work)." });
      }
      console.log(`→ tailoring  ${company} · ${role}  (${durationMin} min, ${audience})…`);
      const t0 = Date.now();
      const spec = await buildSpec({ company, role, date, audience, durationMin, jdText });
      console.log(`  done in ${((Date.now() - t0) / 1000).toFixed(1)}s — ${spec.projects.length} projects`);
      send(200, spec);
    } catch (e: any) {
      console.error("  error:", e?.message ?? e);
      send(502, { error: "Generation failed.", detail: String(e?.message ?? e) });
    }
  });
});

server.listen(PORT, () => {
  const key = process.env.ANTHROPIC_API_KEY ? "API key loaded" : "⚠ NO ANTHROPIC_API_KEY in .env.local";
  console.log(`tailor server ready on http://localhost:${PORT}  (${key})`);
});
