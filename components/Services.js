import React from "react";

export default function Services() {
  const kasus = [
    "Pidana Umum",
    "Pidana Khusus",
    "Perdata",
    "Pengadilan Agama",
    "Tata Usaha Negara",
  ];

  let x = 0;
  return (
    <div className="max-w-7xl mx-auto pglobal py-12">
      <h1 className="kepala mb-12">Available Services</h1>
      <div>
        <div>
          {kasus.map((kasu) => (
            <div
              className="grid grid-cols-5 items-center border-t border-b py-4 space-x-10 text-sm md:text-base"
              key={""}
            >
              <h1 className="col-span-2 ">{kasu}</h1>
              <p>0{(x = x + 1)}</p>
              <div className="col-span-2 text-right">
                <button className="border border-gold rounded-xl px-3 py-2 md:px-4 hover:bg-gold hover:text-hitam hover:font-bold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
