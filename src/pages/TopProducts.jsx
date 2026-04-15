export function TopProducts({ products }) {
  if (!products) return null; // Handle loading state

  return (
    <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <h2 className="mb-4 font-semibold text-slate-800 dark:text-white flex justify-between">
        Top Products
        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">View All</span>
      </h2>
      <div className="space-y-3">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="font-medium text-slate-800 dark:text-white">{product.name}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-slate-800 dark:text-white">{product.sales}</p>
              <p className="text-xs text-green-500">{product.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}