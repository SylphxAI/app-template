# Sylphx App Template

SylphxAI/app-template is a Next.js template for creating Sylphx Platform applications with the Sylphx SDK pre-configured.

## Lifecycle

- State: `active`
- Layer: `tooling`
- Machine manifest: [`.doctrine/project.json`](./.doctrine/project.json)

## Goals

- Provide a minimal production-shaped Next.js App Router template for new Sylphx Platform apps.
- Demonstrate the expected Sylphx SDK configuration and environment variable contract.
- Keep generated app scaffolding separate from platform service implementation.

## Non-Goals

- This repository does not own the Sylphx Platform backend services or SDK implementation.
- This repository does not own the product roadmap or runtime behavior of apps generated from the template.
- This repository does not own enterprise engineering doctrine.

## Boundary

This repository owns template source files, template documentation, sample pages, and the app-level SDK usage examples. The Sylphx SDK, platform services, generated applications, deployment infrastructure, and enterprise doctrine remain outside this repository.

## Public Surfaces

- Template README: [`README.md`](./README.md)
- Package scripts and dependencies: [`package.json`](./package.json)
- Next.js app routes: [`app/`](./app/)
- Next.js configuration: [`next.config.ts`](./next.config.ts)
- TypeScript configuration: [`tsconfig.json`](./tsconfig.json)

## Delivery

The repository currently has no GitHub Actions workflow or recorded required status contexts. Template proof is `npm run build` and a generated-app smoke test that verifies the documented environment contract and SDK imports. This manifest slice is documentation-only and does not change template code, package metadata, CI, or deployment configuration.
