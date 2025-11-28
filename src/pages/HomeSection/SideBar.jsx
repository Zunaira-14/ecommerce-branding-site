import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupModal from "../SignupModal";
import LoginModal from "../LoginModal";

const categories = [
  { name: "Automobiles", link: "/weblistview" },
  { name: "Clothes and wear", link: "/recomended" },
  { name: "Home interiors", link: "/detail/1" },
  { name: "Computer and tech", link: "/wishlist" },
  { name: "Tools and equipment", link: "/category" },
  { name: "Sports and outdoor", link: "/wishlist" },
  { name: "Animals and pets", link: "/wishlist" },
  { name: "Machinery tools", link: null },
  { name: "More category", link: "/wishlist" },
];

const Sidebar = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // mobile toggle

  const handleSignupClose = (type) => {
    setOpenSignup(false);
    if (type === "login") setOpenLogin(true);
  };

  const handleLoginClose = (type) => {
    setOpenLogin(false);
    if (type === "signup") setOpenSignup(true);
  };

  return (
    <div className="bg-white shadow-2xs rounded-lg p-4 md:p-6 mx-4 md:mx-40">

      {/* Signup & Login Modals */}
      <SignupModal isOpen={openSignup} onClose={handleSignupClose} />
      <LoginModal isOpen={openLogin} onClose={handleLoginClose} />

      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? "Close" : "Menu"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">

        {/* Sidebar Categories */}
        <div className={`bg-white md:bg-transparent md:block w-full md:w-1/6 rounded-md shadow md:shadow-none transition-all ${
          showSidebar ? "block" : "hidden"
        } md:block`}>
          <ul className="font-medium text-gray-500">
            {categories.map((cat, index) => (
              <li key={index} className="p-2 cursor-pointer hover:bg-gray-100 text-sm md:text-base">
                {cat.link ? (
                  <Link to={cat.link} className="text-gray-700 hover:text-blue-600">
                    {cat.name}
                  </Link>
                ) : (
                  cat.name
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Banner */}
        <div className="flex justify-center md:justify-start w-full md:w-2/6">
          <img
            src="baners/b1.svg"
            alt="Banner"
            className="w-full sm:w-80 md:w-full lg:w-full h-auto object-contain"
          />
        </div>

        {/* Right side boxes */}
        <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-3/6">

          {/* JOIN NOW / LOGIN BOX */}
          <div className="bg-[#E3F0FF] w-full max-w-xs mx-auto md:mx-0 text-center rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <img src="user.svg" alt="User" className="w-8 h-8" />
              <p className="font-medium text-sm sm:text-base">Hi, user <br /> let's get started</p>
            </div>

            <button
              className="bg-blue-600 text-white w-full py-2 rounded-lg mb-2 hover:bg-blue-700 transition"
              onClick={() => setOpenSignup(true)}
            >
              Join Now
            </button>

            <button
              className="bg-white text-blue-800 w-full py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
              onClick={() => setOpenLogin(true)}
            >
              Log in
            </button>
          </div>

          {/* More boxes */}
          <div className="bg-[#F38332] text-white rounded-2xl w-full p-3 text-center md:text-left">
            <p className="text-sm sm:text-base">
              Get Us $10 off <br /> with a new <br /> supplier
            </p>
          </div>

          <div className="bg-[#55BDC3] text-white w-full rounded-2xl p-3 text-center md:text-left">
            <p className="text-sm sm:text-base">
              Send quotes with <br /> supplier <br /> preference
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
