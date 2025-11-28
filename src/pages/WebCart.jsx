import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WebCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  function save(newItems) {
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  }

  function updateQty(id, qty) {
    const nxt = items.map(i => i._id === id ? { ...i, qty } : i);
    save(nxt);
  }

  function removeItem(id) {
    const nxt = items.filter(i => i._id !== id);
    save(nxt);
  }

  const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">My cart ({items.length})</h1>

        {items.length === 0 ? (
          <div className="bg-white p-8 rounded shadow-sm text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Continue shopping</button>
          </div>
        ) : (
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="space-y-4">
              {items.map(it => (
                <div key={it._id || it.id} className="flex gap-4 items-center">
                  <img src={it.image || "/mnt/data/8410a369-c58f-4fd6-9c5b-2141f245aa7d.png"} alt={it.title} className="w-24 h-24 object-contain" />
                  <div className="flex-1">
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-sm text-gray-500">{it.brand} • {it.category}</div>
                    <div className="mt-2">Price: ${it.price}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(it._id, Math.max(1, (it.qty || 1) - 1))} className="px-2 py-1 border rounded">-</button>
                      <div className="px-3">{it.qty || 1}</div>
                      <button onClick={() => updateQty(it._id, (it.qty || 1) + 1)} className="px-2 py-1 border rounded">+</button>
                    </div>
                    <button onClick={() => removeItem(it._id)} className="mt-2 text-sm text-red-500">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <div className="text-gray-600">Subtotal</div>
                <div className="text-2xl font-bold">${subtotal.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => { localStorage.removeItem("cart"); setItems([]); }} className="px-4 py-2 border rounded">Clear</button>
                <button onClick={() => alert("Proceed to checkout (add payment later)")} className="px-4 py-2 bg-green-600 text-white rounded">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
