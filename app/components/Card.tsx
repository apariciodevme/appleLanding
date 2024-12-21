import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  text: string;
  btnLeft: string;
  btnRight: string;
};

const Card = ({ title, text, btnLeft, btnRight }: Props) => {
  return (
    <div className="flex flex-col justify-end items-center w-full min-h-[500px] gap-2 p-10 bg-gray-900 bg-center bg-cover bg-no-repeat bg-[url('/vertical/pro.jpeg')]">
      <div className="flex flex-col items-center gap-2 text-center ">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="text-lg font-medium text-white">{text}</p>
        <div className="flex gap-2 pt-2">
          <button className="font-normal text-white rounded-full btn-sm btn btn-primary">
            {btnLeft}
          </button>
          <button className="px-6 font-normal text-blue-400 rounded-full btn-sm btn btn-outline">
            {btnRight}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
