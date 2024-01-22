import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex cursor-pointer" onClick={()=>navigate('/')}>
        <img
          src="https://redux.js.org/img/redux.svg"
          alt=""
          className="w-6 mr-2"
        />
        <span className="text-lg font-bold">Redux Store</span>
      </div>
      <div className="flex space-x-4 font-medium">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart
        </Link>
        <span className="text-gray-300">Cart items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
