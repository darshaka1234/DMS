import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchNews } from "../app/Api";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    console.log(e);
    setSearchText(e);
    dispatch(getSearchNews(searchText));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchText}
      className="input input-bordered w-full max-w-xs input-sm mr-5"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
