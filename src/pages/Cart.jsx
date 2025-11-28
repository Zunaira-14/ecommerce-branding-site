
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { removeFromCart, updateQty, addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  // Saved for later items
  const [savedItems, setSavedItems] = useState(
    JSON.parse(localStorage.getItem("saved") || "[]")
  );

  // Remove from cart
  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = localCart.filter((i) => i._id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update quantity
  const handleQtyChange = (itemId, delta) => {
    const item = cartItems.find((i) => i._id === itemId);
    if (!item) return;
    let newQty = item.qty + delta;
    if (newQty < 1) newQty = 1;

    dispatch(updateQty({ id: itemId, qty: newQty }));

    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = localCart.map((i) =>
      i._id === itemId ? { ...i, qty: newQty } : i
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Save for later
  const handleSaveForLater = (item) => {
    handleRemove(item._id);

    const updatedSaved = [...savedItems, item];
    setSavedItems(updatedSaved);
    localStorage.setItem("saved", JSON.stringify(updatedSaved));
  };

  // Move back to cart from saved
  const moveToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));

    const updatedSaved = savedItems.filter((i) => i._id !== item._id);
    setSavedItems(updatedSaved);
    localStorage.setItem("saved", JSON.stringify(updatedSaved));

    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localCart.push({ ...item, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(localCart));
  };

  // Totals (price converted to number)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.qty,
    0
  );
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Cart ({cartItems.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ---------------- LEFT CART ITEMS ---------------- */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={item._id || `cart_${index}`}
                className="border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start bg-white shadow-sm"
              >
                <img
                  src={item.image || item.img}
                  alt={item.title || item.name}
                  className="w-32 h-32 object-contain"
                />

                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-lg">{item.title || item.name}</p>

                  <p className="text-gray-600 text-sm">
                    Size: {item.size || "medium"}, Color: {item.color || "blue"}, Material:{" "}
                    {item.material || "Plastic"}
                  </p>

                  <p className="text-gray-600 text-sm">Seller: {item.seller || "Unknown"}</p>

                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-red-500 font-bold">${parseFloat(item.price).toFixed(2)}</p>

                    <div className="flex items-center gap-2 border rounded px-2 py-1">
                      <button onClick={() => handleQtyChange(item._id, -1)}>
                        <FaMinus />
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQtyChange(item._id, 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2 text-sm">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="flex items-center gap-1 text-red-600 hover:underline"
                    >
                      <FaTrash /> Remove
                    </button>

                    <button
                      onClick={() => handleSaveForLater(item)}
                      className="text-blue-600 hover:underline"
                    >
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ---------------- RIGHT SUMMARY ---------------- */}
        <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
          <h2 className="font-bold text-xl">Order Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax:</span>
            <span>+ ${tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
          >
            Checkout
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full border border-gray-400 text-gray-700 py-2 rounded hover:bg-gray-100"
          >
            Back to Shop
          </button>
        </div>
      </div>

      {/* ---------------- SAVED FOR LATER ---------------- */}
      {savedItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Products Saved for Later</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {savedItems.map((item, index) => (
              <div
                key={item._id || `saved_${index}`}
                className="border rounded-lg p-4 bg-white shadow-sm flex flex-col items-center h-[360px]"
              >
                <img
                  src={item.image || item.img}
                  alt={item.title || item.name}
                  className="h-28 w-28 object-contain mt-6"
                />

                <p className="font-semibold text-sm mt-2 text-center">{item.title || item.name}</p>
                <p className="text-red-500 font-bold text-sm mt-1">${parseFloat(item.price).toFixed(2)}</p>

                <button
                  onClick={() => moveToCart(item)}
                  className="mt-4 px-3 py-1 bg-gray-600 text-white text-xs rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call-to-Action Section */}
      <div className="mt-8 w-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md">
        <div className="flex-1 bg-blue-500 text-white p-6 flex flex-col items-center justify-center space-y-2">
          <h3 className="text-lg font-semibold text-center">
            Super discount on more than 100 USD
          </h3>
          <p className="text-sm text-center">
            Have you ever finally just write dummy info
          </p>
        </div>

        <div className="flex-1 bg-blue-900 text-blue-900 flex items-center justify-center">
          <button className="bg-blue-500 font-semibold px-6 py-2 rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
