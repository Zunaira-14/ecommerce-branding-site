import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No Items Added</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="border shadow p-4 rounded-lg">
              <img src={item.image} className="h-24 mx-auto" />
              <h3 className="mt-2 font-bold">{item.name}</h3>
              <p>{item.price}</p>
              <button
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(removeFromCart(index))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
