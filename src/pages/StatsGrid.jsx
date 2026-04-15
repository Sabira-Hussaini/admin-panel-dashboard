import { ArrowRight } from "lucide-react";

export default function StatsGrid({ data }) {
  if (!Array.isArray(data)) return <p>Loading stats...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {data.map((stat, index) => {
        const Icon = stat.icon || null;

        return (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-start justify-between gap-3">
              
              {/* Left content */}
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.title}
                </p>

                <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {stat.value}
                </p>

                <div className="flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">{stat.change || ""}</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`p-2 sm:p-3 rounded-xl ${stat.bgColor || ""}`}>
                {Icon && (
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.textColor || ""}`} />
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 sm:mt-4 h-1.5 sm:h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stat.color || ""}`}
                style={{ width: stat.progress || "0%" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}