import React from "react";
import {
  UserCircleIcon,
  PowerIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
const navigations = [
  { id: 1, title: "Home" },
  { id: 2, title: "Payroll" },
  { id: 3, title: "Leave" },
  { id: 4, title: "Loan" },
  { id: 5, title: "Appraisal" },
  { id: 6, title: "Subscriptions" },
];
const Menu = [
  {
    id: 4,
    title: "Profile",
    icon: <UserCircleIcon className="h-16 w-16 text-white" />,
  },
  {
    id: 5,
    title: "Settings",
    icon: <Cog6ToothIcon className="h-16 w-16 text-white" />,
  },
  {
    id: 5,
    title: "Logout",
    icon: <PowerIcon className="h-16 w-16 text-white" />,
  },
];
export default function Navbar() {
  return (
    <nav className="top-0 sticky h-[76px] w-full ">
      {/* large screen Navbar */}
      <div>
        <div className=" h-[50px] bg-blue-900">
          <h1 className="font-bold text-xl text-white uppercase">
            SoftSolutions Enterprises
          </h1>
        </div>

        <div className="flex flex-row justify-between px-36">
          <div className="flex flex-row h-[30px]">
            {navigations.map((item, i) => (
              <div key={i} className={`bg-blue-900 px-5 cursor-pointer`}>
                <span className="text-white font-semibold capitalize">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-row">
            {Menu.map((item, i) => (
              <div
                key={i}
                className="p-2 flex flex-col justify-center items-center w-[100px] h-[70px] bg-blue-900 mx-[1px]"
              >
                {item.icon}
                <span className="text-white font-semibold capitalize">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
