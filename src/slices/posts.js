import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";

//create initial state values
export const initialState = {
  posts: [],
  authors: [],
};

//create reducers
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
    getAuthors: (state, { payload }) => {
      state.authors = [...state.authors, payload];
    },
  },
});

//create actions
export const { getPosts, getAuthors } = postsSlice.actions;

//generate selector
export const postsSelector = (state) => state.posts;

//export reducers
export default postsSlice.reducer;

//
export function fetchPosts() {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch(getPosts(response.data));
    const userIds = _.uniq(_.map(response.data, "userId"));
    userIds.forEach((userId) => {
      dispatch(fetchAuthors(userId));
    });
  };
}

export function fetchAuthors(id) {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch(
      getAuthors({ authorId: response.data.id, AuthorName: response.data.name })
    );
  };
}
