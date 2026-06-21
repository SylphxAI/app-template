# Agent Instructions

This repository consumes the Sylphx engineering doctrine from [SylphxAI/doctrine](https://github.com/SylphxAI/doctrine).

Before changing files here:

- Read [PROJECT.md](./PROJECT.md) and [`.doctrine/project.json`](./.doctrine/project.json) for this repository's goal, lifecycle, boundary, public surfaces, and adoption gaps.
- Read `SylphxAI/doctrine` `AGENTS.md`, `PRINCIPLES.md`, and `ADR.md`, then load any triggered standards.
- Keep template behavior generic; product-specific behavior belongs in the generated product repository.

Do not implement Sylphx Platform backend services or generated-app business logic here. This repository owns the app template only.
