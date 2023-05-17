import Image from "next/image";
import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-sm mb-1",
  span: "mr-6",
};
export default function ContactInfo({}) {
  return (
    <div className="">
      <div className="my-2 flex justify-between items-center lg:w-[400px]">
        <h1 className="text-blue-800 font-bold">Contact Information</h1>
        <Image
          width={30}
          height={30}
          src="/images/blue-switch.png"
          className=" ml-10"
        />
      </div>

      <div className="flex flex-col">
        <div className="mr-6 flex flex-row">
          <span className={style.span}>
            <h1 className={style.h1}>Mobile Numer</h1>
            <p className={style.p}>080909034</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>Phone Numer</h1>
            <p className={style.p}>084909034</p>
          </span>
        </div>
        <div className="mr-6 flex flex-row mt-4">
          <span className={style.span}>
            <h1 className={style.h1}>Primary Email</h1>
            <p className={style.p}>johnemeralddoe@123.com</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>Secondary email</h1>
            <p className={style.p}>nil</p>
          </span>
        </div>
      </div>
    </div>
  );
}
