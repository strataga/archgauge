# GitHub Rulesets

Applied to [strataga/archgauge](https://github.com/strataga/archgauge) on 2026-08-27 and read back through the GitHub API. The repository was renamed from `strataga/readyray` on the same date; the ruleset identifiers and protections were preserved.

## Main branch

Ruleset: `Protect main` (`21696610`)

Target: `refs/heads/main`

- Require pull requests after the seed commit; zero approvals for the solo-maintainer stage, but all conversations must resolve.
- Require signed commits, linear history, and current branches.
- Require the exact status-check contexts `check`, `analyze`, `review`, and `gitleaks`. These are provided by the `CI`, `CodeQL`, `Dependency Review`, and `Security` workflows respectively.
- Block force pushes and deletions. No routine bypass actor is configured.

## Release tags

Ruleset: `Protect release tags` (`21696611`)

Target: `refs/tags/v*`

- Require signed commits.
- Block force updates and deletions.

GitHub environment protection will be added with the first deployment workflow. Release jobs must use least-privilege OIDC and manual environment approval. Ruleset mutation requires explicit approval.
