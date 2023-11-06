import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getAllNews } from "../Api";

const initialState = {
  loading: false,
  data: [],
  categories: [],
  err: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllNews.pending]: (state) => {
      state.loading = true;
    },
    [getAllNews.fulfilled]: (state, action) => {
      (state.loading = false), (state.data = action.payload);
    },
    [getAllNews.rejected]: (state, action) => {
      state.err = action.error.message;
    },
    [getAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      (state.loading = false), (state.categories = action.payload);
    },
    [getAllCategories.rejected]: (state, action) => {
      state.err = action.error.message;
    },
  },
});

export default newsSlice.reducer;
