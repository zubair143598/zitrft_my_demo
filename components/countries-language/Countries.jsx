/* eslint-disable @next/next/no-img-element */
import { countriesData } from "@/lib/constants";
import { RiAccountCircleLine } from "react-icons/ri";
import Location from "../Location";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Countries = () => {
  const { t,i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleCountryClick = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    console.log(language);
  };
  return (
    <section className="min-h-screen  h-screen ">
      <div className="h-[15%] w-full flex justify-center items-center">
        <div className=" tracking-[2px] items-center ml-5">
          <p className="lg:text-[16px] text-[10px] ">
            {/* Choose Your Country or Region */}
            {t('countries.choose')}
          </p>
          <p className="lg:text-[16px] text-[10px] italic">
            {t('countries.language')}
            {/* LANGUAGE  */} 
            </p>
        </div>
        <div className="flex-1 flex-row flex justify-end items-center">
          <div className=" relative h-full flex items-center">
            <RiAccountCircleLine className="absolute right-[7rem] w-[20px] h-[25px]" />
            <div className="mr-5">
              {" "}
              <Location className=" absolute right-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:ml-0 ml-3  md:items-center w-full overflow-hidden  ">
        <div className="md:px-4 lg:px-8 px-3 ">
          <img
            src="/assets/ZTFR.png"
            alt="ZiTransfer-Logo"
            className="lg:w-[274px] md:w-[180px] w-[150px] "
          />
        </div>

        <div className="grid grid-cols-2 md:mt-0 mt-5 space-y-2 md:grid-cols-2 lg:grid-cols-3 flex-1 lg:gap-2 gap-2 lg:space-y-1 3xl:gap-2 3xl:space-y-4">
          {countriesData.map((country) => (
            <div
              key={country.id}
              className="flex items-center space-x-3 hover:scale-105 transition duration-150 cursor-pointer group"
              onClick={() => handleCountryClick(country.value)}
            >
              <div className="w-[35px] lg:w-[45px] 3xl:w-[80px] relative">
                <img
                  src={country.country_flag}
                  alt={country.country_name}
                  className="object-fill"
                />
              </div>
              <div className="3xl:space-y-1">
                <p
                  value={country.value}
                  className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden"
                >
                  {country.country_name}
                </p>
                <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                  {country.country_language}
                </p>
                <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                  {country.country_language_optional}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[15%]  w-full flex">
        <div className="flex-1 tracking-[1px] flex items-center text-[8px] md:text-[10px] mb-5 ml-5 text-silver">
        {t('footer.zitransfer')}

          {/* ZITRANSFER 2023 */}
          <br />  {t('footer.rights')} &nbsp;{t('footer.partof')}
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
      </div>
    </section>
  );
};

export default Countries;
