import Image from "next/image";
import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-[12px] mb-1",
  span: "mr-6",
};
export default function EmploymentInfo({}) {
  return (
    <div className="">
      <div className="my-2 flex justify-between items-center md:w-[400px] ">
        <h1 className="text-blue-800 font-bold">Employment Information</h1>
        <Image
          width={30}
          height={30}
          src="/images/blue-switch.png"
          className=" ml-10"
          alt=""
        />
      </div>

      <div className="flex flex-row">
        <div className="mr-6">
          <span className={style.span}>
            <h1 className={style.h1}>Employee Number</h1>
            <p className={style.p}>S1A - 002</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>Designation</h1>
            <p className={style.p}>Software Developer</p>
          </span>
        </div>
        <div className="mr-6">
          <span className={style.span}>
            <h1 className={style.h1}>Employment Type</h1>
            <p className={style.p}>Full-time</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>Department</h1>
            <p className={style.p}>Enterprise Unit</p>
          </span>
        </div>

        <div>
          <span>
            <h1 className={style.h1}>Employment Resumption Date</h1>
            <p className={style.p}>2023-01-21</p>
          </span>
        </div>
      </div>
    </div>
  );
}
