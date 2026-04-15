import RevenueChart from "./RevenueChart";
import SalseChart from "./SalesChart";

export default function ChartSection({
  revenueData = [],
  salesData = [],
}) {
  // safety guards
  const safeRevenue = Array.isArray(revenueData) ? revenueData : [];
  const safeSales = Array.isArray(salesData) ? salesData : [];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      
      <div className="xl:col-span-2 min-h-[300px] flex">
        <RevenueChart data={safeRevenue} />
      </div>
     

      <div className="space-y-6 min-h-[300px] flex flex-col">
        <SalseChart data={safeSales} />
      </div>

    </div>
  );
}
