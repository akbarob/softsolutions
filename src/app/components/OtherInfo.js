import Image from "next/image";
import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-sm mb-1",
  span: "mr-6",
};
export default function OtherInfo({}) {
  return (
    <div className="lg:w-[400px] mt-8 ">
      <div className="my-2 flex justify-between items-center">
        <h1 className="text-blue-800 font-bold">Others</h1>
        <Image
          width={30}
          height={30}
          src="/images/blue-switch.png"
          className=" ml-10"
        />
      </div>

      <div className="flex flex-col md:flex-row  lg:justify-between lg:items-center ">
        <span className={style.span}>
          <h1 className={style.h1}>Signature</h1>
          <div className="border-1 border-gray-200  ">
            <input type="file" />
          </div>
        </span>
        <span className={` ${style.span}`}>
          <h1 className={style.h1}>Fingerprint</h1>
          <Image
            src={`/images/fingerprint.png`}
            className="object-fit w-[100px]"
            width={100}
            height={100}
          />
          {/* <p className={style.p}>Ilesha-West</p> */}
        </span>
      </div>
    </div>
  );
}
