import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl =
  "https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB";

export const getAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (hash = "") => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    return data.dataSets;
  }
);

export const getAllCategories = createAsyncThunk(
  "news/fetchAllcategories",
  async () => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=name&st=0&lt=10&sp=name&sd=ASC`
    );

    return data.dataSets;
  }
);

export const getNews = createAsyncThunk("news/fetchNews", async (hash) => {
  const { data } = await axios.get(
    `${baseUrl}&f[]=title&f[]=news_date&f[]=cover_images&f[]=long_description&f[]=meta_title&f[]=meta_description&f[]=categories&f[]=reporter&st=0&lt=5&ii[]=${hash}`
  );

  return data.dataSets;
});

export const getAllNewsForCard = createAsyncThunk(
  "news/fetchAllNewsForCard",
  async (hash = "") => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=4&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    return data.dataSets;
  }
);

export const getSecondNews = createAsyncThunk(
  "news/fetchSecondNews",
  async (hash = "") => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=25&lt=24&sp=news_date&sd=DESC&categories[]=${hash}`
    );

    return data.dataSets;
  }
);

export const getSearchNews = createAsyncThunk(
  "news/fetchSearchNews",
  async (search = "") => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC&qf[]=title&qt=1&q=${search}`
    );
    return data.dataSets;
  }
);
export const getAllNewsForList = createAsyncThunk(
  "news/fetchAllNewsForList",
  async (hash = "") => {
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=6&sp=news_date&sd=DESC&categories[]=${hash}`
    );

    return data.dataSets;
  }
);
