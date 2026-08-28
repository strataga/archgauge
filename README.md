# ArchGauge

ArchGauge is an open-source architecture and production-readiness review platform. It is being designed to turn bounded repository evidence into cited findings, reproducible scores, explicit risks, and human-approved reports.

> Status: foundation only. No application review capability is implemented yet. Do not use this repository as evidence that ArchGauge is production-ready or deployable.

## Product principles

- Evidence before claims
- Deterministic checks before model-assisted review
- AI proposes; deterministic code scores; humans publish
- Safe, bounded ingestion that never executes submitted code
- One Apache-2.0 source and release stream for self-hosted and hosted use
- Production behavior needs tests, observability, recovery, and release proof

See [the PRD](docs/PRD.md), [architecture overview](docs/architecture/overview.md), [roadmap](docs/roadmap.md), and [quality scorecard](docs/quality-scorecard.md).

## Development

ArchGauge will use Bun for workspace commands and Node.js 24 LTS in production. The repository currently contains only its product and engineering foundation, so there are no application dependencies to install yet.

```bash
git diff --check # unstaged changes
git diff --cached --check # staged changes
git diff --check origin/main...HEAD # committed branch changes
actionlint
shellcheck .githooks/pre-commit
```

Install the local hook once:

```bash
git config core.hooksPath .githooks
```

The seed commit is the only direct-to-`main` exception. Every later change uses a signed branch commit and pull request. Releases use Semantic Versioning and human-readable release notes. The public source is [github.com/strataga/archgauge](https://github.com/strataga/archgauge); no deployed service exists yet.

## Security

Do not report vulnerabilities in public issues. Follow [SECURITY.md](SECURITY.md). ArchGauge is not a certification, compliance opinion, or substitute for professional judgment.

## License

Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
