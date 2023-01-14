import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { AppDispatch } from "../store";
import {
  selectPosts,
  selectStatus,
  fetchPostsAsync,
  Statuses,
  updatePostAsync,
} from "../slices/postSlice";
import Post from "./Post";
import PostForm from "./PostForm";

const PostList = () => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<AppDispatch>();

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  const toggleEditForm = (post_id?: number) => {
    if (postToEdit === post_id) {
      setPostToEdit(0);
    } else {
      setPostToEdit(post_id as number);
    }
  };

  const submitEdit = (formData: any) => {
    dispatch(updatePostAsync(formData));
    toggleEditForm();
  };

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = (
      <div className="font-semibold text-2xl my-2 text-center"> {status} </div>
    );
  } else {
    contents = (
      <div className="">
        {/* <h3>{status}</h3> */}
        <PostForm />
        <div className="px-4 py-1">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="rounded-md bg-gradient-to-r from-indigo-200 via-transparent to-pink-100 my-2 px-4 "
                >
                  <Post
                    dispatch={dispatch}
                    post={post}
                    toggleEditForm={() => toggleEditForm(post.id)}
                    postToEdit={postToEdit}
                    submitEdit={submitEdit}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <h1> Posts </h1> */}
      {contents}
    </div>
  );
};

export default PostList;
