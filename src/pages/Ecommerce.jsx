// src/pages/Ecommerce.jsx
const products = [
  { id: 1, name: "T-shirt", price: "$25", stock: 12 },
  { id: 2, name: "Sneakers", price: "$60", stock: 5 },
  { id: 3, name: "Backpack", price: "$45", stock: 8 },
];
 import { useAppStore } from "../store/useAppStore";

function Ecommerce() {


const searchTerm = useAppStore((state) => state.searchTerm);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">E-commerce</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg shadow-md">
          <thead className="bg-slate-100 dark:bg-slate-700 text-left">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-slate-200 dark:border-slate-600">
                <td className="px-4 py-2">{p.id}</td>
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.price}</td>
                <td className="px-4 py-2">{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ecommerce;