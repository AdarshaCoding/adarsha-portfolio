import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h2 className="text-2xl cursor-pointer hover:text-orange-500">
      <Link to={"/"}>Adarsha</Link>
    </h2>
  );
};

const Header = () => {
  return (
    <header className="font-mono text-white">
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
              <Link to={"/contact"}>5. Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
