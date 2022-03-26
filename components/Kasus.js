import React from "react";

export default function Kasus() {
  const kasus = ["Kasus Jual Beli", "Kasus Penipuan", "Kasus Keluarga"];
  return (
    <div className="max-w-7xl mx-auto pglobal py-12">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 md:items-center">
        <div className="flex flex-col md:w-1/2">
          <h1 className="kepala lg:mb-12">Kasus Selesai</h1>
          <div className="flex flex-col py-6">
            {kasus.map((kasu) => (
              <h3
                className="border-t border-b py-4 text-sm md:text-base"
                key={""}
              >
                {kasu}
              </h3>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="buttgold">Lihat Semua</button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="book.png" alt="" className="rounded-lg mt-8 object-cover" />
        </div>
      </div>
    </div>
  );
}
