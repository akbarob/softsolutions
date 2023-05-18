import Image from "next/image";
import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-[12px] mb-1",
  span: "mr-6",
};
export default function BioData({}) {
  return (
    <div className="">
      <div className="my-2 flex justify-between items-center lg:w-[400px]">
        <h1 className="text-blue-800 font-bold">Bio Data Information</h1>
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
            <h1 className={style.h1}>Title</h1>
            <p className={style.p}>Ms</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>LGA</h1>
            <p className={style.p}>Ilesha-West</p>
          </span>
        </div>
        <div className="mr-6">
          <span className={style.span}>
            <h1 className={style.h1}>First Name</h1>
            <p className={style.p}>Akbar</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>State of Origin</h1>
            <p className={style.p}>Ogun state</p>
          </span>
        </div>
        <div className="mr-6">
          <span className={style.span}>
            <h1 className={style.h1}>Other Names</h1>
            <p className={style.p}>Opemipo</p>
          </span>

          <span className={style.span}>
            <h1 className={style.h1}>Country</h1>
            <p className={style.p}>NIgeria</p>
          </span>
        </div>
        <div>
          <span>
            <h1 className={style.h1}>Last Name</h1>
            <p className={style.p}>Badmus</p>
          </span>
        </div>
      </div>
    </div>
  );
}
