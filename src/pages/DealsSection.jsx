import React from "react";

export default function DealsSection({ onAddToCart, onSelectProduct }) {
  const deals = [
    { id: 1, name: "Deal T-Shirt", price: 10, img: "/image/cloth/1.svg" },
    { id: 2, name: "Deal Jeans", price: 12, img: "/image/cloth/3.svg" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {deals.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded cursor-pointer"
          onClick={() => onSelectProduct(item)}
        >
          <img src={item.img} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
