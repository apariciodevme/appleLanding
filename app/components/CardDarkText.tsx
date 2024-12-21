import React from "react";
import BtnPair from "./BtnPair";

type Props= {
    title: string;
    text: string;
    bg: string;
    btnLeft: string;
    btnRight: string;
}

const CardDarkText = ({title, text, bg, btnLeft, btnRight}: Props) => {
  return (
    <div className="w-full mb-3 rounded-none card image-full min-h-96 h-[500px]">
      <figure>
        <img
        className="z-10"
          src={bg}
          alt="Shoes"
        />
      </figure>
      <div className="z-20 flex flex-col items-center justify-start gap-2 p-10 mx-20 text-center">
      <h1 className="text-3xl font-semibold text-black">{title}</h1>
      <p className="font-normal text-black text-md">{text}</p>
      <div className="justify-end card-actions">

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
    </div>
  );
};

export default CardDarkText;
