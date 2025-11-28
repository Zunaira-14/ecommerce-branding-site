// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [payment, setPayment] = useState({
    method: "card", // "card" or "cod"
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Simple validation
    if (!shipping.name || !shipping.email || !shipping.address) {
      alert("Please fill required shipping fields");
      return;
    }

    // Mock order object
    const order = {
      items: cartItems,
      shipping,
      payment,
      total,
      date: new Date(),
    };

    console.log("Order placed:", order);

    // Clear cart in Redux and localStorage
    dispatch(clearCart());
    localStorage.removeItem("cart");

    // Redirect to confirmation page
    navigate("/order-success", { state: { order } });
  };

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ---------------- LEFT: Shipping + Payment ---------------- */}
        <div className="md:col-span-2 space-y-6">
          {/* Shipping */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <h2 className="font-bold text-xl mb-2">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shipping.name}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shipping.email}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={shipping.phone}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shipping.address}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shipping.city}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={shipping.state}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={shipping.zip}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={shipping.country}
                onChange={handleShippingChange}
                className="border px-3 py-2 rounded w-full"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <h2 className="font-bold text-xl mb-2">Payment Method</h2>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="card"
                  checked={payment.method === "card"}
                  onChange={handlePaymentChange}
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="cod"
                  checked={payment.method === "cod"}
                  onChange={handlePaymentChange}
                />
                Cash on Delivery (COD)
              </label>
            </div>

            {payment.method === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={payment.cardNumber}
                  onChange={handlePaymentChange}
                  className="border px-3 py-2 rounded w-full"
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={payment.expiry}
                  onChange={handlePaymentChange}
                  className="border px-3 py-2 rounded w-full"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={payment.cvv}
                  onChange={handlePaymentChange}
                  className="border px-3 py-2 rounded w-full"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 mt-4"
          >
            Place Order
          </button>
        </div>

        {/* ---------------- RIGHT: Order Summary ---------------- */}
        <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
          <h2 className="font-bold text-xl mb-2">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center">
              <p className="text-sm">{item.title || item.name} x {item.qty}</p>
              <p className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}

          <div className="border-t pt-2 space-y-1">
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
          </div>
        </div>
      </div>
    </div>
  );
}
