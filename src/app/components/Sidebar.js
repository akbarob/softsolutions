"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function Sidebar() {
  const [show, setShow] = useState(true);
  return (
    <div className="hidden lg:flex  flex-col w-[250px]">
      <div
        className="flex flex-row justify-between items-center bg-amber-400  px-8 py-4 w-[250px]"
        style={{ backgroundImage: "url(/images/BG.jpg)" }}
      >
        <p className="font-bold text-blue-900">Menu</p>
        <div className="bg-blue-900 rounded-full p-2 cursor-pointer">
          <Bars3Icon
            className="text-white h-8 w-8 "
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {show && (
        <div>
          {[
            "Edit Profile",
            "Medical",
            "Next of Kin",
            "Dependants",
            "Educational History",
            "Employment History",
            "Documents",
          ].map((item, i) => (
            <div key={i}>
              <div className="flex flex-row py-4 justify-between items-center w-[250px] px-2">
                <h2>{item} </h2>

                <Image
                  width={30}
                  height={30}
                  src="/images/blue-switch.png"
                  className=" ml-10"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
