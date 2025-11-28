
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 md:p-12 bg-white shadow rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image ? `http://localhost:5000${product.image}` : "https://via.placeholder.com/300"}
          alt={product.name}
          className="h-64 w-64 md:h-80 md:w-80 object-contain rounded-lg border"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 uppercase tracking-wide text-sm">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>
          <p className="text-2xl font-semibold text-green-600">
            Price: ${product.price.toFixed(2)}
          </p>
          <div className="mt-4 text-gray-700 leading-relaxed">
            <p>
              {product.description ||
                "This premium product is crafted with high-quality materials to ensure durability and comfort. Perfect for daily use, it offers both style and functionality. Don't miss out on this essential addition to your collection."}
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>High-quality, durable materials</li>
              <li>Ergonomic and user-friendly design</li>
              <li>Available in multiple sizes and colors</li>
              <li>Perfect gift for family and friends</li>
            </ul>
          </div>
        </div>
      </div>
        {/* Call-to-Action Section */}
<div className="mt-8 w-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md">
  {/* Left Side - Dark Blue */}
  <div className="flex-1 bg-blue-500 text-white p-6 flex flex-col items-center justify-center space-y-2">
    <h3 className="text-lg font-semibold text-center">
      Super discount on more than 100 USD
    </h3>
    <p className="text-sm text-center">
      Have you ever finally just write dummy info
    </p>
  </div>

  {/* Right Side - Light Blue */}
  <div className="flex-1 bg-blue-900 text-blue-900 flex items-center justify-center ">
    <button className="bg-blue-500 font-semibold px-6 py-2 rounded hover:bg-blue-600 ">
      Shop Now
    </button>
  </div>
</div>
    </div>
  );
}
