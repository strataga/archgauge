# Foundation Threat Model

Assets: repository evidence, credentials, workspace isolation, findings, reports, model budget, audit history, and release integrity.

Trust boundaries: browser/API; tenant/application/database; untrusted repository/ingestion; ReadyRay/model provider; worker/queue; CI/release registry; operator portal.

Primary abuses include object-level authorization failure, path traversal, symlink/archive bombs, secret leakage, prompt injection, hallucinated citations, job replay, quota bypass, SSRF, forged webhooks, operator misuse, and supply-chain compromise.

Controls are deny-by-default authorization, bounded allowlists, no code execution, pre-persistence secret scanning, typed state machines, idempotency ledgers, exact citations, deterministic scoring, human publication, cost caps, audit logs, least privilege, signed releases, SBOMs, and hostile tests. Implementation evidence is pending.
