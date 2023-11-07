import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="card card-compact max-w-xs my-3 bg-base-100 shadow-xl justify-self-center">
      <figure>
        <img
          src={data.thumbnail?.datavalue.fileUrl}
          alt={data.title?.datavalue}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title?.datavalue}</h2>
        <div className="flex flex-row">
          <SlCalender className="self-center mr-3" />
          <h3>{formatDate(data.news_date?.datavalue)}</h3>
        </div>
        <p className="text-gray-500">{data.short_description?.datavalue}</p>
        <h3>{`By ${data.reporter?.datavalue}`}</h3>
        <div className="card-actions justify-end flex flex-row">
          <Link to={`/${data.hash?.datavalue}`}>
            <button className="text-blue-800">READ MORE</button>
          </Link>
          <AiOutlineArrowRight className="self-center text-blue-800" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
