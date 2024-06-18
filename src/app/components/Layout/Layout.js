import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Image from "../Image/Image";

const Layout = () => {
  return (
    <div className="grid grid-cols-5 gap-x-6">
      <div className="col-span-1 shadow-custom2 h-screen py-2 px-3 bg-primary">
        <div className="flex items-center gap-x-2">
          <Image url="/logo3.png" className="w-[100px] h-[100px]"></Image>
          <h1 className="text-white font-medium">ADMIN </h1>
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex flex-col h-screen ">
          <div>
            <Header></Header>
          </div>
          <div className="py-10 flex-grow">
            <Outlet></Outlet>
          </div>
          <div className="pb-5">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
