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
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Total Users</div>
            <div className="text-2xl font-bold">—</div>
          </div>
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Revenue</div>
            <div className="text-2xl font-bold">—</div>
          </div>
          <div className="border rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Active Sessions</div>
            <div className="text-2xl font-bold">—</div>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Connect your Sylphx services to start seeing data here.{" "}
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
