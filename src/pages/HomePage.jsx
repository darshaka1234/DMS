import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllNews, getAllNewsForCard } from "./../app/Api";
import NewsCard from "../components/NewsCard";
import DropDown from "../components/DropDown";
import MonthDropDown from "../components/MonthDropDown";
import { BsCardList, BsFillGridFill } from "react-icons/bs";
import TileSet from "../components/TileSet";
import NavBar from "../components/NavBar";
import LoadMoreButton from "../components/LoadMoreButton";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getAllCategories());
    dispatch(getAllNewsForCard());
  }, []);

  const NewsData = useSelector((state) => state.data);
  console.log("AllData", NewsData);

  return (
    <div className="mx-20">
      <NavBar />
      <h1 className="font-bold text-4xl mb-5">Latest News</h1>
      <TileSet />
      <div className="flex justify-between">
        <div className="flex flex-row m-5">
          <h4 className="align-end">{`Filter      |      `}</h4>
          <MonthDropDown />
          <DropDown />
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs input-sm mr-5"
          />
          <BsCardList className="text-4xl mx-1" />
          <BsFillGridFill className="text-4xl mx-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-1">
        {NewsData?.map((item) => (
          <NewsCard key={item.hash?.datavalue} data={item} />
        ))}
      </div>
      <LoadMoreButton />
    </div>
  );
};

export default HomePage;
