# Architecture Overview

ArchGauge begins as a modular monolith with separate web, API, and worker processes around shared domain/application packages.

## Bounded contexts

- Identity and Workspaces
- Evidence
- Reviews and Findings
- Reports
- AI Evaluation
- Operations and Usage

Domain code owns invariants and typed lifecycle models. Application use cases orchestrate ports. Adapters own HTTP, PostgreSQL, GitHub, object storage, queues, and AI providers. Framework composition roots wire dependencies only.

PostgreSQL is the durable source of truth. Durable jobs are idempotent and replay-safe. OpenTelemetry carries request/review correlation across logs, metrics, and traces. Public HTTP contracts use `/v1`, OpenAPI 3.1, and RFC 9457.

No submitted code is executed. Evidence is size/type/path bounded, scanned for secrets before persistence or model transmission, pinned by digest, and cited by path/line/hash.
