import React from "react";
import { Navbar, SideBar } from "../../components";

const Main = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="main p-4 flex pt-[68px] sm:ml-64 min-h-screen  ">
        <div className="main__inner flex flex-1 flex-col">
          <div className="main__header">
            <h1>Привет Евгений!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
