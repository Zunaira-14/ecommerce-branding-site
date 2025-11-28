import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { setProducts } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductCard({ onSelectProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.filteredProducts);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        dispatch(setProducts(data));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [dispatch]);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const diff = targetDate - new Date();
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const finalProducts = products.map((p) => ({
    ...p,
    image: p.image
      ? p.image.startsWith("http")
        ? p.image
        : `http://localhost:5000${p.image}`
      : "https://via.placeholder.com/100",
  }));

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="bg-white shadow-sm rounded-xl p-4 sm:p-6 md:p-8">

        <div className="flex flex-col md:flex-row gap-6">
          {/* Countdown / Sidebar */}
          <div className="md:w-1/4 shrink-0 text-black p-4 bg-white rounded-lg shadow sm:shadow-md">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Deals and Offers</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Hygiene equipments</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hour" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-600 text-gray-100 rounded-md w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center font-bold text-sm sm:text-base"
                >
                  <span>{item.value.toString().padStart(2, "0")}</span>
                  <span className="text-[10px] sm:text-xs text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {finalProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white border shadow-sm rounded-lg p-3 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 sm:h-28 sm:w-28 mb-2 object-contain"
                />
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{product.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">${product.price}</p>

                <button
                  className="mt-2 bg-gray-500 text-white text-xs sm:text-sm px-2 py-1 rounded-md hover:bg-blue-700 w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="mt-1 text-blue-600 text-xs sm:text-sm underline w-full"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
