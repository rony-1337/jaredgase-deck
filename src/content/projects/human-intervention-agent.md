---
title: "Agentic (AI)-Powered Support, Expert to Expert"
oneLine: "Redesigned how Tier 1 experts reach Tier 2 SMEs, with gen-AI self-help and automatic context, so a quarter of escalations never needed a human."
role: "End to end design lead. Product design, service design, research, and design system."
org: "Intuit, Virtual Expert Platform"
dates: "Dec 2024 to Mar 2025"
sector: "Enterprise, fintech, customer service"
platform: "Responsive web app"
domain: ["enterprise", "fintech", "platform", "ai-native", "service-design"]
skills: ["systems", "execution", "research", "influence"]
metrics:
  - value: "40%"
    label: "fewer Tier 1 escalations year over year"
    relative: "Far fewer handoffs between tiers"
  - value: "24%"
    label: "of escalations deflected in cohort testing"
    relative: "AI self-help resolved a quarter before a human was needed"
  - value: "20 min"
    label: "saved per deflected escalation"
    relative: "Time back on every handoff avoided"
  - value: "6.1%"
    label: "escalation rate in the cohort, down from 10.2%"
    relative: "Escalations nearly halved where it was tested"
  - value: "80+"
    label: "expert tooling readiness, held above target"
    relative: "More reliable than the system it replaced"
goal: "Redesign how Tier 1 experts reach Tier 2 SMEs inside IEP. Cut friction, automate context, and fold in gen-AI so the system deflects escalations that never needed a human."
impact: "A quarter of escalations deflected in the cohort, about 20 minutes saved on each one, and Tier 1 escalations down roughly 40 percent year over year."
delivered:
  - "Follow-me-home research on the broken, context-free Salesforce handoff"
  - "Gen-AI self-help and de-escalation before any handoff"
  - "An automatic, expert-verified call summary that travels with the customer"
  - "Attribute-based routing to the right Tier 2 expert"
  - "Platform-level components, specs, and UAT shipped without breaking peak"
deliveredSummary: "Follow-me-home research on the broken handoff, gen-AI self-help and de-escalation before any handoff, an automatic expert-verified call summary that travels with the customer, attribute-based routing to the right Tier 2 expert, and platform-level components shipped without breaking peak."
summary: "Designed an AI-powered escalation layer that changed how experts get unblocked. Shifted the model from manual handoffs to agentic deflection, cutting Tier 1 escalations by 40%."
highlights:
  - icon: "02a_research.svg"
    title: "Research-led framing"
    blurb: "Ran Follow-Me-Homes with Tier 1 experts and reframed the escalation problem. The system was asking questions it already had the answers to."
  - icon: "02b_agentic.svg"
    title: "Agentic deflection model"
    blurb: "Shaped the layer where AI answers the question first, before a human Tier 2 is ever needed. Changed the default behavior of the entire escalation flow."
  - icon: "02c_platform.svg"
    title: "Platform-level thinking"
    blurb: "Built every pattern to scale across any archetype in IEP, not just the first use case. No one-offs. The system grows with the workforce, not around it."
  - icon: "02d_redefined.svg"
    title: "Redefined the escalation path"
    blurb: "Moved the org from a linear handoff model to a tiered system where AI, self-service, and human expertise each play a role based on complexity, not habit."
overviewBlurb: "Redesigned the Tier 1 to Tier 2 handoff inside IEP. Gen-AI self-help, an automatic call summary, and attribute based routing replaced a context free Salesforce chat, so a quarter of escalations resolved without a human."
panelSummary:
  - "Tier 1 experts reached Tier 2 SMEs through an archaic Salesforce chat that carried no context and added up to two minutes to every handoff."
  - "I led design end to end: follow-me-home research, the escalation flows and edge cases, platform level components, and the rollout."
  - "The new handover added gen-AI self-help and de-escalation, an automatic call summary, and attribute based routing straight to the right Tier 2 expert."
  - "A quarter of escalations deflected in the cohort, roughly 20 minutes saved on each one, and escalations down about 40 percent year over year."
caseStudy: true
featured: true
order: 5
---

## The situation

