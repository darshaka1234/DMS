import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../app/Api";

const DropDown = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = (hash) => {
    setOpen(false);
    dispatch(getAllNews(hash));
  };
  return (
    <div>
      <details className="dropdown ">
        {open && (
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
        )}
        <summary tabIndex={0} className=" m-1" onClick={() => setOpen(true)}>
          Categories
        </summary>
      </details>
    </div>
  );
};

export default DropDown;
