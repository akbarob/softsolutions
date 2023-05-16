import React from "react";

export default function Button({ title, icon }) {
  return (
    <div className="w-[200px] h-[50px] bg-blue-900 flex flex-row justify-between items-center">
      <p className="text-white font-semibold">{title}</p>
      <div className="h-full">{icon}</div>
    </div>
  );
}
