import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="bg-black text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Post</h2>
      <form>
        <label htmlFor="postTitle" className="block mb-2">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="w-full p-2 mb-4 bg-gray-800 text-white"
        />
        <label htmlFor="postAuthor" className="block mb-2">
          Author:
        </label>
        <select
          id="postAuthor"
          className="w-full p-2 mb-4 bg-gray-800 text-white"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent" className="block mb-2">
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          className="w-full p-2 mb-4 bg-gray-800 text-white"
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
