"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/24/solid";
export default function ProfileImage() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative cursor-pointer ">
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={`/images/profileImage.jpeg`}
        className="objectfit "
        height={230}
        width={230}
        alt="profile-image"
      />

      {hovered && (
        <div
          className="absolute top-10 -right-[50px] lg:-right-[150px]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
            title="View Photo"
            className="mb-2"
            icon={<PhotoIcon className="w-8 h-8 text-white " />}
          />
          <div className="bg-transparent h-[3px]" />
          <Button
            title="Upload Photo"
            icon={<ArrowUpTrayIcon className="w-8 h-8 text-white" />}
          />
        </div>
      )}
    </div>
  );
}
