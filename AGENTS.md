# ArchGauge Agent Guide

Global instructions apply. Read `docs/PRD.md`, `docs/architecture/overview.md`, and relevant ADRs before implementation.

- Runtime: Node.js 24 LTS. Commands/package manager: Bun.
- Architecture: DDD modular monolith with clean/hexagonal boundaries; composition roots only wire modules.
- Public API: `/v1`, OpenAPI 3.1, RFC 9457 errors, complete Postman coverage.
- AI: untrusted evidence, versioned prompts/schemas, cited proposals, deterministic scoring, human publication.
- Security: deny by default; never execute submitted code; never commit secrets or private career/GSD/Beads/customer material.
- Workflow: the seed commit is the sole direct-main exception. All later changes use signed commits and pull requests.
- Releases: SemVer, changelog, human release notes, checksums, CycloneDX SBOM, signatures, attestations.
- Foundation-stage checks: `git diff --check`, `git diff --cached --check`, `git diff --check origin/main...HEAD`, `actionlint`, and `shellcheck .githooks/pre-commit`. Add stack-specific lint, type, test, and build commands with the first application code. Coverage is at least 80% once code exists.

Remote creation, rulesets, domains, provider settings, cloud spend, billing, credentials, and deployment require explicit approval.
