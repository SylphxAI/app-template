# Sylphx App Template

A production-ready Next.js 15 template with the [Sylphx Platform](https://sylphx.com) SDK pre-configured.

## What's Included

- **Next.js 15** with App Router
- **`@sylphx/sdk`** — one SDK for 19 backend services
- TypeScript, ESLint, ready to ship

## Quick Start

```bash
npx create-sylphx-app my-app
cd my-app
cp .env.example .env.local
# Fill in your credentials (see below)
npm run dev
```

## Environment Variables

Get your credentials from the [Sylphx Dashboard](https://sylphx.com/dashboard):

```env
NEXT_PUBLIC_SYLPHX_APP_ID=your-app-slug
SYLPHX_APP_SECRET=sk_live_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Services Available

The Sylphx SDK gives you access to 19 production services:

| Service | What it does |
|---------|-------------|
| `auth` | Authentication — OAuth, magic links, 2FA |
| `database` | Managed Postgres with migrations |
| `storage` | Object storage (S3-compatible) |
| `billing` | Subscriptions and payments |
| `ai` | AI Gateway — 200+ LLMs |
| `analytics` | Event tracking and funnels |
| `email` | Transactional + newsletter email |
| `flags` | Feature flags |
| `jobs` | Background jobs and cron |
| `notifications` | Push notifications |
| `search` | Full-text and semantic search |
| `kv` | Key-value store |
| `realtime` | Pub/sub and live updates |
| `monitoring` | Error tracking and performance |
| `webhooks` | Outgoing webhooks |
| `consent` | GDPR/CCPA consent management |
| `referrals` | Referral and invite system |
| `engagement` | Streaks, achievements, leaderboards |
| `deploy` | CI/CD and deployment |

## SDK Usage

```typescript
import { createConfig, track, signIn, getPlans } from '@sylphx/sdk'

const config = createConfig({
  secretKey: process.env.SYLPHX_APP_SECRET!,
})

// Analytics
await track(config, { event: 'signup', properties: { plan: 'pro' } })

// Auth
const { user, token } = await signIn(config, { email, password })

// Billing
const plans = await getPlans(config)
const checkout = await createCheckout(config, { planId: 'pro' })
```

## Documentation

- [Sylphx Platform Docs](https://sylphx.com/docs)
- [SDK Reference](https://sylphx.com/docs/api-reference)
- [Quickstart Guide](https://sylphx.com/docs/quickstart)

## License

MIT
