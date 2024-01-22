import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  slug: null,
  content: null,
  featuredImage: null,
  status: null,
  userId: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.title = action.payload.title;
      state.slug = action.payload.slug;
      state.content = action.payload.content;
      state.featuredImage = action.payload.featuredImage;
      state.status = action.payload.status;
      state.userId = action.payload.userId;
    },

    deletePost: (state, action) => {
      state.title = null;
      state.slug = null;
      state.content = null;
      state.featuredImage = null;
      state.status = null;
      state.userId = null;
    },

    updatePost: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.featuredImage = action.payload.featuredImage;
      state.status = action.payload.status;
    },
  },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
