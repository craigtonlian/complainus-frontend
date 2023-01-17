import { PostDeleteData, PostFormData, PostsState } from "../slices/postSlice";
import { API_URL } from "./apiURL";

export const fetchPosts = async () => {
  return fetch(`${API_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")!,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
};

export const createPost = async (payload: PostFormData) => {
  const post = payload.post;

  return fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")!,
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
};

export const updatePost = async (payload: PostFormData) => {
  const post = payload.post;

  return fetch(`${API_URL}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")!,
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
};

export const destroyPost = async (payload: PostDeleteData) => {
  const post = payload.post;

  return fetch(`${API_URL}/posts/${post.post_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")!,
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
};
