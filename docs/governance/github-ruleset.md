# GitHub Ruleset (apply after publication approval)

Target `main` and release tags.

- Require pull requests after the seed commit; zero approvals for the solo-maintainer stage, but all conversations must resolve.
- Require signed commits, linear history, current branches, and required checks: `CI / check`, `CodeQL / analyze`, `Dependency Review`, and `Security / gitleaks`.
- Block force pushes and deletions. Restrict bypass to repository recovery and record any use.
- Protect `v*` tags and GitHub environments. Release jobs use least-privilege OIDC and manual environment approval.

After the remote exists, export/read back the ruleset and update this file with its identifier and exact required-check names. Ruleset mutation requires explicit approval.
