import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const BlogCard = ({ blog }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleHeaderClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="w-full border rounded-md m-2 p-2 font-inter">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleHeaderClick(blog.id)}
      >
        <h2 className="text-lg mb-3 font-semibold">{blog.title}</h2>
        <div className="cursor-pointer">
          {activeIndex === null ? <SlArrowDown /> : <SlArrowUp />}
        </div>
      </div>
      {activeIndex === blog.id && (
        <div className="text-sm relative text-gray-400">
          <div className="mb-5">{blog.description}</div>
          <a
            href={blog.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 right-0 hover:text-blue-500"
          >
            Read More...
          </a>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
