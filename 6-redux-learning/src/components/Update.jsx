import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../UserReducer";
const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  
  return (
    <div className="flex w-full h-full justify-center items-center mt-10">
      <div className="w-full max-w-md bg-white border rounded-md overflow-hidden shadow-2xl">
        <h2 className="text-2xl ml-12 font-bold">Update your details here.</h2>
        <form className="p-5" onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name."
              className="placeholder:italic w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address."
              id="email"
              className="placeholder:italic w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
