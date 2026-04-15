// src/pages/Analytics.jsx
function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <p className="text-sm text-slate-500 dark:text-slate-300 mb-2">Website Traffic</p>
          <div className="h-40 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <p className="text-sm text-slate-500 dark:text-slate-300 mb-2">Sales Overview</p>
          <div className="h-40 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;