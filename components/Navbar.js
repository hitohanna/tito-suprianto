import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const menus = ["HOME", "PENGACARA", "STAFF AHLI", "KONTAK"];
  return (
    <div className="absolute z-10 h-20 w-full pglobal">
      <div className="h-full max-w-7xl flex items-center justify-between mx-auto">
        <div className="flex items-start cursor-pointer">
          <img src="/svg/logo.svg" alt="" className="w-8" />
          <h2 className="hidden md:block text-xl ml-3 tracking-wide font-medium">
            TITO SUPRIANTO
          </h2>
        </div>
        <div>
          <MenuIcon className="w-7 p-1 border md:hidden" />
        </div>
        <div className="hidden md:flex items-center md:space-x-4 lg:space-x-12  cursor-pointer">
          {menus.map((menu) => (
            <a
              className="relative font-medium group hover:text-gold transition-colors duration-200 ease-in-out"
              key={""}
            >
              {menu}{" "}
              <div className="absolute w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
