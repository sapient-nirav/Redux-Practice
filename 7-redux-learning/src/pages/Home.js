import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Welcome to the Redux toolkit store</h2>
      <section>
        <h3 className="text-2xl font-medium text-center">Products</h3>
        <Products/>
      </section>
    </div>
  );
};

export default Home;
