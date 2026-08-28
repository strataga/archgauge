# ArchGauge Product Requirements

## Promise

Given supported evidence, ArchGauge will inventory it without executing repository code, produce deterministic and optionally model-assisted cited findings, compute a versioned score, and require human review before publication.

## Initial users

- Engineering leaders preparing a system for release or investment
- Architects conducting repeatable reviews
- Maintainers who need a self-hosted evidence workflow

## v1 boundaries

- Public GitHub repositories and bounded self-hosted uploads
- Deterministic review before AI
- Findings classify fact, inference, assumption, or insufficient evidence
- HTML, PDF, JSON, and ADR-ready Markdown reports
- Self-hosted Docker Compose and bounded Railway Cloud beta

Not in v1: arbitrary URLs, executing submitted code, autonomous fixes, Kubernetes, private Cloud repositories, billing, or a closed-source edition.

## Success evidence

First report within 15 minutes from a clean supported install; at least 80% measurable coverage; WCAG 2.2 AA; OpenAPI/Postman completeness; hostile-input and AI eval thresholds; install, upgrade, backup, restore, rollback, and incident proof before stable release.

See `docs/roadmap.md` for sequence and `docs/architecture/overview.md` for boundaries.
