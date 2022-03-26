import React from "react";

export default function Footer() {
  return (
    <div className="w-full border-t border-gold py-12 mt-24">
      <div className="max-w-7xl mx-auto pglobal py-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col lg:col-span-1">
            <div className="flex items-start">
              <img src="/svg/logo.svg" alt="" className="w-8" />
              <h2 className=" md:block text-xl ml-3 tracking-wide font-medium">
                TITO SUPRIANTO
              </h2>
            </div>
            <p className="leading-relaxed mt-6 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, sed fuga odio iste id officia reprehenderit ipsam qui
              voluptas ut, quia, laboriosam expedita rem quas ex? Magni iste
              consequuntur harum.
            </p>
            <div>
              <button className="buttgold mt-6">Hubungi Sekarang</button>
            </div>
          </div>
          <div className="flex flex-col md:col-span-1 md:col-start-3">
            <h3 className="font-medium text-xl mt-6">Kontak</h3>
            <div className="flex flex-col space-y-2 mt-4">
              <div className="flex items-center">
                <img src="/svg/loc.svg" alt="" className="w-5" />
                <p className="text-sm ml-3 font-light">
                  Lorem ipsum dolor, sit amet consectetur.
                </p>
              </div>
              <div className="flex items-center">
                <img src="/svg/wa.svg" alt="" className="w-5" />
                <p className="text-sm ml-3 font-light">1234-6543-8974</p>
              </div>
              <div className="flex items-center">
                <img src="/svg/wa.svg" alt="" className="w-5" />
                <p className="text-sm ml-3 font-light">1234-6543-8954</p>
              </div>
              <div className="flex items-center">
                <img src="/svg/mail.svg" alt="" className="w-5" />
                <p className="text-sm ml-3 font-light">jhono@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
