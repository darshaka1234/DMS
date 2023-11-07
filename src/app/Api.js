import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (hash = "", limit = 4) => {
    const { data } = await axios.get(
      `https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC&categories[]=${hash}`
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

export const getNews = createAsyncThunk("news/fetchNews", async () => {
  const { data } = axios.get(
    `https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=title&f[]=news_date&f[]=cover_images&f[]=long_description&f[]=meta_title&f[]=meta_description&f[]=categories&f[]=reporter&st=0&lt=5&ii[]=9438efc2e5abfb1c4c8092cbce02e0f7`
  );
  console.log("news", data.dataSets);
  return data.dataSets;
});

export const getAllNewsForCard = createAsyncThunk(
  "news/fetchAllNewsForCard",
  async (hash = "") => {
    const { data } = await axios.get(
      `https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=4&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    return data.dataSets;
  }
);

export const getSecondNews = createAsyncThunk(
  "news/fetchSecondNews",
  async (hash = "") => {
    const { data } = await axios.get(
      `https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=25&lt=24&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    console.log("secondslot", data.dataSets);
    return data.dataSets;
  }
);
