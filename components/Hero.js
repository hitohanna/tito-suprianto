import React from "react";

export default function Hero() {
  return (
    <div className="w-full min-h-screen md:h-[39rem] lg:min-h-screen">
      <div className="relative">
        <div className="">
          <img
            src="hero2.png"
            alt=""
            className="absolute min-h-screen md:h-[39rem] w-full object-cover lg:min-h-screen  w-full"
          />
          <div className="bg-black w-full min-h-screen md:h-[39rem] absolute opacity-70 lg:min-h-screen" />
        </div>
        <div className="flex flex-col items-center py-36 lg:py-7 pglobal absolute z-10 max-w-7xl inset-0 mx-auto md:mt-[8rem]">
          <img
            src="svg/logo.svg"
            alt=""
            className="w-14 md:w-[5rem] md:mt-[2.5rem] lg:mt-[1rem] lg:w-32"
          />
          <h1 className="font-extrabold tracking-wide text-6xl text-center mt-14 md:text-7xl lg:text-[8rem] lg:mt-24">
            TITO SUPRIANTO
          </h1>
          <h1 className="font-bold text-2xl tracking-widest mt-14 lg:mt-36">
            LAW FIRM
          </h1>
          <p className="tracking-wide font-light mt-2">
            ADVOCATES & LEGAL CONSULTANS
          </p>
        </div>
      </div>
    </div>
  );
}
