import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <span className="inline-block text-4xl mb-4">⚡</span>
          <h1 className="text-4xl font-bold mb-4">
            Your Sylphx App
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Auth, database, billing, AI and more — all ready to go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link
            href="/dashboard"
            className="block p-6 border rounded-xl hover:border-blue-500 transition-colors text-left"
          >
            <h2 className="font-semibold mb-2">Dashboard →</h2>
            <p className="text-sm text-gray-500">View your app dashboard</p>
          </Link>

          <a
            href="https://sylphx.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-xl hover:border-blue-500 transition-colors text-left"
          >
            <h2 className="font-semibold mb-2">Documentation →</h2>
            <p className="text-sm text-gray-500">Learn how to use the Sylphx SDK</p>
          </a>

          <a
            href="https://sylphx.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-xl hover:border-blue-500 transition-colors text-left"
          >
            <h2 className="font-semibold mb-2">19 Services →</h2>
            <p className="text-sm text-gray-500">Explore all platform services</p>
          </a>

          <a
            href="https://sylphx.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-xl hover:border-blue-500 transition-colors text-left"
          >
            <h2 className="font-semibold mb-2">Console →</h2>
            <p className="text-sm text-gray-500">Manage your app on Sylphx</p>
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-left">
          <h3 className="font-semibold mb-3">Quick start:</h3>
          <pre className="text-sm font-mono bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`import { createConfig, track, signIn } from '@sylphx/sdk'

const config = createConfig({
  secretKey: process.env.SYLPHX_APP_SECRET!,
})

// Track an event
await track(config, { event: 'page_view' })

// Sign in a user
const session = await signIn(config, { email, password })`}
          </pre>
        </div>
      </div>
    </main>
  );
}
