import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24">
      <nav className="flex text-gray-500 divide-gray-200 flex-col gap-2 text-sm divide-y-[1px] ">
          <a >Shop and Learn</a>
        <a >Apple Wallet</a>
        <a >Account</a>
        <a >Entretainment</a>
        <a >Apple Store</a>
        <a >For Business</a>
        <a >For Education</a>
        <a >For Healtcare</a>
        <a >For Government</a>
        <a >Apple Values</a>
        <a >About Apple</a>
      </nav>

      <section className="flex flex-col items-start gap-5">
        <p className="text-xs">
          More ways to shop:{" "}
          <a className="text-blue-500 underline" href="">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a className="text-blue-500 underline" href="">
            other retailer
          </a>{" "}
          near you. Or call{" "}
          <a className="text-blue-500 underline" href="">
            1-800-MY-APPLE
          </a>
        </p>
        <h6 className="font-semibold">United States</h6>
        <p className="text-xs text-gray-500">
          Copyright 2024 Apple Inc. All rights reserved.
        </p>

        <nav className="">
          <ul className="flex gap-2 text-xs divide-x-2 divide-slate-600">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Sales and refunds</a>
            </li>
            <li>
              <a href="/">Legal</a>
            </li>

            <li>
              <a href="/">Site Map</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
