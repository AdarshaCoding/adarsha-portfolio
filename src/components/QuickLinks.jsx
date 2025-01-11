import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";

const QuickLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://github.com/AdarshaCoding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/adarshapc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin size={30} />
      </a>

      <a
        href="https://www.youtube.com/@ReactToScript"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoYoutube size={30} />
      </a>
    </div>
  );
};

export default QuickLinks;
