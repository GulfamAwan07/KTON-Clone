import React from "react";
import Navbar from "./Navbar";
import { BiWalletAlt } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { FaGasPump } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosFlower } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const Stake = () => {
  return (
    <div className="bg-[#0D0D14] min-h-screen ">
      <Navbar />
      <div className="flex  justify-center items-center flex-col">
        <div className="bg-[#2C2C2C] w-[35rem] mt-10 h-12 gap-0 flex flex-row justify-center items-center rounded-3xl">
          <button className=" font-semibold text-md flex  justify-center items-center w-[17rem] bg-white text-black h-10 rounded-3xl">
            Stake
          </button>
          <button className="text-white px-2 font-semibold text-md flex justify-center items-center w-[17rem]  h-10 rounded-3xl">
            Unstake
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center mt-10 bg-[#16161D] w-[35rem] rounded-2xl">
          <div className="flex justify-between w-full mt-2">
            <h1 className="text-md text-gray-400 m-2 font-semibold">
              Stake amount
            </h1>
            <div className="flex flex-row gap-1 m-2">
              <BiWalletAlt className="text-white w-6 h-6 " />
              <h1 className="text-white font-semibold">-</h1>
              <h1 className="text-white font-semibold mx-3">TON</h1>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <input
              placeholder="100"
              type="number"
              className="text-3xl font-bold border-none outline-none caret-transparent text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="flex flex-row gap-1">
              <h1 className="text-3xl text-white font-semibold ">TON</h1>
              <div className="flex items-center justify-center mx-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5041_15082)">
                    <path
                      d="M20 40C31.0714 40 40 31.0714 40 20C40 8.92857 31.0714 0 20 0C8.92857 0 0 8.92857 0 20C0 31.0714 8.92857 40 20 40Z"
                      fill="#0098EA"
                    ></path>
                    <path
                      d="M26.8573 11.1426H13.143C10.643 11.1426 9.07157 13.8569 10.2859 16.0711L18.7144 30.714C19.2859 31.6426 20.643 31.6426 21.2144 30.714L29.643 16.0711C30.9287 13.8569 29.3573 11.1426 26.8573 11.1426ZM18.7859 26.2854L16.9287 22.714L12.5001 14.7854C12.2144 14.2854 12.5716 13.6426 13.2144 13.6426H18.7859V26.2854ZM27.5001 14.7854L23.0716 22.714L21.2144 26.2854V13.6426H26.7859C27.4287 13.6426 27.7859 14.2854 27.5001 14.7854Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5041_15082">
                      <rect width="40" height="40" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end w-full">
            <button className="text-md font-semibold text-white bg-[#3B3B3E] hover:bg-[#37373a] mx-3  rounded-full p-1.5 cursor-pointer">
              Max
            </button>
          </div>
          <div className="mb-2 flex flex-row justify-center items-center gap-2">
            <div className="border-2 h-1 mx-4 bg-gray-500 w-[14rem]"></div>
            <LuArrowDownUp className="w-4 h-4 text-white" />
            <div className="border-2 h-1 mx-4 bg-gray-500 w-[14rem]"></div>
          </div>

          <div className="w-[35rem]">
            <div className="flex justify-start items-start w-full mt-2">
              <h1 className="text-md text-gray-400 m-2 font-semibold">
                Receive
              </h1>
            </div>

            <div className="flex justify-between w-full">
              <input
                placeholder="0"
                type="number"
                className="text-3xl mx-1 font-bold border-none outline-none caret-transparent text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <div className="flex flex-row gap-1 mx-3">
                <h1 className="text-3xl text-white font-semibold ">KTON</h1>
                <div className="flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5041_13487)">
                      <path
                        d="M20 40C31.0714 40 40 31.0714 40 20C40 8.92857 31.0714 0 20 0C8.92857 0 0 8.92857 0 20C0 31.0714 8.92857 40 20 40Z"
                        fill="#545CCB"
                        fill-opacity="0.5"
                      ></path>
                      <g clip-path="url(#clip1_5041_13487)">
                        <path
                          d="M20.0017 19.998L13.9652 31.6449L12.9473 31.0564L20.0017 19.998Z"
                          fill="white"
                        ></path>
                        <path
                          d="M6.91016 19.4102L20.0011 19.9987L6.91016 20.5872V19.4102Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.002 19.9984L29.5261 13.8125L30.1138 14.8318L20.002 19.9984Z"
                          fill="white"
                        ></path>
                        <path
                          d="M19.9998 19.9991L19.4121 8.64648H20.5875L19.9998 19.9991Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.0005 19.9984L9.88867 14.8318L10.4764 13.8125L20.0005 19.9984Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.002 19.998L30.1138 25.1646L29.5261 26.1839L20.002 19.998Z"
                          fill="white"
                        ></path>
                        <path
                          d="M19.9998 19.998L20.5875 31.3507H19.4121L19.9998 19.998Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.0005 19.998L10.4764 26.1839L9.88867 25.1646L20.0005 19.998Z"
                          fill="white"
                        ></path>
                        <path
                          d="M33.0929 21.2945L20.002 20.1175V19.8821L33.0929 18.7051V21.2945Z"
                          fill="white"
                        ></path>
                        <path
                          d="M19.8984 19.9411L25.426 8L27.6655 9.29473L20.1022 20.0589L19.8984 19.9411Z"
                          fill="white"
                        ></path>
                        <path
                          d="M19.8993 20.0589L12.3359 9.29473L14.5755 8L20.1028 19.9411L19.8993 20.0589Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20.1022 19.9414L27.6655 30.7055L25.426 32.0003L19.8984 20.0591L20.1022 19.9414Z"
                          fill="white"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5041_13487">
                        <rect width="40" height="40" fill="white"></rect>
                      </clipPath>
                      <clipPath id="clip1_5041_13487">
                        <rect
                          width="26.1818"
                          height="24"
                          fill="white"
                          transform="translate(7 8)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full mx-2 mt-4 mb-4">
              <h1 className="text-sm text-gray-400 font-semibold">
                1TON = 0.999365 KTON
              </h1>
              <div className="flex flex-row gap-1">
                <FaGasPump className="text-gray-400 w-4 h-4 " />
                <h1 className="text-gray-400">0.15 ~ 1.15</h1>
                <MdKeyboardArrowDown className="text-gray-400 mt-1 mx-4 cursor-pointer w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[35rem] bg-[#0D0D14] flex flex-col gap-2 rounded-2xl mt-6 border-2 border-gray-400">
          <div className="flex justify-between">
            <h1 className="text-gray-400 font-semibold mx-3 mt-4">
              Upcoming rewards
            </h1>
            <div className="flex flex-col mx-3 mt-4">
              <h1 className="text-xl font-semibold text-white">0.0080 TON</h1>
              <h1 className="text-gray-400">(2026-01-19 08:34)</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <h1 className="text-gray-400 font-semibold mx-3">Monthly (Est.)</h1>
            <div className="flex flex-col mx-7 mt-2">
              <h1 className="text-xl font-semibold text-white ">0.3077 TON</h1>
              <h1 className="text-gray-400">~$0.49</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <h1 className="text-gray-400 font-semibold mx-3">Yearly (Est.)</h1>
            <div className="flex flex-col mx-7 mt-2">
              <h1 className="text-xl font-semibold text-white">3.6932 TON</h1>
              <h1 className="text-gray-400">~$5.88</h1>
            </div>
          </div>
        </div>

        <button className="flex items-center mt-4 mb-4 justify-center cursor-pointer bg-blue-600 text-white w-[35rem] font-semibold text-sm h-11  rounded-full">
          Connect Wallet
        </button>

        <div className="w-[35rem] rounded-2xl h-18 mb-4 bg-[#0D0D14] mt-4 border-2 flex flex-row justify-between items-center border-gray-400">
          <div className="flex flex-row gap-2 mx-3">
            <IoIosFlower className="w-8 h-8 text-blue-600" />
            <h1 className="text-white text-2xl">APY</h1>
            <IoInformationCircleOutline className="w-5 h-5 mt-2 text-gray-300" />
          </div>

          <div>
            <h1 className="text-2xl font-bold mx-3 text-white">3.69%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stake;
