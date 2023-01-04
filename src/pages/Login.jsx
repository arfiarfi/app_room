import React from "react";
import { TiKey } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import { IoLogoGoogle } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import IMG from "../class-assets/img.2.png";

const Login = () => {
  return (
    <div className="bg-[#E7F6F2] h-[100vh] px-10">
      <div className="h-[90vh] w-[37vw] bg-[#C4D7E0] border-[2px] border-t-0 border-zinc-500 rounded-b-[3rem] shadow-lg shadow-zinc-500 flex">
        <div className="flex flex-col items-center gap-6 p-20 mx-2">
          <div>
            <p className="text-[3rem] font-bold text-center">Sign in</p>
            <p className=" font-bold text-center">to ROOMAPP</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white h-12 w-[24rem] border-zinc-500 flex items-center rounded-full ">
              <HiUsers className="text-zinc-500 text-[1.5rem] mx-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none border-b-[1px] w-[18rem]"
              />
            </div>
            <div className="bg-white h-12 w-[24rem] border-zinc-500 flex items-center rounded-full ">
              <TiKey className="text-zinc-500 text-[1.5rem] mx-5" />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none border-b-[1px] w-[18rem]"
              />
            </div>
            <button className="h-12 w-[10rem] bg-[#A5C9CA] rounded-full font-semibold shadow-md shadow-zinc-500">
              Sign in
            </button>
            <button className="h-12 w-[10rem] bg-[#A5C9CA] rounded-full font-semibold shadow-md shadow-zinc-500">
              Register
            </button>
          </div>
          <div className="border-[2px] w-[24rem] rounded-full shadow-lg shadow-zinc-500 flex flex-col items-center gap-6 p-5">
            <p className="font-semibold">Sign in dengan cara lebih cepat?</p>
            <div className="flex items-center justify-center gap-6">
              <button>
                <IoLogoGoogle className="text-[1.7rem]" />
              </button>
              <button>
                <ImFacebook2 className="text-[1.7rem]" />
              </button>
              <button>
                <FaDiscord className="text-[1.7rem]" />
              </button>
            </div>
          </div>
        </div>

        <img src={IMG} alt="" className="mx-44" />
      </div>
    </div>
  );
};

export default Login;
