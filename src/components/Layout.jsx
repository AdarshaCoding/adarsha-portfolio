import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        {/* this is where nested routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
