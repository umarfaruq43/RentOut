import React from "react";
import insurance from "../assets/img/insurance.png";

const Platform = () => {
  return (
    <div className=" mt-16 md:mt-44">
      <div className="flex flex-col-reverse md:flex-row-reverse  ">
        <div className="wfull md:w-1/2 relative">
          <img src={insurance} alt="srceens" className="block  mx-auto" />
          {/* <div className="w-16 h-16 bg-orange rounded-full absolute -top-20 -z-10 right-20 "></div> */}
        </div>

        {/* second row   */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center  ">
          <div className="">
            <h1 className="text-orange text-2xl text-center md:text-left md:text-2xl leading-9 font-bold">
              Original platform
            </h1>
            <div className="pt-4 text-center md:text-left text-1xl font-bold leading-10">
              Insure your items <br /> and Be at peace
            </div>
            <div className="rentOut text-lg md:text-2xl leading-9 pt-5 text-center md:text-left text-text tracking-wide ">
              Rentout offers security and insurance of up to $500 on every item
              you rent out. This allows you to rent and rent out your items with
              peace of mind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
