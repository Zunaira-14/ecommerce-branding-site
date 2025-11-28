import React from "react";
import { FaCheck, FaCheckCircle, FaGlobe, FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WebDetail = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <p className="p-10 text-red-500">Product not found!</p>;
  }

  const relatedProducts = [
    { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/products/lamp.svg" },
    { id: 2, name: "Apple Watch Series", price: "$50.00-$120.00", image: "/products/headphone2.svg" },
    { id: 3, name: "Men Blazers Sets Elegant", price: "$7.00-$99.50", image: "/cloth/t1.svg" },
    { id: 4, name: "Basketball Crew Socks Long", price: "$5.00-$30.00", image: "/cloth/t2.svg" },
    { id: 5, name: "New Summer Men's T-Shirts", price: "$7.00-$99.50", image: "/cloth/t3.svg" },
  ];

  const bottomRelatedProducts = [
    { id: 1, title: "Smart watches", price:  "$32.00-$40.00", img: "/products/watch.svg" },
    { id: 2, title: "Cameras", price: "$50.00-$120.00", img: "/products/camera.svg" },
    { id: 3, title: "Headphones", price: "$7.00-$99.50", img: "/products/headphone2.svg" },
    { id: 4, title: "Gaming set", price: "$7.00-$99.50", img: "/products/thermas.svg" },
    { id: 5, title: "Laptop", price: "$7.00-$99.50", img: "/products/laptop.svg" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 space-y-8 bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="text-gray-600 text-sm">
        Home &gt; Clothings &gt; Men’s wear &gt; Summer clothing
      </div>

      {/* Product Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Product Image */}
        <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-sm">
          <img src={item.image} alt={item.name} className="w-full object-contain rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="lg:w-2/3 flex flex-col gap-4">

          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="text-gray-500">Supplier: Guanjoi Trading LLC</p>

          <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
            <span>⭐ 9.3</span>
            <span>| 32 reviews</span>
            <span>| 154 sold</span>
            <span>| Germany, Berlin</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-red-500 font-bold text-xl">{item.price}</span>
            <span className="line-through text-gray-400">$90.00</span>
            <span className="line-through text-gray-400">$78.00</span>
          </div>

          {/* Product Info & Seller Card */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Product Details Card */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-sm space-y-2">
              <p><span className="font-semibold">Type:</span> Classic shoes</p>
              <p><span className="font-semibold">Material:</span> Plastic material</p>
              <p><span className="font-semibold">Design:</span> Modern nice</p>
              <p><span className="font-semibold">Customization:</span> Customized logo and design custom packages</p>
              <p><span className="font-semibold">Protection:</span> Refund Policy</p>
              <p><span className="font-semibold">Warranty:</span> 2 years full warranty</p>
            </div>

            {/* Seller Info Card */}
            <div className="flex-1 bg-white shadow-md rounded-lg p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <img src="/r.svg" alt="" /> Supplier: Guanjoi Trading LLC
              </h3>

              <div className="h-px bg-gray-300"></div>

              <p className="text-gray-600 flex items-center gap-2 text-lg font-medium">
                <img src="/ger.svg" alt="" /> Germany, Berlin
              </p>

              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <span className="text-xl"><FaCheckCircle/></span>
                Verified Seller
              </div>

              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <span className="text-xl"><FaGlobe/></span>
                Worldwide Shipping
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
                  Send Inquiry
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 w-full">
                  Seller’s Profile
                </button>
              </div>

              <div className="flex items-center gap-2 pt-3 cursor-pointer text-gray-600 hover:text-red-500">
                <span className="text-xl"><FaHeart/></span>
                <p className="text-sm font-medium">Save for later</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Description */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Description Tab */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm space-y-4">
          <div className="flex flex-wrap gap-4 border-b pb-2 text-gray-700 font-semibold">
            <span className="cursor-pointer hover:text-blue-600">Description</span>
            <span className="cursor-pointer hover:text-blue-600">Reviews</span>
            <span className="cursor-pointer hover:text-blue-600">Shipping</span>
            <span className="cursor-pointer hover:text-blue-600">About Seller</span>
          </div>

          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="text-gray-600 text-sm space-y-2 font-medium">
            <p><span className="font-bold">Model:</span> #8786867</p>
            <p><span className="font-bold">Style:</span> Classic style</p>
            <p><span className="font-bold">Certificate:</span> ISO-898921212</p>
            <p><span className="font-bold">Size:</span> 34mm x 450mm x 19mm</p>
            <p><span className="font-bold">Memory:</span> 36GB RAM</p>
            <p><span className="font-bold">Features:</span> Some great feature name here</p>
            <p className="flex items-center gap-2"><FaCheck /> Lorem ipsum dolor sit amet</p>
            <p className="flex items-center gap-2"><FaCheck /> Duis aute irure dolor</p>
            <p className="flex items-center gap-2"><FaCheck /> Some great feature name here</p>
          </div>
        </div>

        {/* You May Like / Related Products */}
        <div className="lg:w-1/3 bg-white shadow-md px-5 py-10">
          <h2 className="text-2xl font-semibold mb-4">You May Like</h2>
          <div className="flex flex-col gap-4">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="bg-white border rounded-md shadow-sm p-3 w-full flex gap-3 cursor-pointer hover:shadow-md transition">
                <img src={rp.image} alt={rp.name} className="w-20 h-20 object-contain" />
                <div>
                  <p className="text-sm font-medium">{rp.name}</p>
                  <p className="text-blue-600 font-semibold">{rp.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Related Products */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bottomRelatedProducts.map((rp) => (
            <div key={rp.id} className="bg-white border rounded-md shadow-sm p-3 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer">
              <img src={rp.img} alt={rp.title} className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium">{rp.title}</p>
              <p className="text-blue-600 font-semibold">{rp.price}</p>
            </div>
          ))}
        </div>
      </div>

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
};

export default WebDetail;
