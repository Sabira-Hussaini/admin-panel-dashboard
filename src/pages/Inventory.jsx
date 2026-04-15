// src/pages/Inventory.jsx
const inventoryItems = [
  { id: 1, name: "Laptop", quantity: 15 },
  { id: 2, name: "Keyboard", quantity: 40 },
  { id: 3, name: "Monitor", quantity: 20 },
];
import { useAppStore } from "../store/useAppStore";

function Inventory() {
  

const searchTerm = useAppStore((state) => state.searchTerm);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {inventoryItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-sm text-slate-500 dark:text-slate-300">{item.name}</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{item.quantity} in stock</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;