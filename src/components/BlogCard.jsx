import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const BlogCard = ({ blog }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleHeaderClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="w-full border rounded-md m-2 p-2 font-inter">
      <div className="flex justify-between">
        <h2 className="text-sm mb-3 font-semibold text-orange-400 ">
          {blog.title}
        </h2>
        <div
          onClick={() => handleHeaderClick(blog.id)}
          className="cursor-pointer"
        >
          {activeIndex === null ? <SlArrowDown /> : <SlArrowUp />}
        </div>
      </div>
      {activeIndex === blog.id && (
        <div className="text-sm relative">
          <p>{blog.description}</p>
          <a
            href={blog.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 mt-4 hover:text-orange-400"
          >
            Read More...
          </a>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
