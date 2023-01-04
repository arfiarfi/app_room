import React from "react";
// import Content from "../component/Content";
import Topbar from "../component/Topbar";

const Home = () => {
  return (
    <div className="bg-[#E7F6F2] h-[100vh] flex flex-col gap-4">
      <Topbar />
      <div className="mt-12">{/* <Content /> */}</div>
    </div>
  );
};

export default Home;
