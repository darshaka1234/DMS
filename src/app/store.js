import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./features/newsSlice";

export const store = configureStore({
  reducer: NewsReducer,
});
