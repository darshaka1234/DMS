import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (hash = "") => {
    const { data } = await axios.get(
      `https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=25&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    return data.dataSets;
  }
);

export const getAllCategories = createAsyncThunk(
  "news/fetchAllcategories",
  async () => {
    const { data } = await axios.get(
      "https://showcase.dmc.smart360web.com/api/v1/news-categories/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=name&st=0&lt=10&sp=name&sd=ASC"
    );

    return data.dataSets;
  }
);
