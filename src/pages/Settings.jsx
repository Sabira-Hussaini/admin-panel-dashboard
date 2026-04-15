// src/pages/Settings.jsx
import { useState } from "react";
 import { useAppStore } from "../store/useAppStore";
function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
const searchTerm = useAppStore((state) => state.searchTerm);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-700 dark:text-slate-200">Enable Notifications</span>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-700 dark:text-slate-200">Dark Mode</span>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </div>
  );
}

export default Settings;