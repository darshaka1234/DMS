import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../app/Api";

const DropDown = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = (hash) => {
    dispatch(getAllNews(hash));
  };
  return (
    <div className="dropdown">
      <label tabIndex={0} className=" m-1">
        Categories
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {categories.map((item) => (
          <li key={item.name.datavalue}>
            <a onClick={() => handleClick(item.hash.datavalue)}>
              {item.name.datavalue}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
