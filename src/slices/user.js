import { createSlice } from "@reduxjs/toolkit";

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const initialState = {
  authors: [],
};

//create reducers
const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    getAuthors: (state, { payload }) => {
      state.authors = [...state.authors, payload];
    },
  },
});

//create actions
export const { getAuthors } = authorsSlice.actions;

//generate selector
export const authorsSelector = (state) => state.authors;

//export reducers
export default authorsSlice.reducer;

//
export function fetchAuthors(id) {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch(getAuthors(response.data));
  };
}
