import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none"></div>
      <div className="flex-1">
        <Image
          className="opacity-80"
          src={"/apple-logo.png"}
          width={20}
          height={20}
          alt="logo"
        />{" "}
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
       <Image
       src={'/search.png'}
       width={20}
       height={20}
       alt="'search"
       />
        </button>
        <button className="btn btn-square btn-ghost">
       <Image
       src={'/parcel.png'}
       width={15}
       height={15}
       alt="'parcel"
       />
        </button>
        <button className="btn btn-square btn-ghost">
       <Image
       src={'/main-menu.png'}
       width={20}
       height={20}
       alt="'menu"
       />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
