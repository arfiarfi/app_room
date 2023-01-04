import React from "react";
import { AiFillWechat, AiTwotoneCalendar } from "react-icons/ai";
import { CgFormatJustify } from "react-icons/cg";
import { BiBell, BiUserCircle } from "react-icons/bi";
import { MdGroup, MdOutlineClass } from "react-icons/md";
import { HiOutlineMap } from "react-icons/hi";
import { useNavigate, Outlet } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-[100vw] h-[7vh]  flex flex-col  justify-center absolute top-5">
      <div className=" bg-[#94B49F] w-[90%] h-[7vh] rounded-r-full shadow-md border-[2px] shadow-zinc-500 flex items-center justify-between px-6">
        <div className="flex gap-2">
          <CgFormatJustify className="text-[1.8rem]" />

          <p className="font-bold flex items-center">ROOMAPP</p>
        </div>
        <div className="flex gap-2">
          <AiFillWechat
            onClick={() => navigate("/chat")}
            className="text-[1.8rem]"
          />
          <MdGroup
            className="text-[1.8rem]"
            onClick={() => navigate("/group")}
          />
          <MdOutlineClass
            className="text-[1.8rem]"
            onClick={() => navigate("/class")}
          />
        </div>
        <div className="flex gap-2">
          <AiTwotoneCalendar className="text-[1.8rem]" />
          <BiUserCircle className="text-[1.8rem]" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
