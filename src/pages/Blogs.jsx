import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="p-10 border border-gray-400 relative font-syne rounded-md mb-10">
      <h2 className="font-semibold text-xs md:text-sm lg:text-md text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
        BLOGS
      </h2>
      <div className="mb-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Link to="/contact">
        <button className="p-2 text-xs md:text-[15px] font-bold font-mono absolute bg-slate-600 right-9 bottom-3 rounded-md  hover:text-orange-500 ">
          To Connect With Me!
        </button>
      </Link>
    </div>
  );
};

export default Blogs;
