import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h2 className="text-2xl font-bold cursor-pointer hover:text-orange-500">
      <Link to={"/"}>Adarsha</Link>
    </h2>
  );
};

const Header = () => {
  // Set initial state for the active page
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <header
      className={`font-mono text-white sticky top-0 left-0 px-10 bg-base-100 py-2 z-50 shadow-md`}
    >
      <div className="flex justify-between items-center">
        <Title />
        <nav>
          <ul className="flex gap-8 text-sm font-semibold text-green-400">
            <li
              onClick={() => handlePageChange("home")}
              className={`font-semibold ${
                activePage === "home"
                  ? "border-b-2 border-slate-200 pb-[1px]"
                  : ""
              } hover:text-white`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={() => handlePageChange("about")}
              className={`font-semibold ${
                activePage === "about"
                  ? "border-b-2 border-slate-200 pb-[1px]"
                  : ""
              } hover:text-white`}
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              onClick={() => handlePageChange("projects")}
              className={`font-semibold ${
                activePage === "projects"
                  ? "border-b-2 border-slate-200 pb-[1px]"
                  : ""
              } hover:text-white`}
            >
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li
              onClick={() => handlePageChange("blogs")}
              className={`font-semibold ${
                activePage === "blogs"
                  ? "border-b-2 border-slate-200 pb-[1px]"
                  : ""
              } hover:text-white`}
            >
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li
              onClick={() => handlePageChange("contact")}
              className={`font-semibold ${
                activePage === "contact"
                  ? "border-b-2 border-slate-200 pb-[1px]"
                  : ""
              } hover:text-white`}
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
