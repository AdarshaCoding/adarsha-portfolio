import React from "react";
import profile from "../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";
import QuickLinks from "../components/QuickLinks";

const Home = () => {
  return (
    <div className="p-10 rounded-lg shadow-md shadow-slate-50 h-96 relative">
      <div className="absolute bottom-6">
        <QuickLinks />
      </div>
      <div className="text-sm flex flex-col items-center">
        <img src={profile} className="w-28 h-28 rounded-full" />
        <h2 className="my-3 font-semibold md:text-lg lg:text-3xl font-inter">
          ADARSHA CHANNAPPA
        </h2>
        <div className="flex flex-row items-center">
          <hr className="w-14  md:lg-36 lg:w-40" />
          <h3 className="font-mono font-bold text-orange-500 px-2 md:px-1 text-md">
            Web Developer 🚀
          </h3>
          <hr className="w-14 md:lg-36 lg:w-40" />
        </div>
      </div>
      <Link to="/about">
        <button className="p-2 text-xs md:text-[15px] font-mono font-bold absolute bg-slate-600 right-5 bottom-5 rounded-md hover:text-orange-500">
          Explore My World!
        </button>
      </Link>
    </div>
  );
};

export default Home;
