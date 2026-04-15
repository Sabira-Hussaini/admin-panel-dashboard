import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BarChart3, Users, ShoppingBag, Package,
  CreditCard, MessageSquare, Calendar, FileText, Settings, Zap
} from "lucide-react";

const iconMap = {
  dashboard: LayoutDashboard,
  analytics: BarChart3,
  users: Users,
  ecommerce: ShoppingBag,
  inventory: Package,
  transactions: CreditCard,
  messages: MessageSquare,
  calendar: Calendar,
  reports: FileText,
  settings: Settings,
};

export default function Sidebar({ collapsed, menuItems = [], user }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`${collapsed ? "w-20" : "w-64"} h-screen bg-white dark:bg-slate-900 border-r flex flex-col transition-all`}>

      {/* LOGO */}
      <div className="p-5 flex items-center space-x-3">
        <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Zap className="text-white w-5 h-5" />
        </div>

        {!collapsed && (
          <div>
            <h1 className="font-semibold">Nexus</h1>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        )}
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = iconMap[item.id] || LayoutDashboard;
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              {!collapsed && <span className="ml-3 text-sm">{item.label}</span>}
            </div>
          );
        })}
      </nav>

      {/* USER */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <img src={user?.avatar} className="w-9 h-9 rounded-full" />
          {!collapsed && (
            <div>
              <p className="text-sm">{user?.name || "User"}</p>
              <p className="text-xs text-slate-500">{user?.role || "Role"}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}