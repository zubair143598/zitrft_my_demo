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
import { shareIconsModals } from "@/lib/constants";
import { changeNestedModal } from "@/src/store/features/modalSlice";

function Verit() {
  const dispatch = useDispatch();
  return (
    <div>
    <div className="  rounded-2xl   bg-black w-[314px] h-[489px]">
    <div className="text-[#FFF000]   ">
      <div className="flex mt-3 justify-center m-1  h-[35px]">
        <AiOutlineMail className="mt-3 mr-20"  />
        <p className="text-[#fff000] uppercase text-[12px] mt-3">
          verify your email
        </p>
        <AiOutlineClose className="mt-3 ml-16" />
      </div>
      <div className="flex justify-center mt-4">
        <img src="../assets/lockk.png" />
      </div>
      <div className="flex justify-center mt-5">
        {" "}
        <p> CONFIRM YOUR EMAIL</p>
      </div>
    </div>
    <div className="w-60  ml-8 mt-16 duration-300 transform border-b-2 focus-within:border-[#FFFF00]">
      <input
        type="text"
        placeholder="ENTER ZVC CODE"
        className="w-full  placeholder:text-[#fff000] placeholder:m-7 h-14 bg-transparent text-[#FFFF00] border-none outline-[#fff000]  focus:outline-[#fff000]"
      />
    </div>
    <div className="flex justify-center mt-5">
      {" "}
      <p className="text-[#fff000] text-[10px] ">
        {" "}
        DIDN T RECEIVE AN EMAIL?
      </p>
    </div>
    <div className="flex justify-center mt-5 ">
    {" "}
    <pre className="text-[#fff000] text-[10px] ">
      {" "}WE VE SENT A VERIFICATION CODE (ZVC)<br/>
      <span className="ml-9">TO [EMAIL@GMAIL.COM]</span><br/>
    <span className="ml-1">  TO MAKE SURE YOU RE REALLY YOU</span>
    </pre>
    
  </div>
  <div className="flex justify-center mt-5">
      {" "}
      <p className="text-[#fff000] text-[10px] ">
        {" "}
        REMEMBER TO CHECK YOUR SPAM FOLDER
      </p>
    </div>
    <div className="flex justify-end mr-4 mt-5 text-[#fff000] text-[34px]">
    {" "}
    <img src="../assets/yellowmark.png" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} />
  </div>

    <div>
      
    </div>
  </div>
    
    </div>
  )
}

export default Verit