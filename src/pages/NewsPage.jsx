import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNews } from "../app/Api";

const NewsPage = () => {
  const { hash } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const News = useSelector((state) => state.singleNews);
  console.log(News);
  return <div>{hash}</div>;
};

export default NewsPage;
