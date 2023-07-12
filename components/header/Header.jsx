/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-6 ">
      <div>
        <img
          src="/assets/ZTFR.png"
          alt="ZITRANSFER-logo"
          className="w-[100px] 3xl:w-[147px]"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <img src="/assets/UserIcon.png" alt="user-icon" className="w-[15px] 3xl:w-[20px] " />
        <img
          src="/assets/UNITEDKINGDOM.png"
          alt="country-flag"
          className="w-[40px] 3xl:w-[50px]"
        />
      </div>
    </header>
  );
};

export default Header;
