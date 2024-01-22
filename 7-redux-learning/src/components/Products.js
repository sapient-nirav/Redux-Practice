import React, { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../store/productSlice";
const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // console.log(products,status)
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return (
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <div class="grid h-screen place-content-center bg-white px-4">
        <h1 class="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mx-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <div
          className="m-4 p-4 bg-gray-100 w-full shadow-lg rounded-2xl"
          key={product.id}
        >
          <img src={product.image} alt="" className="h-[80px] flex mx-auto bg-transparent shadow-md rounded-full" />
          <h4 className="mt-2 text-sm font-semibold">{product.title}</h4>
          <h5 className="text-gray-700">$ {product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
