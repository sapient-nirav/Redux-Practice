import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";
const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handelDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div className="container">
      <h2 className="mb-5 mx-auto text-center text-2xl font-bold">
        CRUD using Redux Store
      </h2>
      <div className="flex justify-end">
        <Link
          to="/create"
          className="mb-5 my-3 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
        >
          +Add
        </Link>
      </div>
      <table className="text-gray-500 w-full mt-5">
        <thead className="bg-gray-50 text-gray-800">
          <tr>
            <td className="px-6 py-3 font-medium">ID</td>
            <td className="px-6 py-3 font-medium">Name</td>
            <td className="px-6 py-3 font-medium">Email</td>
            <td className="px-6 py-3 font-medium">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-3">{user.id}</td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">
                <Link
                  to={`/update/${user.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl"
                >
                  Update
                </Link>
                <button
                  onClick={() => handelDelete(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-medium px-4 mx-2 py-2 rounded-xl"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
