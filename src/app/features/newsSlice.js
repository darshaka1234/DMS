import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getAllNews,
  getAllNewsForCard,
  getAllNewsForList,
  getNews,
  getSearchNews,
  getSecondNews,
} from "../Api";

const initialState = {
  loading: false,
  data: [],
  categories: [],
  singleNews: [],
  cardData: [],
  listData: [],
  err: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.data = action.payload;
    },
  },
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
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, action) => {
      (state.loading = false), (state.singleNews = action.payload);
    },
    [getNews.rejected]: (state, action) => {
      state.err = action.error.message;
    },
    [getAllNewsForCard.pending]: (state) => {
      state.loading = true;
    },
    [getAllNewsForCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardData = action.payload;
    },
    [getAllNewsForCard.rejected]: (state, action) => {
      state.err = action.error.message;
    },
    [getSecondNews.pending]: (state) => {
      state.loading = true;
    },
    [getSecondNews.fulfilled]: (state, action) => {
      state.loading = false;
      const newALL = [...state.data, ...action.payload];
      state.data = newALL;
    },
    [getSecondNews.rejected]: (state, action) => {
      state.err = action.error.message;
    },
    [getSearchNews.pending]: (state) => {
      state.loading = true;
    },
    [getSearchNews.fulfilled]: (state, action) => {
      (state.loading = false), (state.data = action.payload);
    },
    [getSearchNews.rejected]: (state, action) => {
      state.err = action.error.message;
    },
    [getAllNewsForList.pending]: (state) => {
      state.loading = true;
    },
    [getAllNewsForList.fulfilled]: (state, action) => {
      state.loading = false;
      state.listData = action.payload;
    },
    [getAllNewsForList.rejected]: (state, action) => {
      state.err = action.error.message;
    },
  },
});
export const { filterData } = newsSlice.actions;
export default newsSlice.reducer;
