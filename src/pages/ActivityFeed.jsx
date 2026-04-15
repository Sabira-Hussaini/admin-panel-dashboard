import { User, ShoppingCart, CreditCard, Database, AlertCircle } from "lucide-react";

export function ActivityFeed({ activities }) {
  if (!activities) return <p>Loading activity feed...</p>;

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
      <h2 className="mb-4 font-semibold text-slate-800 dark:text-white flex justify-between">
        Activity Feed
        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">View All</span>
      </h2>

      <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
        {activities.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div>{item.icon}</div>
            <div>
              <p className="font-medium text-slate-800 dark:text-white">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}