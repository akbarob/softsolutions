import React from "react";
const style = {
  p: "uppercase text-[10px]  text-gray-400",
  h1: "capitalize font-bold text-md",
  span: "mr-8",
};
export default function ContactInfo({}) {
  return (
    <div className="">
      <div>
        <h1 className="text-blue-800 font-bold">Contact Information</h1>
      </div>

      <div className="flex flex-row">
        <div className="mr-8">
          <span className={style.span}>
            <h1 className={style.h1}>Title</h1>
            <p className={style.p}>Ms</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>LGA</h1>
            <p className={style.p}>Ilesha-West</p>
          </span>
        </div>
        <div className="mr-8">
          <span className={style.span}>
            <h1 className={style.h1}>First Name</h1>
            <p className={style.p}>Akbar</p>
          </span>
          <span className={style.span}>
            <h1 className={style.h1}>State of Origin</h1>
            <p className={style.p}>Ogun state</p>
          </span>
        </div>
        <div className="mr-8">
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
