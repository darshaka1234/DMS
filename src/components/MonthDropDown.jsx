import React, { useState } from "react";
import { monthArr } from "./RawData";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../app/Api";
import { filterData } from "../app/features/newsSlice";

const MonthDropDown = () => {
  const NewsData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = (month) => {
    setOpen(false);
    // dispatch(getAllNews());
    const newArray = NewsData.filter((item) => {
      const date = new Date(item.news_date.datavalue);
      return date.getMonth() == month - 1;
    });
    console.log(newArray);
    dispatch(filterData(newArray));
  };
  return (
    <div>
      <details className="dropdown ">
        {open && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {monthArr.map((item) => (
              <li key={item.value}>
                <a onClick={() => handleClick(item.value)}>{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <summary tabIndex={0} className=" m-1" onClick={() => setOpen(true)}>
          Month
        </summary>
      </details>
    </div>
  );
};

export default MonthDropDown;
