import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Title = () => {
  return (
    <h2 className="text-2xl font-bold cursor-pointer hover:text-orange-500">
      <Link to={"/"}>Adarsha</Link>
    </h2>
  );
};

const Header = () => {
  const location = useLocation(); // Get the current route path
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header
      className={`font-mono text-white sticky top-0 left-0 px-10 py-2 z-50 shadow-gray-600 shadow-md bg-slate-700`}
    >
      <div className="flex justify-between items-center">
        <Title />
        <nav>
          <ul className="hidden md:flex gap-8 text-md font-semibold text-green-400">
            <li>
              <Link
                to={"/"}
                className={`font-semibold ${
                  location.pathname === "/"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`font-semibold ${
                  location.pathname === "/about"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className={`font-semibold ${
                  location.pathname === "/projects"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                className={`font-semibold ${
                  location.pathname === "/blogs"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={`font-semibold ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <span className="text-2xl">
              <RiCloseLargeLine />
            </span>
          ) : (
            <span className="text-2xl">
              <GiHamburgerMenu />
            </span>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden text-white p-4">
          <ul className="gap-2 text-md font-semibold text-green-400 flex flex-col ">
            <li>
              <Link
                to={"/"}
                className={`font-semibold  ${
                  location.pathname === "/"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`font-semibold ${
                  location.pathname === "/about"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className={`font-semibold ${
                  location.pathname === "/projects"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                className={`font-semibold ${
                  location.pathname === "/blogs"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={`font-semibold ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-slate-200 pb-[1px]"
                    : ""
                } hover:text-white`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
