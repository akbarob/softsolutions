import Image from "next/image";
import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-[12px] mb-1",
  span: "flex flex-col  items-start justify-start",
};
export default function OtherInfo({}) {
  return (
    <div className=" md:max-w-[400px] mt-8">
      <div className="my-2 flex justify-between items-center">
        <h1 className="text-blue-800 font-bold">Others</h1>
        <Image
          width={30}
          height={30}
          src="/images/blue-switch.png"
          className=" ml-10"
          alt=""
        />
      </div>

      <div className="flex flex-row justify-between ">
        <div className={style.span}>
          <h1 className={style.h1}>Signature</h1>
          <Image
            src={`/images/signature.png`}
            className="object-fit w-[100px]"
            width={100}
            height={100}
            alt="signature"
          />
        </div>
        <div className={style.span}>
          <h1 className={style.h1}>Fingerprint</h1>
          <Image
            src={`/images/fingerprint.png`}
            className="object-fit w-[100px]"
            width={100}
            height={100}
            alt="finger print"
          />
        </div>
      </div>
    </div>
  );
}
