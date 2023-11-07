import React from "react";
import { useSelector } from "react-redux";
import { SlCalender } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const TrendingList = () => {
  const ListData = useSelector((state) => state.listData);
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-xl mt-5 ml-10">
      <h1 className="font-medium text-4xl mb-5">Latest News</h1>
      {ListData?.map((item) => (
        <div className="my-5" key={item.hash.datavalue}>
          <div className="flex flex-row">
            <img
              src={item.thumbnail?.datavalue.fileUrl}
              className="flex rounded-xl w-24 h-24  p-2"
            />
            <div className="mx-2 py-2">
              <h1 className="text-sm font-medium">{item.title?.datavalue}</h1>

              <div className="flex flex-row text-sm my-2">
                <SlCalender className="self-center mr-3" />
                <h3>{formatDate(item.news_date?.datavalue)}</h3>
              </div>
              <div
                className="text-sm flex flex-row"
                onClick={() => navigate(`/${item.hash?.datavalue}`)}
              >
                <button className="text-blue-700">READ MORE</button>

                <AiOutlineArrowRight className="self-center text-blue-800" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingList;
