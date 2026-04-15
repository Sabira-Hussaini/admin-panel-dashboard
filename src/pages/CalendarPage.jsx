import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Calendar</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
      />
      <p>Selected date: {date}</p>
    </div>
  );
}