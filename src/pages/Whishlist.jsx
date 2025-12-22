import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/cart/wishlistSlice.js";
import { addToCart } from "../features/cart/cartSlice"; // ✅ Import addToCart

export default function WebListView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false); // Mobile sidebar toggle

  const listViewItems = useSelector((state) => state.listview.items);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const res = await axios.get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/api/products"
      );
      setApiProducts(res.data.data || res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const exists = wishlist.find((w) => w.title === item.title);
    if (!exists) wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    navigate("/wishlist");
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // ✅ Add to Redux cart
    navigate("/cart"); // ✅ Navigate to cart
  };

  const allProducts = [...listViewItems, ...apiProducts];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8">

      {/* Mobile filter toggle */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h1 className="text-2xl font-bold">🛒 Your Products</h1>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-2 bg-blue-600 text-white rounded"
        >
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Sidebar */}
        <aside className={`bg-white shadow-sm p-4 rounded-lg h-fit space-y-6 transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block md:w-1/4 fixed md:relative z-20 left-0 top-0 md:top-auto md:left-auto`}>
          
          {/* Categories, Brands, Price, Condition, Ratings */}
          <div>
            <h2 className="font-bold text-lg mb-2">Category</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Mobile accessory</li>
              <li>Electronics</li>
              <li>Smartphones</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Brands</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Samsung</li>
              <li>Apple</li>
              <li>Huawei</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Price Range</h2>
            <input type="number" placeholder="Min" className="border px-2 py-1 w-full rounded mb-2" />
            <input type="number" placeholder="Max" className="border px-2 py-1 w-full rounded" />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Condition</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Any</li>
              <li>Brand New</li>
              <li>Refurbished</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Ratings</h2>
            <ul className="space-y-1 text-gray-600">
              <li>⭐⭐</li>
              <li>⭐⭐⭐</li>
              <li>⭐⭐⭐⭐</li>
              <li>⭐⭐⭐⭐⭐</li>
            </ul>
          </div>
        </aside>

        {/* Product Cards */}
        <div className="md:col-span-3 md:ml-auto w-full">
          {loading && apiProducts.length === 0 ? (
            <p>Loading...</p>
          ) : allProducts.length === 0 ? (
            <p className="text-gray-500 text-lg">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {allProducts.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 bg-white shadow-sm flex flex-col sm:flex-row md:flex-col lg:flex-col gap-4 relative"
                >
                  <FaHeart
                    onClick={() => handleAddToWishlist(item)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-red-500 cursor-pointer"
                    size={20}
                  />

                  <img
                    src={item.img || item.image}
                    alt={item.title || item.name}
                    className="h-24 w-24 object-contain self-center"
                  />

                  <div className="flex-1 space-y-1 text-sm">
                    <p className="font-semibold text-base">{item.title || item.name}</p>

                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">${item.price}</span>
                      {item.oldPrice && (
                        <span className="line-through text-gray-400">${item.oldPrice}</span>
                      )}
                    </div>

                    <p className="text-gray-600">⭐ {item.rating || "4.5"} | {item.orders || 150} orders</p>
                    <p className="text-green-600 text-sm">Free Shipping</p>
                    <p className="text-gray-500 line-clamp-2">
                      {item.description || "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <button
                        onClick={() => navigate(`/product/${item._id || item.title}`)}
                        className="text-blue-600 underline text-sm"
                      >
                        View details
                      </button>

                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
