import React from "react";

const Download4 = () => {
  return (
    <div className="h-screen uppercase   bg-[#ffff00] bg-opacity-30">
      <div className="flex  bg-black h-screen lg:pl-5 pl-0 pt-5 bg-opacity-90">
        <div className="lg:pl-0 pl-2" >
          <img className="w-[147px]" src={"/assets/ZTFR w.png"} alt="" />
          <p className=" tracking-[2px] mt-[60px] text-[20px] text-[#ffff00] ">
            revision <br /> files
          </p>
          <img src="/assets/Download Icon Y.png" className="w-[67.56px] mt-[40px]" alt="" />
        </div>
        <div className="flex ml-[-60px] sm:ml-0 items-center lg:items-start justify-center w-[1250px]  ">
          <p className=" tracking-[2px] sm:text-[200px] text-[150px] lg:text-[450px] pt-[50px] sm:pt-[80px]  lg:pt-0  font-thin text-yellow">
            23
          </p>
          <p className=" font-thin tracking-[2px] lg:text-[200px] sm:text-[75px] text-[60px] lg:mt-[120px]  text-yellow">%</p>
        </div>
      </div>
    </div>
  );
};

export default Download4;
