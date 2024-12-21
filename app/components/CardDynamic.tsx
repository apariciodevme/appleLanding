import React from "react";
import BtnPair from "./BtnPair";

type Props= {
    title: string;
    text: string;
    bg: string;
}

const CardDynamic = ({title, text, bg}: Props) => {
  return (
    <div className="w-full rounded-none card image-full min-h-96">
      <figure>
        <img
        className="z-10"
          src={bg}
          alt="Shoes"
        />
      </figure>
      <div className="z-20 flex flex-col items-center justify-end p-10 text-center">
      <h1 className="text-3xl font-semibold text-white">{title}</h1>
      <p>{text}</p>
        <div className="justify-end card-actions">
        <BtnPair btnLeft="Learn More" btnRight="Buy"/>
        </div>
      </div>
    </div>
  );
};

export default CardDynamic;
