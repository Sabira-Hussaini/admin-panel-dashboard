export function TopProducts({ products }) {
  if (!products) return null;

  return (
    <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      
      {/* Header */}
      <h2 className="mb-4 font-semibold text-slate-800 dark:text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-base sm:text-lg">Top Products</span>
        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
          View All
        </span>
      </h2>

      {/* List */}
      <div className="space-y-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center justify-between gap-3"
          >
            
            {/* Left */}
            <div className="min-w-0">
              <p className="font-medium text-sm sm:text-base text-slate-800 dark:text-white truncate">
                {product.name}
              </p>
            </div>

            {/* Right */}
            <div className="text-right shrink-0">
              <p className="font-medium text-sm sm:text-base text-slate-800 dark:text-white">
                {product.sales}
              </p>
              <p className="text-[10px] sm:text-xs text-green-500">
                {product.growth}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}