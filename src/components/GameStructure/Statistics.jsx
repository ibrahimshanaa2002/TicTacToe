import React from "react";
import { CgClose } from "react-icons/cg";

import { PiCircleBold } from "react-icons/pi";
import { GiBodyBalance } from "react-icons/gi";

const Statistics = () => {
  return (
    <div className="py-20">
      <div className="statics flex text-white gap-11">
        <div className="flex flex-col justify-center items-center">
          <div className="1st-palyer flex flex-col items-center gap-2 text-2xl">
            <div className="text-3xl">
              <CgClose />
            </div>
            <div>1st Player</div>
          </div>
          <div className="result text-3xl font-mono">1</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="draw flex flex-col items-center gap-2 text-2xl">
            <div className="text-3xl">
              <GiBodyBalance />
            </div>
            <div>Draw</div>
          </div>
          <div className="result text-3xl font-mono">1</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="2nd-player flex flex-col items-center gap-2 text-2xl">
            <div className="text-3xl">
              <PiCircleBold />
            </div>
            <div>2nd Player</div>
          </div>
          <div className="result text-3xl font-mono">100</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
