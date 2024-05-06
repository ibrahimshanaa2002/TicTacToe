import React from "react";
import Statistics from "./Statistics";
const GameStructure = () => {
  return (
    <div>
      <div className="h-[90vh] bg-black">
        <div class="board flex flex-col items-center justify-center h-full">
          <div class="row flex justify-center items-center">
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-0"
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 border-l-4 border-r-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-1"
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-4"
            ></div>
          </div>
          <div class="row flex justify-center items-center">
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-3"
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 border-l-4 border-r-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-4 "
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-b-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-5 "
            ></div>
          </div>
          <div class="row flex justify-center items-center">
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-6"
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] border-l-4 border-r-4 hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-7"
            ></div>
            <div
              class="cell lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] hover:bg-gray-500 hover:bg-opacity-10 duration-200 cursor-pointer"
              id="cell-8 "
            ></div>
          </div>
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default GameStructure;
