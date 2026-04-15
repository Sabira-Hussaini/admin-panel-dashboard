import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function SalesChart({ data = [] }) {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 w-full h-[350px] flex flex-col">
      
      <h3 className="text-lg font-bold mb-4">Sales by Category</h3>

      {/* IMPORTANT FIX */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={safeData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
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
      <div className="mt-4 space-y-2">
        {safeData.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}