import { supabase } from "./supabaseClient";

export const getDashboardData = async () => {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*");

  if (error) throw error;

  // -------- STATS --------
  const totalOrders = orders?.length || 0;

  const totalRevenue =
    orders?.reduce((sum, o) => {
      const amount = Number(o.amount.replace("$", "")) || 0;
      return sum + amount;
    }, 0) || 0;

  const pendingOrders =
    orders?.filter((o) => o.status === "Pending").length || 0;

  const stats = [
    { title: "Orders", value: totalOrders },
    { title: "Revenue", value: `$${totalRevenue}` },
    { title: "Pending", value: pendingOrders },
  ];

  // -------- REVENUE CHART --------
  const monthlyRevenue = {};

  orders?.forEach((order) => {
    const date = new Date(order.created_at || Date.now());
    const month = date.toLocaleString("default", { month: "short" });

    const amount = Number(order.amount.replace("$", "")) || 0;

    if (!monthlyRevenue[month]) monthlyRevenue[month] = 0;

    monthlyRevenue[month] += amount;
  });

  const revenueData = Object.keys(monthlyRevenue).map((month) => ({
    month,
    revenue: monthlyRevenue[month],
  }));

  // -------- SALES DATA --------
  const salesData = [
    {
      name: "Completed",
      value: orders.filter((o) => o.status === "Completed").length,
    },
    {
      name: "Pending",
      value: orders.filter((o) => o.status === "Pending").length,
    },
    {
      name: "Cancelled",
      value: orders.filter((o) => o.status === "Cancelled").length,
    },
  ];

  return {
    stats,
    orders,
    revenueData,
    salesData,
  };
};