TurboTax Tier 1 product support experts handle billing, account, and product
issues at high volume. When they get stuck, they lean on Tier 2 subject matter
experts, the people with the deep product knowledge. The way they reached Tier 2
was the problem.

The omni-chat in Salesforce was archaic and carried zero context. It asked the
expert a string of questions before it would connect anyone, adding delays of up
to two minutes on every handoff. Follow-me-home sessions made it concrete.
Experts were typing in information the system already knew, which drove up
average handle time and customer service time, and all of it landed on the
customer waiting on the line.

The problem in the expert's own words:

> I am a TurboTax product support expert trying to connect to a Tier 2 expert to
> get unblocked so I can quickly help my customer, but the chat takes too long to
> connect because the system should already know the context and should not make
> me answer questions it already has.

## What I was asked to do

Redesign how Tier 1 experts connect to Tier 2 inside the Intuit Expert Portal
(IEP), as part of moving the expert workforce off Salesforce. Cut the friction,
automate the context sharing, and fold in gen-AI assistance so the system
deflects escalations that never needed a human. The bar was specific. Integrate
it cleanly into Intuit Assist, build it at the platform level so it holds up
across IEP, and have it ready for peak.

## How I worked the problem

**Research first, in the field.** I ran follow-me-home sessions with real
TurboTax experts to watch the current handoff and find where it broke. The
pattern was clear and repeated. Experts wasted effort answering redundant
questions the system should have carried for them.

**Define the flows and the edges.** I mapped the escalation flows end to end,
defined the edge cases, and worked with the business requirements so the design
matched the real constraints. The feature slotted into the larger Salesforce
into IEP program and had to be available for the third peak.

**Four requirements that shaped the design.** Tier 1 capability lived inside
Intuit Assist, not a separate tool. Self-help answers came first, pulled from a
curated knowledge base through a question and answer plug-in, so the system
tried to unblock the expert before any handoff. A human handover plug-in
activated the Tier 2 connection. And context passed to Tier 2 automatically
through the telephony widget, so no one re-typed what was already known.

**Two ways into the flow, one outcome.** Some experts ask their question first.
They put it to Intuit Assist, read the answer, and only request a Tier 2 chat if
it falls short. Others go straight for escalation. There the design encourages
self-help first with a de-escalation step, then follows the same path. Either
way, before the connection, Intuit Assist generates a call summary that the
Tier 1 expert verifies, so Tier 2 starts with the full picture.

**Tier 2 picks up with context in hand.** When the Tier 1 expert confirms they
need help, the handover plug-in connects them to the next available Tier 2
expert and the engagement context travels with them. Tier 2 can treat the Tier 1
expert like their customer and jump into a screen share when the issue calls for
it.

**Specs built for durability.** I documented every component and state for
engineering with pixel accuracy, and built on durable design system components
rather than custom code, so the handover holds up and extends to any use case
inside IEP.

**Shipped without breaking peak.** I prepared the development specs including
edge cases, error states, and interactions, partnered with engineering through
daily scrum updates, ran pre-production testing across scenarios, and put it
through user acceptance testing with real experts on both typical and complex
situations before production.

## The results

We launched to a cohort first, 20 percent of Tier 1 product experts, and the
numbers were strong enough to scale. The cohort deflected 24 percent of
escalations, cutting contacts that escalated from 10.2 percent down to 6.1
percent, with roughly 20 minutes saved on every escalation avoided. On that
result, the experience rolled out to 100 percent of product experts weeks later.

At scale it held. Tier 1 escalations dropped about 40 percent year over year,
average handle time came down, transaction NPS improved, and expert tooling
readiness stayed above its target. The gen-AI self-help, call summarization, and
attribute based routing together made the Human Intervention Agent a real step
past parity, not a like for like rebuild of the old chat.

## What I took from it

This is the project I point to for designing AI into a workflow instead of
bolting it on. It was grounded in field research, built at the platform level so
the patterns are reusable, and measured with outcomes that mattered to both the
experts and the customers waiting on them. Design did not stop at launch.
Post-launch monitoring feeds the next iteration, and the plan is to extend the
same advantages to the other expert archetypes across the platform.
