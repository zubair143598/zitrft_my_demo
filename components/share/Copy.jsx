/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { AiFillSchedule } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import { AiFillClockCircle } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
// import DatePicker from 'react-datepicker';
import { minin,minde,houde,houin,dayin,dayde,weein,weede,monde,monin,yeain,yeade } from "@/src/store/features/counterSlice";
import { setValue ,setmonn , setyear} from '@/src/store/features/counterSlice';

import { BsQrCode } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
// import { AiFillClockCircle } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

function Email() {
  return (
    <div>
    <div className="  rounded-2xl   bg-black w-[314px] h-[489px]">
          <div className="text-[#FFF000]   ">
            <div className="flex mt-3 justify-center m-1  h-[35px]">
              <AiOutlineMail className="mt-3 mr-20" />
              <p className="text-[#fff000] uppercase text-[12px] mt-3">
                Get a link
              </p>
              <AiOutlineClose className="mt-3 ml-16" />
            </div>
            <div className="flex justify-center mt-4">
           <p className=""> Revision Files</p>
            </div>
            <div className="flex justify-center mt-5">
              {" "}
              <p> https://zitransfer-gR4kUXAwKd</p>
            </div>
          </div>
          <div className="flex justify-center mt-4 ml-8 w-60">
          <p  className="text-[#fff000] text-[10px]">COPY YOUR DOWNLOAD LINK</p>
          </div>
          <div className="flex justify-center mt-4  h-[5px] w-[310px] text-[#fff000] ">
        
          <p className="text-[#fff000]  text-[14px]  uppercase  ">
            COPY link
          </p>
          <BiTimeFive className="m-1 " />
        </div>
       <div>
            <div className="flex justify-center mt-24  h-[17px] w-[310px] text-[#fff000] ">
              <AiTwotoneLock className="m-1 " />
              <p className="text-[#fff000]  text-[14px]  uppercase  ">
                set password
              </p>
             
            </div>
            <div className="flex justify-center">
            <p className="text-[#fff000]  text-[7px]  ml-20 uppercase mt-2 ">
            optional
          </p>
            </div>
            <div className="flex justify-center mt-4  h-[150px] w-[310px] text-[#fff000] ">
        
            <p className="text-[#fff000]  text-[14px]  mt-32 mr-32 uppercase  ">
            SEND ANOTHER?
            </p>
            <img src="../assets/yellowmark.png" className="mt-32 "/>
            
          </div>
                     </div>
        </div>
    
    </div>
  )
}

export default Email