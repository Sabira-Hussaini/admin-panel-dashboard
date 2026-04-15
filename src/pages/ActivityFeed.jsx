import { User, ShoppingCart, CreditCard, Database, AlertCircle } from "lucide-react";

export function ActivityFeed({ activities }) {
  if (!activities) return <p>Loading activity feed...</p>;

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl shadow">
      <h2 className="mb-4 font-semibold text-slate-800 dark:text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-base sm:text-lg">Activity Feed</span>
        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
          View All
        </span>
      </h2>

      <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
        {activities.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            
            {/* Icon (slightly smaller on mobile) */}
            <div className="shrink-0 text-base sm:text-lg">
              {item.icon}
            </div>

            <div>
              <p className="font-medium text-slate-800 dark:text-white text-sm sm:text-base">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm">
                {item.description}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
                {item.time}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}