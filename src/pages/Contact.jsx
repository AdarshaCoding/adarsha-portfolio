import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="relative">
      <div className="p-10 border border-gray-400 relative font-syne rounded-md">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          GET IN TOUCH
        </h2>
      </div>
      <button className="p-2 font-mono absolute right-5 bottom-5 rounded-md bg-slate-600 px-8 hover:text-orange-500">
        <Link to="/">HOME</Link>
      </button>
    </div>
  );
};

export default Contact;
