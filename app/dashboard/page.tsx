/**
 * Dashboard Page
 *
 * Server component — fetches data server-side using Sylphx SDK.
 * Auth check is done via middleware or server-side session.
 */

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Starter dashboard</p>
          <h1 className="text-2xl font-bold">Your app metrics</h1>
          <p className="text-gray-500 text-sm mt-2">
            These cards populate after you connect Sylphx services and send your first events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Total Users</div>
            <div className="text-2xl font-bold">No data yet</div>
          </div>
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Revenue</div>
            <div className="text-2xl font-bold">No revenue yet</div>
          </div>
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Active Sessions</div>
            <div className="text-2xl font-bold">No sessions yet</div>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Connect auth, analytics, and billing when you are ready to replace these starter states with live data.{" "}
          <a
            href="https://sylphx.com/docs/quickstart"
            className="text-blue-500 hover:underline"
          >
            Read the quickstart →
          </a>
        </p>
      </div>
    </main>
  );
}
