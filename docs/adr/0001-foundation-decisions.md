# ADR 0001: Foundation Decisions

**Status:** Accepted — 2026-08-27

## Decisions

- Apache License 2.0; Community and hosted use the same source and released images.
- DDD modular monolith with clean/hexagonal boundaries before considering service extraction.
- Bun workspaces and commands; Node.js 24 LTS production runtime for NestJS/enterprise ecosystem compatibility.
- Direct AI provider adapters behind `AiReviewPort`; no agent framework until eval evidence justifies one.
- One complete seed commit, then signed PR-only changes, linear history, SemVer, changelog, and reviewed release notes.

## Consequences

The system stays inspectable and self-hostable. Remote rulesets and release protections remain pending until GitHub publication is explicitly approved.
