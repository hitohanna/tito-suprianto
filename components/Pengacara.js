import React from "react";

export default function Pengacara() {
  return (
    <div className="pglobal max-w-7xl mx-auto py-12">
      <h1 className="kepala mb-12">Pengacara Kami</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-3 mt-6">
        <div>
          <img src="member1.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Jhono S</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="member2.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Hotman P</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="member3.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Amir U</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="member4.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Mirwan P</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}
