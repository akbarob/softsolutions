import React from "react";

export default function Button({ title, icon }) {
  return (
    <div className="w-[100px] lg:w-[200px] h-[50px] bg-blue-900 flex flex-row justify-between items-center ">
      <p className="text-white text-sm lg:text-md font-semibold px-4">
        {title}
      </p>
      <div className="h-full w-1/4 flex justify-center items-center bg-black">
        {icon}
      </div>
    </div>
  );
}
