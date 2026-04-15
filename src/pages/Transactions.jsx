// src/pages/Transactions.jsx
const transactions = [
  { id: 1, user: "Alice", amount: "$120", status: "Completed" },
  { id: 2, user: "Bob", amount: "$75", status: "Pending" },
  { id: 3, user: "Charlie", amount: "$200", status: "Failed" },
];

function Transactions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md divide-y divide-slate-200 dark:divide-slate-700">
        {transactions.map((t) => (
          <div key={t.id} className="px-4 py-3 flex justify-between hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
            <div>
              <p className="font-medium text-slate-800 dark:text-white">{t.user}</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">{t.amount}</p>
            </div>
            <p className={`text-sm font-medium ${t.status === "Completed" ? "text-green-600" : t.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
              {t.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;