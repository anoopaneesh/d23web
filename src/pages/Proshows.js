import React from "react";
import { useNavContext } from "../context/NavContext";
import "../components/Proshow/proshow.css";
import PR1 from "../assets/jpeg/pr1.png";
import PR2 from "../assets/jpeg/pr2.png";
const Proshows = () => {
  useNavContext().changeCurrentPage("proshows");
  return (
    <div className="bg-black absolute top-0 w-full min-h-screen overflow-scroll proshow scroll-smooth ">
      <div className="relative top-48  ">
        <h1 className=" text-7xl font-chakra text-yellow-400 w-fit mx-8  md:mx-24 text-center ">
          Proshows
        </h1>
        {/* div for underline */}
        <div className="mx-8 md:mx-24 w-48  h-1 bg-yellow-400 my-4"></div>

        <div className="flex md:flex-row flex-col items-center justify-center mt-16">
          <div className="banner h-72 proshow_day1  bg-contain w-11/12 md:w-3/5   hover:blur-0 transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-105"></div>
          <div className="ml-8">
            <h1 className=" text-5xl font-chakra text-white font-bold w-fit mx-8  md:mx-2 text-center ">
              DAY 1
            </h1>
            <p className="mx-8 md:mx-2 font-chakra  font-bold text-2xl py-2 text-white  h-1  my-4">
              KS HARISHANKAR
            </p>
            <p className="mx-8 rounded-bl-2xl	 md:mx-2  text-xl text-white p-2 px-3 font-bold cursor-pointer transition duration-150 ease-in-out hover:text-gray-100 hover:bg-purple-800   w-fit  my-8 border-2 border-white">
              book now
            </p>
          </div>
        </div>


        <div className="flex md:flex-row-reverse flex-col items-center justify-center mt-16">
        <div className="banner h-72 proshow_day2  bg-contain w-11/12 md:w-3/5   hover:blur-0 transition-all ease-in-out duration-200 hover:cursor-pointer hover:scale-105"></div>
          <div className="mr-8">
            <h1 className=" text-5xl font-chakra text-white font-bold w-fit mx-8  md:mx-2 text-center ">
              DAY 3
            </h1>
            <p className="mx-8 md:mx-2 font-chakra  font-bold text-2xl py-2 text-white  h-1  my-4">
ANKIT TIWARI            </p>
            <p className="mx-8 rounded-bl-2xl	 md:mx-2  text-xl text-white p-2 px-3 font-bold cursor-pointer transition duration-150 ease-in-out hover:text-gray-100 hover:bg-purple-800   w-fit  my-8 border-2 border-white">
              book now
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Proshows;
