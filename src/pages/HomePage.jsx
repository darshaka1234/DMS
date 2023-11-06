import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllNews } from "./../app/Api";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getAllCategories());
  }, []);

  const NewsData = useSelector(state.news.data);

  return (
    <div>
      {NewsData?.map((item) => (
        <NewsCard data={item} />
      ))}
    </div>
  );
};

export default HomePage;
