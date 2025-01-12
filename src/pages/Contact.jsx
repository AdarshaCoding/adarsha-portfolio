import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // const [] = useFormValidator();

  return (
    <div className="relative">
      <div className="p-10 border border-gray-400 relative font-syne rounded-md">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          GET IN TOUCH
        </h2>
        <div className="w-3/4 mx-auto font-inter text-md">
          <div className="flex flex-wrap gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="p-2 outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2  outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-2  outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <select className="p-2 bg-slate-50 text-black  outline-none w-60 cursor-pointer focus:ring-2 focus:ring-orange-300">
              <option className="">Choose Service</option>
              <option>Web Development</option>
              <option>Freelancing</option>
            </select>
          </div>
          <div>
            <textarea
              className="p-2 my-3 outline-none bg-slate-50 text-black w-full h-44 border border-gray-300 focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your message here..."
            ></textarea>
            <button className="px-5 p-2 bg-slate-600 text-white rounded-md font-bold  hover:text-orange-500">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
