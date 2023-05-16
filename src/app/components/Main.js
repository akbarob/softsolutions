import React from "react";
import { BookOpenIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Button from "./Button";
import BioData from "./InfoCard";
import ContactInfo from "./ContactInfo";

export default function Main() {
  return (
    <div className="ml-3 w-2/3">
      {/* Header */}
      <div className="h-[100px] flex flex-row justify-between w-full">
        <div className="p-4">
          <h2>Edit profile</h2>
          <p className="max-w-[700px]">
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

      <div className="flex justify-between items-center">
        <Image />
        <Button
          title="Upload profile"
          icon={<UserPlusIcon className="bg-black text-white h-8 w-8  p-2" />}
        />
      </div>

      <BioData />
      <ContactInfo />
    </div>
  );
}
