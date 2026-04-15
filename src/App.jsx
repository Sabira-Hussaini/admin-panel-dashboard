import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";

// Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Ecommerce from "./pages/Ecommerce";
import Inventory from "./pages/Inventory";
import Transactions from "./pages/Transactions";
import Messages from "./pages/Messages";
import CalendarPage from "./pages/CalendarPage";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {

  // ================= GLOBAL STATES =================
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  const [user, setUser] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // ================= USER + MENU =================
  useEffect(() => {
    const fakeUser = {
      name: "Sabira Hussaini",
      role: "Administrator",
      avatar: "/src/assets/sh.jpeg",
    };

    const fakeMenu = [
      { id: "dashboard", label: "Dashboard", path: "/" },
      { id: "analytics", label: "Analytics", path: "/analytics" },
      { id: "users", label: "Users", path: "/users" },
      { id: "ecommerce", label: "E-commerce", path: "/ecommerce" },
      { id: "inventory", label: "Inventory", path: "/inventory" },
      { id: "transactions", label: "Transactions", path: "/transactions" },
      { id: "messages", label: "Messages", path: "/messages", badge: "12" },
      { id: "calendar", label: "Calendar", path: "/calendar" },
      { id: "reports", label: "Reports", path: "/reports" },
      { id: "settings", label: "Settings", path: "/settings" },
    ];

    setUser(fakeUser);
    setMenuItems(fakeMenu);
  }, []);



  return (
    <div className="min-h-screen">
      <div className="flex h-screen overflow-hidden bg-white dark:bg-slate-900 text-slate-800 dark:text-white transition-all duration-500">

        {/* ================= SIDEBAR ================= */}
        <Sidebar
          collapsed={sideBarCollapsed}
          menuItems={menuItems}
          user={user}
        />

        {/* ================= MAIN AREA ================= */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* ================= HEADER (GLOBAL CONTROL) ================= */}
          <Header setSideBarCollapsed={setSideBarCollapsed} user={user} />

          {/* ================= ROUTES ================= */}
          <div className="flex-1 overflow-y-auto p-6">

            <Routes>

              {/* 🔥 SEARCH PASSED TO ALL PAGES */}
              <Route path="/" element={<Dashboard  />} />
              <Route path="/analytics" element={<Analytics  />} />
              <Route path="/users" element={<Users  />} />
              <Route path="/ecommerce" element={<Ecommerce  />} />
              <Route path="/inventory" element={<Inventory  />} />
              <Route path="/transactions" element={<Transactions  />} />
              <Route path="/messages" element={<Messages  />} />
              <Route path="/calendar" element={<CalendarPage  />} />
              <Route path="/reports" element={<Reports  />} />
              <Route path="/settings" element={<Settings  />} />

            </Routes>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;