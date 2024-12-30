import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-20 text-white container">
        {/* this is where nested routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
