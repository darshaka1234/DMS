import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const NavBar = () => {
  const detailsArray = [
    { name: "Home", icon: <GrHomeRounded className="self-center" /> },
    {
      name: "Latest News",
      icon: <HiOutlineNewspaper className="self-center" />,
    },
    { name: "Events", icon: <BsCalendar2Event className="self-center" /> },
    {
      name: "Contacts",
      icon: <MdOutlinePermContactCalendar className="self-center" />,
    },
  ];
  return (
    <div className="flex justify-between py-5">
      <div className="flex flex-row">
        <div className="mr-5">LOGO</div>
        <div>BEARDY</div>
      </div>
      <div className="flex flex-row ">
        {detailsArray.map((item) => (
          <div key={item.name} className="flex flex-row mx-5">
            {item.icon}
            <h2 className="mx-1">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
