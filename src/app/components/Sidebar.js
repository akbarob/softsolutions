import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function Sidebar() {
  return (
    <div className="flex-col w-1/4">
      <div className="flex flex-row justify-between items-center bg-amber-400 w-full px-8 py-4">
        <div>Menu</div>
        <div className="bg-blue-900 rounded-full p-2">
          <Bars3Icon className="text-white h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
