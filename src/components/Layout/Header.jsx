import { useEffect, useState } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  ChevronDown,
  Bell,
  Plus,
} from "lucide-react";

import { useAppStore } from "../../store/useAppStore";

export default function Header({
  setSideBarCollapsed,
  user,
}) {
  const [openProfile, setOpenProfile] = useState(false);

  const { darkMode, toggleDarkMode, searchTerm, setSearchTerm } =
    useAppStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="
      bg-white dark:bg-slate-900 
      border-b border-slate-200 dark:border-slate-700 
      px-3 sm:px-6 py-3 
      flex items-center justify-between gap-2
    ">
      
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => setSideBarCollapsed((prev) => !prev)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="font-bold text-base sm:text-lg whitespace-nowrap">
          Admin Panel
        </h1>
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users, orders, messages..."
          className="
            w-full pl-10 pr-4 py-2 
            rounded-xl 
            bg-slate-100 dark:bg-slate-800 
            outline-none text-sm
          "
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1 sm:gap-3">

        {/* NEW BUTTON */}
        <button className="
          hidden lg:flex items-center gap-2 
          px-3 py-2 rounded-xl 
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white
        ">
          <Plus className="w-4 h-4" />
          New
        </button>

        {/* NOTIFICATION */}
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* DARK MODE */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* PROFILE */}
        <div className="relative">

          <div
            onClick={() => setOpenProfile((prev) => !prev)}
            className="
              flex items-center gap-2 
              cursor-pointer px-2 py-1 
              rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800
            "
          >
           <img
  src={user?.avatar || "/avatar.png"}
  alt="profile"
  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
  onError={(e) => {
    e.target.src = "/avatar.png";
  }}
/>

            <div className="hidden md:block leading-tight">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-slate-500">{user?.role}</p>
            </div>

            <ChevronDown className="w-4 h-4" />
          </div>

          {/* DROPDOWN */}
          {openProfile && (
            <div className="
              absolute right-0 mt-2 
              w-44 sm:w-48 
              bg-white dark:bg-slate-900 
              border border-slate-200 dark:border-slate-700 
              rounded-xl shadow-lg overflow-hidden
              z-50
            ">
              
              <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-slate-500">{user?.role}</p>
              </div>

              <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">
                Profile
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">
                Settings
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-red-500 text-sm text-red-500 hover:text-white">
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </header>
  );
}