# Contributing

ArchGauge is in its foundation stage. Discuss material product or architecture changes in an issue before implementation.

1. Create a focused branch from current `main`.
2. Keep commits signed and add a DCO sign-off: `git commit -s`.
3. Run `git diff --check`, `git diff --cached --check`, `git diff --check origin/main...HEAD`, `actionlint`, and `shellcheck .githooks/pre-commit`. Run the documented stack-specific checks once application code exists.
4. Update tests, ADRs, API docs, Postman collection, changelog, release notes, and runbooks when the change affects them.
5. Open a pull request using the template. Resolve all conversations and required checks before squash merge.

After the seed commit, direct pushes to `main` are not allowed. A solo maintainer may merge a fully checked PR without self-approval; self-approval is not treated as independent review.
