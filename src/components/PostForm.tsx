import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createPostAsync } from "../slices/postSlice";

const PostForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
        user_id: 1, // TODO: call backend for user id
        tag_id: 1, // TODO: call backend for tag id
      },
    };
    dispatch(createPostAsync(formData));
    setTitle("");
    setBody("");
  };

  return (
    <div className="px-4 bg-transparent">
      <h1 className="font-semibold text-2xl my-2 text-center">CREATE POST</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          className="block w-full h-10 p-2 focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          name="title"
          placeholder="Enter your post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="block w-full h-24 p-2 mt-2 focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          name="body"
          placeholder="Enter your post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="my-2 w-full p-2 tracking-wide text-white text-lg transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
