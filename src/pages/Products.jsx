
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const { id } = useParams(); // URL se product ID
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (!product)
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back Btn */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="bg-white shadow rounded-xl p-6 flex gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-contain"
        />

        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold">{product.name}</h2>

          {/* Price */}
          <p className="text-lg text-gray-600 mt-2">
            Price: <span className="font-semibold">${product.price}</span>
          </p>

          {/* Category & Stock */}
          <p className="text-gray-500 mt-1">Category: {product.category}</p>
          <p className="text-gray-500 mt-1">Stock: {product.stock}</p>

          {/* Description */}
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
