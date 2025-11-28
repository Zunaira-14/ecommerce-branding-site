
import React from "react";
import { useNavigate } from "react-router-dom";

const Recomended = () => {
  const navigate = useNavigate();

  const cloths = [
    { id: 1, name: "T-shirt with multiple colors, for men", price: "$10.30", image: "/cloth/t1.svg" },
    { id: 2, name: "Jeans shorts for men blue color", price: "$12.50", image: "/cloth/t2.svg" },
    { id: 3, name: "Brown winter coat medium size", price: "$9.80", image: "/cloth/t3.svg" },
      { id: 4, name: "Jeans winter coat medium size", price: "$11.20", image: "/cloth/vilot.svg" },
  { id: 5, name: "Jeans bag for travel for men", price: "$11.20", image: "/products/lamp.svg" },
   { id: 6, name: "Leather wallet", price: "$11.20", image: "/baners/image.png" },
   { id: 7, name: "Stylish Summer Shirt", price: "$11.20", image: "/cloth/t4.svg" },
  { id: 8, name: "Stylish Summer Shirt", price: "$11.20", image: "/products/headphone2.svg" },
   { id: 9, name: "Stylish Summer Shirt", price: "$11.20", image: "/flags/image.png" },
  { id: 10, name: "Stylish Summer Shirt", price: "$11.20", image: "/cloth/image.png" },
   { id: 11, name: "Stylish Summer Shirt", price: "$11.20", image: "/image copy.png" },
  { id: 12, name: "Stylish Summer Shirt", price: "$11.20", image: "/image copy 2.png" },
  ];

  const handleCardClick = (item) => {
    // ID ke saath navigate karenge detail page par
    navigate(`/detail/${item.id}`, { state: { item } });
  };

  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-semibold ml-5 text-gray-800 mb-6 text-center md:text-left">
        Recommended Items
      </h2>

      <div className="flex flex-wrap ml-5 justify-center md:justify-start gap-6">
        {cloths.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all p-3 flex flex-col items-center text-center cursor-pointer"
            style={{ width: "220px", height: "310px" }}
            onClick={() => handleCardClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-sm text-gray-700 font-medium line-clamp-2">
              {item.name}
            </h3>
            <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomended;
