import React from "react";
import { useDispatch } from "react-redux";
import { addToListView } from "../features/cart/listViewSlice";
import { useNavigate } from "react-router-dom";

export default function Category({ onSelectProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [
    {
      svg: "/baners/b2.svg",
      items: [
        { title: "Kitchen mixer", price: 100, img: "/products/chair1.svg" },
        { title: "Blenders", price: 39, img: "/products/lamp.svg" },
        { title: "Home appliance", price: 19, img: "/products/dishwasher.svg" },
        { title: "Coffee maker", price: 10, img: "/products/potry.svg" },
        { title: "Mixer", price: 10, img: "/products/mixer.svg" },
        { title: "Blender", price: 10, img: "/products/blender.svg" },
        { title: "Home appliance", price: 10, img: "/products/homeappliance.svg" },
        { title: "Plant", price: 10, img: "/products/plant.svg" },
      ],
    },
    {
      svg: "/baners/b3.svg",
      items: [
        { title: "Smart watches", price: 19, img: "/products/watch.svg" },
        { title: "Cameras", price: 89, img: "/products/camera.svg" },
        { title: "Headphones", price: 10, img: "/products/headphone2.svg" },
        { title: "Gaming set", price: 35, img: "/products/thermas.svg" },
        { title: "Laptop", price: 35, img: "/products/laptop.svg" },
        { title: "Mobile 2", price: 35, img: "/products/mobile2.svg" },
        { title: "Mobile 3", price: 35, img: "/products/mobile3.svg" },
        { title: "Headphone 1", price: 35, img: "/products/headphone1.svg" },
      ],
    },
  ];

  const handleListView = (item) => {
    dispatch(addToListView(item));
    navigate("/WebListView");
  };

  return (
    <section className="space-y-6 px-4 sm:px-6 md:px-10 lg:px-16">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* SVG banner */}
          <div className="w-full md:w-1/4 min-h-[120px] flex items-center justify-center bg-gray-50 p-2">
            <img src={cat.svg} alt="category-img" className="object-contain w-full h-full" />
          </div>

          {/* Items grid */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-3 flex flex-col items-start hover:shadow transition w-full"
              >
                <div className="flex justify-between w-full items-center mb-2">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">From USD {item.price}</p>
                  </div>

                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain h-20 w-20 sm:h-24 sm:w-24"
                  />
                </div>

                {/* ListView button */}
                <button
                  onClick={() => handleListView(item)}
                  className="bg-neutral-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 transition w-full text-center"
                >
                  Add listview
                </button>

                {/* Details button */}
                <button
                  className="mt-1 text-blue-600 text-xs underline w-full text-left"
                  onClick={() => onSelectProduct && onSelectProduct(item)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
