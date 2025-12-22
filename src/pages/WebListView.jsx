
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/cart/wishlistSlice.js";

export default function WebListView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redux slice items (CategoryCard se add hue)
  const listViewItems = useSelector((state) => state.listview.items);

  // -------------------- LOAD PRODUCTS FROM API --------------------
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

  // -------------------- ADD TO WISHLIST --------------------
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));

    // LocalStorage me save
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const exists = wishlist.find((w) => w.title === item.title);
    if (!exists) wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Wishlist page pe navigate
    navigate("/wishlist");
  };

  // Merge API + Redux listView items
  const allProducts = [...listViewItems, ...apiProducts];

  return (
    <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <aside className="bg-white shadow-sm p-4 rounded-lg h-fit space-y-6">
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

      {/* ---------------- RIGHT PRODUCT CARDS ---------------- */}
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold mb-4">🛒 Your Products</h1>

        {loading && apiProducts.length === 0 ? (
          <p>Loading...</p>
        ) : allProducts.length === 0 ? (
          <p className="text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="space-y-4">
            {allProducts.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white shadow-sm flex items-center gap-4 relative"
              >
                {/* ❤️ Heart Icon */}
                <FaHeart
                  onClick={() => handleAddToWishlist(item)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-red-500 cursor-pointer"
                  size={20}
                />

                {/* Product Image */}
                <img
                  src={item.img || item.image}
                  alt={item.title || item.name}
                  className="h-24 w-24 object-contain"
                />

                {/* Product Details */}
                <div className="flex-1 space-y-1 text-sm">
                  <p className="font-semibold text-base">{item.title || item.name}</p>

                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">${item.price}</span>
                    {item.oldPrice && (
                      <span className="line-through text-gray-400">${item.oldPrice}</span>
                    )}
                  </div>

                  <p className="text-gray-600">
                    ⭐ {item.rating || "4.5"} | {item.orders || 150} orders
                  </p>

                  <p className="text-green-600 text-sm">Free Shipping</p>

                  <p className="text-gray-500 line-clamp-2">
                    {item.description ||
                      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => navigate(`/product/${item._id || item.title}`)}
                      className="text-blue-600 underline text-sm"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
