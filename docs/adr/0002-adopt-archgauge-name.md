# ADR 0002: Adopt the ArchGauge Name

**Status:** Accepted

**Date:** 2026-08-27

## Context

The original ReadyRay name sounded like a person's name and did not clearly communicate the product's purpose. ReadyLens improved the review metaphor but overlapped with established photography and magnification uses. The product needs a short, credible name that supports architecture consulting, open-source adoption, and evidence-based scoring without implying certification.

A practical namespace and product screen found no active same-category software collision for ArchGauge. It did find an unrelated [1988 FDA record for an ARCHGAUGE physical-medicine device](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K881024), so the screen is not treated as legal clearance.

## Decision

Rename the product to **ArchGauge**. “Arch” makes the architecture focus explicit. “Gauge” presents the product as an instrument that measures available evidence and reports findings while leaving publication and professional judgment with a human reviewer.

## Alternatives Considered

- **ReadyRay:** memorable but easily heard as “ready, Ray” and weakly connected to architecture.
- **ReadyLens:** useful review metaphor, but crowded by existing lens and photography products.
- **ArchScan:** concise, but already used by an architecture-analysis product for a directly overlapping capability.
- **ArchHelm** and **ArchCite:** available short forms, but respectively emphasize guidance or citations instead of the full review and scoring workflow.

## Consequences

- Public source, documentation, package metadata, portfolio content, and future releases use ArchGauge.
- Existing ReadyRay URLs should redirect where practical so early links do not break.
- ArchGauge remains a review instrument, not a certification, compliance opinion, or substitute for professional judgment.
- A formal trademark review remains a prerequisite before commercial launch or material brand spending.

## Verification and Follow-up

- Before public copy or repository metadata changes are merged, reviewers should search for stale ReadyRay or ReadyLens branding outside explicit historical or redirect references.
- Revisit the name only if formal legal review, domain acquisition, or a material same-category conflict makes continued use unsafe.
