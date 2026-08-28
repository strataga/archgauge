# Release Policy

- Version public contracts with SemVer. `0.y.z` means unstable; `1.0.0` requires stable contracts and recorded install/upgrade/recovery/operating proof.
- Every release PR updates `CHANGELOG.md` and `docs/releases/vX.Y.Z.md` with summary, changes, compatibility, migration, security, known limits, rollback, and verification.
- Release from a protected tag on an exact checked commit.
- Publish immutable image digests, checksums, CycloneDX SBOMs, signatures, and GitHub artifact attestations.
- A failed required check blocks release. Never edit a published release artifact in place.
