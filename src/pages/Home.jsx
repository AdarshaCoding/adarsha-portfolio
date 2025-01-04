import React from "react";
import profile from "../assets/images/profileImage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10 border border-gray-600 rounded-md shadow-md shadow-slate-50 h-96 relative">
      <div className="flex flex-col items-center">
        <img src={profile} className="w-28 h-28 rounded-full" />
        <h2 className="my-3 font-semibold text-3xl">ADARSHA CHANNAPPA</h2>
        <h3 className="font-mono">Web Developer</h3>
      </div>
      <button className="p-2 font-mono absolute bg-slate-600 right-5 bottom-5 rounded-md  hover:text-orange-500">
        <Link to="/about">Explore My World!</Link>
      </button>
    </div>
  );
};

export default Home;
