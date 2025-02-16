import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showMessage, setshowMessage] = useState(null);

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
    setshowMessage(message);
    // Continue to send an email
    if (!message) {
      const emailData = {
        from_name: name.current.value,
        to_name: "Adarsha",
        message: textArea.current.value,
      };

      console.log(emailData);
      //emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY')
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use the environment variable here
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use the environment variable here
          emailData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use the environment variable here
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          setshowMessage("Email sent successfully!");

          // Clear all input fields after sending the email
          name.current.value = "";
          email.current.value = "";
          phone.current.value = "";
          service.current.value = "";
          textArea.current.value = "";
        })
        .catch((error) => {
          console.log("Failed to send email:", error);
          setshowMessage("Email not sent successfully!");
        });
    }
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
              className="p-2 outline-none bg-slate-50 text-black w-60 rounded-sm"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2  outline-none bg-slate-50 text-black w-60 rounded-sm"
            />
            <input
              ref={phone}
              type="text"
              placeholder="Phone"
              className="p-2  outline-none bg-slate-50 text-black  w-60 rounded-sm"
            />
            <select
              ref={service}
              className="p-2 bg-slate-50 text-black  outline-none w-60 cursor-pointer "
            >
              <option value="">Choose Service</option>
              <option value="Web Development">Frontend-React.js</option>
              <option value="Node.js Development">Backend-Node.js</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div>
            <textarea
              ref={textArea}
              className="p-2 mt-3 outline-none bg-slate-50 text-black w-full h-44 border border-gray-300 rounded-sm "
              placeholder="Enter your message here..."
            ></textarea>
            <p className="text-red-600 font-inconsolata text-lg my-1 font-semibold">
              {showMessage}
            </p>
            <button
              onClick={handleButtonClick}
              className="px-5 p-2 bg-slate-600 rounded-sm font-bold hover:text-orange-500"
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
