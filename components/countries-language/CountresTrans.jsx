/* eslint-disable @next/next/no-img-element */
import React from "react";
import Location from "../Location";
import { RiAccountCircleLine } from "react-icons/ri";
import { countriesData } from "@/lib/constants";

const CountresTrans = () => {
  return (
    <div>
      <div className="relative">
      <div className="bg-[#ffff00] h-[100vh] w-full flex-col justify-center items-center ">
      
      <div className="h-[20%] w-full flex">
       
        <div className="flex-1 flex-row flex justify-end items-center"> 
        <div className=' relative h-full flex items-center'>
        <RiAccountCircleLine className='absolute right-[7rem] w-[20px] h-[25px]'/> 
        <div className='mr-5'> <Location className=' absolute right-2'/> 
        </div>
        </div>
         </div>
      </div>

      <div className="h-[60%] w-full  flex justify-center items-center">
        
        <div className="flex-1  h-full relative flex flex-col justify-center items-center">
         <div className='' >

            <img
              src='/assets/ZTFR.png'
              alt=""
              className=" w-[274px]   "
              />
              </div>
         
         
         
        </div>
        
      </div>

      <div className="h-[20%] w-full flex">
        <div className="flex-1 tracking-[1px] flex items-end text-[10px] mb-5 ml-5 text-silver">
          ZITRANSFER 2023
          <br /> ALL RIGHTS RESERVED &nbsp; ZITRANSFER IS PART OF THE ZINO
          GROUP
        </div>

        <div className="flex-1 tracking-[.5px] flex items-end text-[10px] mb-5 mr-5 text-silver">
          |@ ZITRANSFER USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO
          PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.
        </div>
      </div>
    </div>
      </div>
      <div className=" absolute w-full h-screen bg-black bg-opacity-80 top-0">
        <section className="min-h-screen  h-screen ">
          <div className="h-[15%] w-full flex text-white  items-center">
            <div className=" tracking-[2px]  items-center ml-5">
              <p className="text-[16px] ">Choose Your Country or Region</p>
              <p className=" text-[16px] italic">LANGUAGE</p>
            </div>
          </div>
          <div className="flex items-center w-full overflow-hidden  ">
            <div className="px-8">
              {/* <img
                src="/assets/ZTFR.png"
                alt="ZiTransfer-Logo"
                className="w-[274px]"
              /> */}
            </div>
            <div className=" lg:ml-[15%] text-white grid  gridc-cols-1 space-y-2  md:grid-cols-2  lg:grid-cols-3 flex-1  lg:gap-2  lg:space-y-1 3xl:gap-2 3xl:space-y-4">
              {countriesData.map((country) => (
                <>
                  <div className=" flex  items-center space-x-3 hover:scale-105 transition duration-150 cursor-pointer group ">
                    <div className="w-[35px] lg:w-[45px] 3xl:w-[80px] relative">
                      <img
                        src={country?.country_flag}
                        alt={country?.country_name}
                        className=" object-fill"
                      />
                    </div>
                    <div className="3xl:space-y-1">
                      <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                        {country?.country_name}
                      </p>
                        <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                        {country?.country_language}
                      </p>
                      <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                        {country?.country_language_optional}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default CountresTrans;
