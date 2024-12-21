import React from "react";

type Props = {
  btnLeft: string;
  btnRight: string;
};

const BtnPair = ({ btnLeft, btnRight }: Props) => {
  return (
    <div className="flex gap-2 pt-2">
      <button className="font-normal text-white rounded-full btn-sm btn btn-primary">
        {btnLeft}
      </button>
      <button className="px-6 font-normal text-blue-400 rounded-full btn-sm btn btn-outline">
        {btnRight}
      </button>
    </div>
  );
};

export default BtnPair;
