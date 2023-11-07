import React from "react";
import { SlCalender } from "react-icons/sl";

const LowCard = ({ data }) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div
      className="h-full rounded-lg mx-2 "
      style={{
        backgroundImage: `url(${data?.thumbnail.datavalue.fileUrl})`,
      }}
    >
      <div className="card-body place content-end z-10">
        <h2 className="card-title text-white">{data?.title?.datavalue}</h2>
        <div className="flex flex-row text-white">
          <SlCalender className="self-center mr-3" />
          <h3>{formatDate(data?.news_date?.datavalue)}</h3>
        </div>
      </div>
    </div>
  );
};

export default LowCard;
