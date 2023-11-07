import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { getAllNewsForList, getNews } from "../app/Api";
import TrendingList from "../components/TrendingList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NewsPage = () => {
  const { hash } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(hash));
    dispatch(getAllNewsForList());
  }, []);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const News = useSelector((state) => state.singleNews);

  return (
    <div>
      <NavBar />
      {News.map((item) => (
        <div key={item.hash.datavalue} className="w-full">
          <img
            className="w-full max-h-96"
            src={item.cover_images.datavalue.map((i) => i.fileUrl)}
          />
        </div>
      ))}
      <div className="flex flex-col lg:flex-row justify-center divide-x">
        {News.map((item) => (
          <div key={item.hash.datavalue} className="max-w-2xl">
            <div className="flex flex-row">
              <div className="mx-20 max-w-2xl">
                <h1 className="my-5 font-medium text-4xl">
                  {item.title.datavalue}
                </h1>
                <div className="flex flex-row my-5">
                  <div className="flex flex-row">
                    <SlCalender className="self-center mr-3" />
                    <h3>{formatDate(item.news_date?.datavalue)}</h3>
                  </div>
                  <h3 className="mx-5 font-medium">{`By ${item.reporter?.datavalue}`}</h3>
                </div>
                <hr className="my-5" />
                <p
                  className="text-cancel"
                  dangerouslySetInnerHTML={{
                    __html: item.long_description.datavalue,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ))}
        <TrendingList />
      </div>
      <hr className="my-5" />
      <Footer />
    </div>
  );
};

export default NewsPage;
