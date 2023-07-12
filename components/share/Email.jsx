import React, { useState } from "react";

import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
// import DatePicker from "react-datepicker";

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
// import "react-datepicker/dist/react-datepicker.css";
import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";

function Email() {
  const dispatch = useDispatch();
  return (
    <div className="">
    <div className="  rounded-2x1   bg-black w-[314px] h-[489px]">
    <div className="text-[#FFF000]    ">
      <div className="flex mt-7 justify-left ">
        <AiOutlineMail className="mt-3 ml-2 mr-28" />
        <p className="text-[#fff000] mt-3">email</p>
        <AiOutlineClose className="mt-3 ml-28" />
      </div>
      <div className="mt-14">
        <div className=" w-60 ml-8 caret-[#fff000] duration-300 transform bg-transparent border-b-2 focus-within:border-[#FFFF00]">
          <input
            type="email"
            placeholder="Email TO "
            className="w-full placeholder:text-[#fff000] caret-[#fff000] bg-transparent text-[#FFFF00] border-none outline-[#fff000] focus:outline-[#fff000]"
          />
        </div>

        <div className="w-60  ml-8 mt-16 duration-300 transform border-b-2 focus-within:border-[#FFFF00]">
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="w-full  placeholder:text-[#fff000] bg-transparent text-[#FFFF00] border-none outline-[#fff000]  focus:outline-[#fff000]"
          />
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-center mt-24  h-[21px]  w-[310px] text-[#fff000] ">
        <BiTimeFive className="m-1 " />
        <p className="text-[#fff000]  text-[14px]  uppercase  ">
          set password
        </p>
        </div>
        <div className="  flex justify-center h-[21px ]   w-[310px]">
        <p className="text-[#fff000]  text-[10px] ml-28  uppercase mt-0 ">
          optional
        </p>
        </div>
      
 <div className="flex justify-end mt-3  w-[310px] text-[#fff000] ">
 
 <img src="../assets/yellowmark.png" className=" mt-11" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.verit))}}/>
 
 
 </div> 
    </div>
  </div>
    
    </div>
  )
}

export default Email