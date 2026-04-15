import RevenueChart from "./RevenueChart";
import SalesChart from "./SalesChart";

export default function ChartSection({
  revenueData = [],
  salesData = [],
}) {
  const safeRevenue = Array.isArray(revenueData) ? revenueData : [];
  const safeSales = Array.isArray(salesData) ? salesData : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      
      {/* Revenue Chart */}
      <div className="md:col-span-2 xl:col-span-2 min-h-[250px] sm:min-h-[300px] flex">
        <RevenueChart data={safeRevenue} />
      </div>

      {/* Sales Chart */}
      <div className="min-h-[250px] sm:min-h-[300px] flex flex-col">
        <SalesChart data={safeSales} />
      </div>

    </div>
  );
}