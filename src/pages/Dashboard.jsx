import { useState, useEffect } from "react";
import { DollarSign, Users, ShoppingCart, Eye, User, CreditCard, ShoppingCart as CartIcon, Database, AlertCircle } from "lucide-react";
import StatsGrid from "./StatsGrid";
import ChartSection from "./ChartSection";
import TableSection from "./TableSection";
import { TopProducts } from "./TopProducts";
import { ActivityFeed } from "./ActivityFeed";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [salesData, setSalesData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [topProducts, setTopProducts] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    // ---------- Stats ----------
    const statsData = {
      revenue: 124563,
      lastRevenue: 110000,
      users: 8549,
      lastUsers: 7900,
      orders: 2847,
      lastOrders: 2400,
      views: 45892,
      lastViews: 47000,
    };
    const formatChange = (current, last) => `${current - last >= 0 ? "+" : ""}${(((current - last)/last)*100).toFixed(1)}%`;

    setStats([
      {
        title: "Total Revenue",
        value: `$${statsData.revenue.toLocaleString()}`,
        change: formatChange(statsData.revenue, statsData.lastRevenue),
        icon: DollarSign,
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        textColor: "text-emerald-600 dark:text-emerald-400",
        progress: `${(statsData.revenue / 150000) * 100}%`,
      },
      {
        title: "Active Users",
        value: statsData.users.toLocaleString(),
        change: formatChange(statsData.users, statsData.lastUsers),
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        textColor: "text-blue-600 dark:text-blue-400",
        progress: `${(statsData.users / 10000) * 100}%`,
      },
      {
        title: "Orders",
        value: statsData.orders.toLocaleString(),
        change: formatChange(statsData.orders, statsData.lastOrders),
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        textColor: "text-purple-600 dark:text-purple-400",
        progress: `${(statsData.orders / 3000) * 100}%`,
      },
      {
        title: "Page Views",
        value: statsData.views.toLocaleString(),
        change: formatChange(statsData.views, statsData.lastViews),
        icon: Eye,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        textColor: "text-orange-600 dark:text-orange-400",
        progress: `${(statsData.views / 50000) * 100}%`,
      },
    ]);

    // ---------- Revenue Chart ----------
    setRevenueData([
      { month: "Jan", revenue: 45000, expenses: 32000 },
      { month: "Feb", revenue: 52000, expenses: 38000 },
      { month: "Mar", revenue: 48000, expenses: 42000 },
      { month: "Apr", revenue: 61000, expenses: 40000 },
      { month: "May", revenue: 55000, expenses: 45000 },
      { month: "Jun", revenue: 72000, expenses: 55000 },
      { month: "Jul", revenue: 68000, expenses: 50000 },
      { month: "Aug", revenue: 78000, expenses: 58000 },
    ]);

    // ---------- Sales Chart ----------
    setSalesData([
      { name: "Electronics", value: 45, color: "#10b981" },
      { name: "Clothing", value: 30, color: "#3b82f6" },
      { name: "Books", value: 15, color: "#f59e0b" },
      { name: "Other", value: 10, color: "#8b5cf6" },
    ]);

    // ---------- Orders ----------
    setOrders([
      { id: "#123", customer: "John Doe", amount: "$120", status: "Completed" },
      { id: "#124", customer: "Jane Smith", amount: "$250", status: "Pending" },
      { id: "#125", customer: "Alice Johnson", amount: "$500", status: "Cancelled" },
    ]);

    // ---------- Top Products ----------
    setTopProducts([
      { name: 'MacBook Pro 16"', sales: "$2,987,530", growth: "+12%" },
      { name: "iPhone 15 Pro", sales: "$2,587,044", growth: "+8%" },
      { name: "AirPods Pro", sales: "$1,200,000", growth: "+5%" },
    ]);

    // ---------- Activity Feed ----------
    setActivity([
      { icon: <User className="w-5 h-5 text-blue-500" />, title: "New user registered", description: "John Smith created an account", time: "2 minutes ago" },
      { icon: <CartIcon className="w-5 h-5 text-green-500" />, title: "New order received", description: "Order #3847 for $2,399", time: "5 minutes ago" },
      { icon: <CreditCard className="w-5 h-5 text-purple-500" />, title: "Payment processed", description: "Payment of $1,199 completed", time: "12 minutes ago" },
      { icon: <Database className="w-5 h-5 text-orange-500" />, title: "System update", description: "Database backup completed", time: "1 hour ago" },
      { icon: <AlertCircle className="w-5 h-5 text-red-500" />, title: "Low stock alert", description: "iPhone 15 Pro stock is low", time: "2 hours ago" },
    ]);
  }, []);

  return (
    <div className="space-y-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
      <StatsGrid data={stats} />
      <ChartSection revenueData={revenueData} salesData={salesData} />
      <TableSection orders={orders} />
      <TopProducts products={topProducts} />
      <ActivityFeed activity={activity} />
    </div>
  );
}