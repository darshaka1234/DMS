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

  const NewsData = useSelector((state) => state.data);

  return (
    <div className="w-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center">
      {NewsData?.map((item) => (
        <NewsCard key={item.hash.datavalue} data={item} />
      ))}
    </div>
  );
};

export default HomePage;
