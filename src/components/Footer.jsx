import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 w-full">
      {/* 🔹 Newsletter Section */}
      <div className="text-center py-10 border-b border-gray-200 px-4 sm:px-6 md:px-16 lg:px-32">
        <h3 className="text-lg font-semibold mb-1">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-500 mb-5">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:flex-1 p-2 border border-gray-300 rounded-md sm:rounded-r-none outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md sm:rounded-l-none hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* 🔹 Main Footer Section */}
      <div className="bg-white px-4 sm:px-6 md:px-16 lg:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img src="baners/logo.svg" alt="logo" className="mb-4 w-32 mx-auto lg:mx-0" />
            <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
              Best information about the company <br />
              goes here but now lorem ipsum is used
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 text-gray-500 text-lg">
              <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {/* About */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-gray-800">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">About Us</li>
              <li className="hover:text-gray-800 cursor-pointer">Find store</li>
              <li className="hover:text-gray-800 cursor-pointer">Categories</li>
              <li className="hover:text-gray-800 cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Partnership */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-gray-800">Partnership</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">About Us</li>
              <li className="hover:text-gray-800 cursor-pointer">Find store</li>
              <li className="hover:text-gray-800 cursor-pointer">Categories</li>
              <li className="hover:text-gray-800 cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Information */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-gray-800">Information</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">Help Center</li>
              <li className="hover:text-gray-800 cursor-pointer">Money Refund</li>
              <li className="hover:text-gray-800 cursor-pointer">Shipping</li>
              <li className="hover:text-gray-800 cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* For Users */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-gray-800">For Users</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">Login</li>
              <li className="hover:text-gray-800 cursor-pointer">Register</li>
              <li className="hover:text-gray-800 cursor-pointer">Settings</li>
              <li className="hover:text-gray-800 cursor-pointer">My Orders</li>
            </ul>
          </div>

          {/* Get App */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 text-gray-800">Get App</h4>
            <div className="flex flex-col items-center sm:items-start space-y-3">
              <img src="flags/appstore.svg" alt="App Store" className="w-32 hover:scale-105 transition cursor-pointer" />
              <img src="flags/googlestore.svg" alt="Google Play" className="w-32 hover:scale-105 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50 py-4 px-4 sm:px-6 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="text-center md:text-left">© 2023 Ecommerce.</p>
        <div className="flex items-center justify-center md:justify-start space-x-2 mt-3 md:mt-0">
          <img src="flags/eng.svg" alt="flag" className="w-20 h-10 rounded-sm" />
          <span className="text-xs">▾</span>
        </div>
      </div>
    </footer>
  );
}
