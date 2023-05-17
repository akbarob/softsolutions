import React from "react";
import {
  UserCircleIcon,
  PowerIcon,
  Cog6ToothIcon,
  Bars3Icon,
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
    icon: <UserCircleIcon className="h-16 w-16 " />,
  },
  {
    id: 5,
    title: "Settings",
    icon: <Cog6ToothIcon className="h-16 w-16 " />,
  },
  {
    id: 5,
    title: "Logout",
    icon: <PowerIcon className="h-16 w-16 " />,
  },
];
export default function Navbar() {
  return (
    <nav className=" h-[76px] w-full ">
      {/* large screen Navbar */}
      <div className="hidden lg:flex flex-col w-full">
        <div className=" h-[50px] w-full bg-blue-900 pl-36 flex justify-start items-center">
          <h1 className="font-bold text-xl text-white uppercase cursor-pointer">
            SoftSolutions Enterprises
          </h1>
        </div>

        <div className="flex flex-row justify-between px-36 w-full">
          <div className="flex flex-row h-[30px]">
            {navigations.map((item, i) => (
              <div key={i} className={``}>
                <div
                  className={`${
                    item.id === 1 ? "bg-gray-300" : "bg-blue-900"
                  } px-5 cursor-pointer hover:text-black hover:bg-gray-200 text-white font-semibold capitalize`}
                >
                  <p
                    className={`${
                      item.title === "Home" && "text-black"
                    } hover:text-black`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row">
            {Menu.map((item, i) => (
              <div
                key={i}
                className="p-2 flex flex-col justify-center items-center w-[100px] h-[70px] bg-blue-900 mx-[1px] cursor-pointer text-white hover:bg-gray-200 hover:text-black"
              >
                {item.icon}
                <span className=" font-semibold capitalize ">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile nav? */}
      <div className="lg:hidden h-[56px] bg-blue-900 flex justify-between items-center px-4">
        <div className="bg-white w-[50px] rounded-full p-2">
          <Bars3Icon className="text-blue-900 h-8 w-8" />
        </div>
        <div>
          <h1 className="font-bold text-md text-white uppercase">
            SoftSolutions Enterprises
          </h1>
        </div>
      </div>
    </nav>
  );
}
