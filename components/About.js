import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl pglobal flex flex-col-reverse md:flex-row items-center py-12 text-left mx-auto ">
      <div className="mt-12 md:w-1/2">
        <img
          src="img.png"
          alt=""
          className="w-full object-cover overflow-hidden rounded-xl"
        />
      </div>
      <div className="flex flex-col mt-12 space-y-4 lg:space-y-9 md:w-1/2 md:ml-8 lg:ml-12">
        <h1 className="kepala">Tentang Kami</h1>
        <p className="leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet
          eius! Nobis labore deserunt, ipsam quam consequatur voluptatem nostrum
          accusamus illo ratione.
        </p>
        <div>
          <button className="buttgold">Hubungi Kami</button>
        </div>
      </div>
    </div>
  );
}
