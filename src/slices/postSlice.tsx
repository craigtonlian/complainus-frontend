import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import produce from "immer";
import {
  fetchPosts,
  createPost,
  updatePost,
  destroyPost,
} from "../api/postAPI";

export enum Statuses {
  Initial = "Not Fetched",
  Loading = "Loading",
  UpToDate = "Up To Date",
  Deleted = "Deleted",
  Error = "Error",
}

export interface PostFormData {
  post: {
    id?: number;
    title: string;
    body: string;
    user_id: number;
    tag_id: number;
  };
}

export interface PostState {
  id?: number;
  title?: string;
  body?: string;
  user_id?: number;
  tag_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface PostsState {
  posts: PostState[];
  status: string;
}

export interface PostDeleteData {
  post: {
    post_id: number;
  };
}

export interface PostUpdateData {
  post: {
    post_id: number;
    post: PostState;
  };
}

const initialState: PostsState = {
  posts: [
    {
      id: 0,
      title: "",
      body: "",
      user_id: 0,
      tag_id: 0,
      created_at: "",
      updated_at: "",
    },
  ],
  status: Statuses.Initial,
};

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetchPosts();
    return response;
  }
);

export const createPostAsync = createAsyncThunk(
  "posts/createPost",
  async (payload: PostFormData) => {
    const response = await createPost(payload);
    return response;
  }
);

export const updatePostAsync = createAsyncThunk(
  "posts/updatePost",
  async (payload: PostFormData) => {
    const response = await updatePost(payload);
    return response;
  }
);

export const destroyPostAsync = createAsyncThunk(
  "posts/destroyPost",
  async (payload: PostDeleteData) => {
    const response = await destroyPost(payload);
    return response;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //** Fetch Section */
      .addCase(fetchPostsAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.UpToDate;
          draftState.posts = action.payload;
        });
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })

      //** Create Section */
      .addCase(createPostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.posts = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(createPostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })

      //** Update Section */
      .addCase(updatePostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          const index = draftState.posts.findIndex(
            (post) => post.id === action.payload.id
          );
          draftState.posts[index] = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(updatePostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })

      //** Destroy Section */
      .addCase(destroyPostAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(destroyPostAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.posts = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(destroyPostAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      });
  },
});

// export const {} = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectStatus = (state: RootState) => state.posts.status;
export default postSlice.reducer;
