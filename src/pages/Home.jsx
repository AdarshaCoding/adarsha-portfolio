import React from "react";
import profile from "../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";
import QuickLinks from "../components/QuickLinks";

const Home = () => {
  return (
    <div className="p-10 border border-gray-600 rounded-md shadow-md shadow-slate-50 h-96 relative">
      <div className="absolute bottom-6">
        <QuickLinks />
      </div>
      <div className="flex flex-col items-center">
        <img src={profile} className="w-28 h-28 rounded-full" />
        <h2 className="my-3 font-semibold text-3xl font-inter">
          ADARSHA CHANNAPPA
        </h2>
        <h3 className="font-mono font-bold text-orange-500">
          Web Developer 🚀
        </h3>
      </div>
      <Link to="/about">
        <button className="p-2 font-mono font-bold absolute bg-slate-600 right-5 bottom-5 rounded-md hover:text-orange-500">
          Explore My World!
        </button>
      </Link>
    </div>
  );
};

export default Home;
