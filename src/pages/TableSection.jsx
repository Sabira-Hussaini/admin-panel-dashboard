import { MoreHorizontal } from "lucide-react";

// Helper to determine status color
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white";
  }
};

export default function TableSection({ orders }) {
  if (!orders) return null;

  return (
    <div className="space-y-4 sm:space-y-6">

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>

          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium self-start sm:self-auto">
            View All
          </button>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-3 p-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {order.id}
                </span>
                <MoreHorizontal className="w-5 h-5 text-slate-500" />
              </div>

              <p className="text-sm text-slate-800 dark:text-white">
                {order.customer}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">
                  {order.amount}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block">
          <table className="w-full">

            <thead>
              <tr className="text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {order.id}
                  </td>

                  <td className="p-4 text-sm text-slate-800 dark:text-white">
                    {order.customer}
                  </td>

                  <td className="p-4 text-sm text-slate-800 dark:text-white">
                    {order.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <MoreHorizontal className="w-4 h-4 text-slate-800 dark:text-white cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}