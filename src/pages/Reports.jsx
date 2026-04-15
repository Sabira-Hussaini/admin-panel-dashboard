// src/pages/Reports.jsx
const reports = [
  { id: 1, title: "Sales Report", value: "$12,340" },
  { id: 2, title: "Users Report", value: "2.4k Users" },
  { id: 3, title: "Inventory Report", value: "847 Items" },
];
 import { useAppStore } from "../store/useAppStore";

function Reports() {
 

const searchTerm = useAppStore((state) => state.searchTerm);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-sm text-slate-500 dark:text-slate-300">{report.title}</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{report.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;