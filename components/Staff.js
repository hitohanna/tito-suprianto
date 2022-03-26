import React from "react";

export default function Staff() {
  return (
    <div className="pglobal max-w-7xl mx-auto py-12">
      <h1 className="kepala mb-12">Staff Ahli</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-3 mt-6">
        <div>
          <img src="ahli1.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Rina S</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="ahli2.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Adit P</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="ahli3.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Bunga U</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
        <div>
          <img src="ahli4.png" alt="" className="w-full" />
          <h2 className="text-xl font-bold text-gold mt-4">Blacky P</h2>
          <p className="font-light leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}
