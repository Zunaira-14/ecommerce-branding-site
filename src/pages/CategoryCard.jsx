
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToListView } from "../features/cart/listViewSlice";
import { selectProduct } from "../features/cart/ProductSlice";
import { useNavigate } from "react-router-dom";
// import api from "http://localhost:5000/api/products"; // Axios instance with baseURL

export default function CategoryCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all products from backend
    api.get("/products")
      .then((res) => {
        // Group products by category
        const grouped = res.data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});

        // Convert to array of objects like your original structure
        const formatted = Object.keys(grouped).map((cat) => ({
          category: cat,
          items: grouped[cat].map((p) => ({
            title: p.name,
            price: p.price,
            img: p.image,
            id: p._id,
          })),
        }));
        setCategories(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddToListView = (item) => {
    dispatch(addToListView(item));
    alert(`${item.title} added to listview`);
    navigate("/listview"); 
  };

  const handleDetails = (item) => {
    dispatch(selectProduct(item));
    navigate("/product"); 
  };

  return (
    <section>
      {categories.map((cat) => (
        <div key={cat.category} className="mb-6">
          <h2 className="font-bold text-xl mb-2">{cat.category}</h2>
          <div className="flex gap-4 overflow-x-auto">
            {cat.items.map((item) => (
              <div
                key={item.id}
                className="border p-2 flex flex-col min-w-[150px]"
              >
                <p>{item.title}</p>
                <p>${item.price}</p>
                <img src={item.img} alt={item.title} className="h-20" />
                
                <button
                  onClick={() => handleAddToListView(item)}
                  className="mt-1 px-2 py-1 bg-blue-600 text-white rounded"
                >
                  Add to ListView
                </button>

               <button
                      onClick={() => navigate(`/product/${item._id || item.title}`)}
                      className="text-blue-600 underline text-sm"
                    >
                      View details
                    </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
