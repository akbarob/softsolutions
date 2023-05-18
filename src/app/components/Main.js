import React from "react";
import { BookOpenIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Button from "./Button";
import BioData from "./InfoCard";
import ContactInfo from "./ContactInfo";
import EmploymentInfo from "./EmploymentInfo";
import OtherInfo from "./OtherInfo";
import ProfileImage from "./ProfileImage";

export default function Main() {
  return (
    <div className=" w-full lg:px-10">
      {/* Header */}
      <div
        className="h-[100px] flex flex-row justify-between w-full bg-no-repeat bg-blend-soft-light bg-cover"
        style={{ backgroundImage: "url(/images/BG.jpg)" }}
      >
        <div className="p-4 lg:px-8">
          <h2 className="font-bold text-blue-900 flex flex-row items-center">
            Edit profile{" "}
            <Image
              width={30}
              height={30}
              src="/images/blue-switch.png"
              className=" ml-10"
              alt=""
            />
          </h2>
          <p className="hidden lg:flex max-w-[200px]  lg:text-clip lg:max-w-[700px]  text-[12px] ">
            Contrary to popular belief, Loriem ipum is not simply random text.
            it has roots in a place of classical Latin lierature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hamden-Sydney Collage
          </p>
        </div>
        <div className=" items-center justify-end">
          <BookOpenIcon className="w-24 h-24 text-blue-400" />
        </div>
      </div>
      {/* Body */}

      <div className="flex justify-between items-center p-2 mt-10 px-2 md:px-4 lg:px-8 ">
        <ProfileImage />
        <Button
          title="Upload profile"
          icon={
            <UserPlusIcon className="bg-black text-white h-8 w-8 cursor-pointer" />
          }
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-6 gap-x-10 px-2 md:px-4  lg:px-8">
        <BioData />
        <EmploymentInfo />
      </div>
      <div className="px-2 md:px-4 lg:px-8">
        <ContactInfo />

        <OtherInfo />
      </div>
    </div>
  );
}
