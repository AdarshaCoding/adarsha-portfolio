import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

const Blogs = () => {
  return (
    <div className="p-10 border border-gray-400 relative font-syne rounded-md">
      <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
        BLOGS
      </h2>
      <div>
        {blogs.map((blog) => (
          <div className="w-full border m-2 p-2 font-inter" key={blog.id}>
            <h2 className="text-lg text-orange-400">{blog.title}</h2>
            <p className="text-sm">{blog.description}</p>
          </div>
        ))}
      </div>

      <Link to="/contact">
        <button className="p-2 font-mono absolute bg-slate-600 right-5 bottom-2 rounded-md  hover:text-orange-500 ">
          To Connect With Me!
        </button>
      </Link>
    </div>
  );
};

export default Blogs;
