import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const service = useRef(null);
  const textArea = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const selectedValue = service.current.value;
    const message = checkValidateData(
      name.current.value,
      email.current.value,
      phone.current.value,
      service.current.value,
      textArea.current.value
    );
    setErrorMessage(message);

    // Continue to send an email
  };
  return (
    <div className="relative">
      <div className="p-10 border border-gray-400 relative font-syne rounded-md mb-20">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          GET IN TOUCH
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/4 mx-auto font-inter text-[15px] mt-2"
        >
          <div className="flex flex-wrap gap-4 ">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2  outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <input
              ref={phone}
              type="text"
              placeholder="Phone"
              className="p-2  outline-none bg-slate-50 text-black focus:ring-2 focus:ring-orange-300 w-60"
            />
            <select
              ref={service}
              className="p-2 bg-slate-50 text-black  outline-none w-60 cursor-pointer focus:ring-2 focus:ring-orange-300"
            >
              <option value="">Choose Service</option>
              <option value="Web Development">Frontend-React.js</option>
              <option value="Freelance">Backend-Node.js</option>
            </select>
          </div>
          <div>
            <textarea
              ref={textArea}
              className="p-2 mt-3 outline-none bg-slate-50 text-black w-full h-44 border border-gray-300 focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your message here..."
            ></textarea>
            <p className="text-red-600 font-inconsolata text-lg my-1 font-semibold">
              {errorMessage}
            </p>
            <button
              onClick={handleButtonClick}
              className="px-5 p-2 bg-slate-600 text-white font-bold  hover:text-orange-500"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
