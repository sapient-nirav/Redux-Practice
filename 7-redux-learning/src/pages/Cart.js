import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <h3 className="text-2xl font-medium text-center">Cart</h3>
      {products && products.length > 0 ? (
        <div className="mx-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              className="m-4 p-4 bg-gray-100 w-full shadow-lg rounded-2xl"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-[80px]"
              />
              <h5 className="mt-2 text-sm font-semibold">{product.title}</h5>
              <h5 className="text-gray-700">$ {product.price}</h5>
              <button
                onClick={() => handleRemove(product.id)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div class="grid h-screen place-content-center bg-white px-4">
          <h1 class="uppercase tracking-widest text-gray-500">
            No items in the cart Add it from here.{" "}
            <Link
              to="/"
              className="text-blue-500 font-bold italic hover:text-blue-600"
            >
              Home
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Cart;
