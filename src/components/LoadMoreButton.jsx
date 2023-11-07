import React from "react";
import { useDispatch } from "react-redux";
import { getSecondNews } from "../app/Api";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const handleLoad = () => {
    dispatch(getSecondNews());
  };
  return (
    <div className="w-full justify-items-center">
      <button className="btn btn-active btn-primary" onClick={handleLoad}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreButton;
