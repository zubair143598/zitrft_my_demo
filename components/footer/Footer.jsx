/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex gap-y-4 lg:justify-between lg:items-start px-6 flex-col lg:flex-row py-3">
      <div className=" opacity-80 text-center lg:text-start ">
        <p className="text-[10px]  text-black tracking-[1.2px]">
        {t('footer.zitransfer')}
          {/* © ZITRANSFER 2023 */}
        </p>
        <div className="lg:flex ">
          <p className="text-[10px]  text-black tracking-[1.2px]">
        {t('footer.rights')}

            {/* ALL RIGHTS RESERVED */}
          </p>
          <p className="text-[10px]  text-black tracking-[1.2px]">
        {t('footer.partof')}

            {/* ZITRANSFER IS PART OF THE ZINO GROUP */}
          </p>
        </div>
      </div>

      <div className="flex  items-center  opacity-80  text-center gap-x-1 lg:gap-x-2">
        <img
          src="assets/SecurityLockB.png"
          alt=""
          className="w-[8px]  
          "
        />
        <p className="text-[10px]  text-black tracking-[1.2px]">
          {" "}
        {t('footer.zitransferUses')}

          {/* ZITRANSFER USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT
          THE CONFIDENTIALITY OF THE DATA YOU UPLOAD. */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
