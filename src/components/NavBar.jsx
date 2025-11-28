
import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaComment, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCategory, setSearch } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container  ml-40 flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="baners/logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop & Mobile Menu */}
        <div className={`flex-1 sm:flex items-center gap-4 ${menuOpen ? "flex flex-col mt-4 sm:flex-row sm:mt-0" : "hidden sm:flex"}`}>

          {/* Search Bar */}
          <div className="flex flex-1 w-full sm:max-w-xl">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
              className="border-2 w-full border-blue-500 rounded-l-md p-2 focus:outline-none"
            />
            <select
              onChange={handleCategoryChange}
              className="border-2 border-blue-500 text-sm hidden sm:block px-2"
            >
              <option value="all">All Categories</option>
              <option value="mobiles">Mobiles</option>
              <option value="accessories">Accessories</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
              <option value="electronics">Electronics</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <div className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
              <FaUser size={24} />
              <span className="hidden sm:block">Profile</span>
            </div>

            <div className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
              <FaComment size={24} />
              <span className="hidden sm:block">Message</span>
            </div>

            <div className="cursor-pointer hover:text-blue-800 flex items-center gap-1">
              <FaHeart size={24} />
              <span className="hidden sm:block">Orders</span>
            </div>

            <div
              className="cursor-pointer hover:text-blue-800 flex items-center gap-1"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={24} />
              <span className="hidden sm:block">My Cart</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default NavBar;
