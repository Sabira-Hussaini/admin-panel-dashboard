import { ArrowRight } from "lucide-react";

export default function StatsGrid({ data }) {
  if (!Array.isArray(data)) return <p>Loading stats...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((stat, index) => {
        const Icon = stat.icon || null;

        return (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.title}
                </p>

                <p className="text-3xl font-bold">
                  {stat.value}
                </p>

                <div className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>{stat.change || ""}</span>
                </div>
              </div>

              <div className={`p-3 rounded-xl ${stat.bgColor || ""}`}>
                {Icon && (
                  <Icon className={`w-6 h-6 ${stat.textColor || ""}`} />
                )}
              </div>
            </div>

            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
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