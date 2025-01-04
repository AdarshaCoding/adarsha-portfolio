import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="p-10 border border-gray-400 relative font-syne rounded-md h-96">
      <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
        BLOGS
      </h2>
      <div>
        {new Array(5).fill().map((_, item) => (
          <div className="w-full border m-2 p-2" key={item}>
            Blog - {item + 1}
          </div>
        ))}
      </div>

      <button className="p-2 font-mono absolute  bg-slate-600 right-5 bottom-2 rounded-md  hover:text-orange-500 ">
        <Link to="/contact">To Connect With Me!</Link>
      </button>
    </div>
  );
};

export default Blogs;
