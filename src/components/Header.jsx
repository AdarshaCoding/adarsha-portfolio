import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h2 className="text-2xl font-bold cursor-pointer hover:text-orange-500">
      <Link to={"/"}>Adarsha</Link>
    </h2>
  );
};

const Header = () => {
  const [scroll, setScroll] = useState(false);

  // Debugging: Log scroll position to verify it's updating
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Position:", window.scrollY); // Log scroll position for debugging
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs only once, on mount

  return (
    <header
      className={`font-mono text-white mt-2 sticky top-0 left-0 transition-all duration-300 ${
        scroll ? "bg-black z-10" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <Title />
        <nav>
          <ul className="flex gap-8 text-sm font-semibold text-green-400">
            <li className="cursor-pointer hover:text-white">
              <Link to={"/"}>1. Home</Link>
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to={"/about"}>2. About</Link>
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to={"/projects"}>3. Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to={"/blogs"}>4. Blogs</Link>
            </li>
            <li className="cursor-pointer hover:text-white">
              <Link to={"/contact"}>5. Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
