import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function SalesChart({ data = [] }) {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 w-full h-full flex flex-col">
      
      {/* Header */}
      <h3 className="text-base sm:text-lg font-bold mb-4">
        Sales by Category
      </h3>

      {/* Chart */}
      <div className="w-full flex-1 min-h-[220px] sm:min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={safeData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
            >
              {safeData.map((entry, index) => (
                <Cell key={index} fill={entry.color || "#8884d8"} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm">
        {safeData.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-slate-700 dark:text-slate-300">
              {item.name}
            </span>
            <span className="font-medium">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}