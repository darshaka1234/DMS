import React from "react";
import { useSelector } from "react-redux";
import LowCard from "./LowCard";

const TileSet = () => {
  const cardData = useSelector((state) => state.cardData);

  return (
    <div className="grid grid-cols-3 my-10 bg-gray-200">
      <div className="grid-span-2">
        <LowCard data={cardData[0]} />
      </div>
      <div className="grid-span-2">
        <div className="grid-span-1">
          <LowCard data={cardData[1]} />
        </div>
        <div className="grid-span-1">
          <LowCard data={cardData[2]} />
        </div>
      </div>
      <div className="grid-span-2">
        <LowCard data={cardData[3]} />
      </div>
    </div>
  );
};

export default TileSet;
