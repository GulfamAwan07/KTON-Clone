import React from "react";
import { TbFlowerFilled } from "react-icons/tb";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Hero = () => {
  return (
    <div className=" min-h-screen flex flex-col gap-12">
      <div className="flex flex-col gap-6 justify-center items-center  mt-24">
        <h1 className="flex justify-center items-center text-gray-400 font-semibold">
          Welcome to KTON
        </h1>
        <h1 className="text-white font-sans font-bold text-2xl flex items-center justify-center">
          Institutional-Grade Liquid <br /> Staking Protocol on TON
        </h1>
        <button className="flex items-center justify-center cursor-pointer bg-blue-600 text-white w-[34rem] font-semibold text-sm h-10  rounded-full">
          Connect Wallet
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-row gap-48">
          <div className="flex flex-row gap-2">
            <TbFlowerFilled className="text-[#3741D3]  rounded-full bg-[#10112D] w-6 mt-2 h-6" />
            <h1 className="text-gray-400 font-semibold text-3xl">
              Earn up to <span className="text-3xl text-white">3.69 % APY</span>
            </h1>
          </div>
          <div>
            <IoMdInformationCircleOutline className="text-gray-400 w-6 h-6 mt-2.5" />
          </div>
        </div>

        <div className="flex flex-row gap-48">
          <div className="flex flex-row gap-2">
            <IoShieldCheckmarkOutline className="text-[#3741D3]  rounded-full bg-[#10112D] w-6 mt-2 h-6" />
            <h1 className="text-gray-400 font-semibold text-3xl">
              Earn up to <span className="text-3xl text-white">3.69 % APY</span>
            </h1>
          </div>
          <div>
            <LuSquareArrowOutUpRight className="text-gray-400 w-6 h-6 mt-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
