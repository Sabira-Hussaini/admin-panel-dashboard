// src/pages/Messages.jsx
const messages = [
  { id: 1, from: "Alice", subject: "Meeting Reminder", time: "10:00 AM" },
  { id: 2, from: "Bob", subject: "Project Update", time: "11:30 AM" },
  { id: 3, from: "Charlie", subject: "New Assignment", time: "2:00 PM" },
];
import { useAppStore } from "../store/useAppStore";
function Messages() {


const searchTerm = useAppStore((state) => state.searchTerm);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md divide-y divide-slate-200 dark:divide-slate-700">
        {messages.map((msg) => (
          <div key={msg.id} className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
            <p className="font-medium text-slate-800 dark:text-white">{msg.from}</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">{msg.subject}</p>
            <p className="text-xs text-slate-400 dark:text-slate-400">{msg.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;