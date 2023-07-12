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
import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";

function Calender() {


    const [startDate, setStartDate] = useState(new Date());
    const { min } = useSelector((state) => state.mintue);
    const { hou } = useSelector((state) => state.hour);
    const { day } = useSelector((state) => state.day);
    const { wee } = useSelector((state) => state.week);
    const { mon } = useSelector((state) => state.month);
    const { yea } = useSelector((state) => state.year);
  
  
    // const { value } = useSelector((state) => state.counter);
  // const {min} = useSelector((state) => state.min);
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
  
    const [isOpen, setIsOpen] = useState(true);
    // const [selectedDate, setSelectedDate] = useState(null);
    
    
  
    
    const toggleCalendar = () => {
      setIsOpen(!isOpen);
    };
  
  
    const handleDateChange = date => {
      setSelectedDate(date);
      console.log(date);
      if (date) {
        const selectedDay = date.getDay(); // Get the day (0-6, where 0 represents Sunday)
    
        console.log('Selected Day:', selectedDay);
      }
      if (date) {
        const selectedYear = date.getFullYear();
        const years = selectedYear;
        dispatch(setyear(years)); // Get the year
        console.log('Selected Year:', selectedYear);
      }
      if (date) {
        const selectedMonth = date.getMonth();
        const monn = selectedMonth;
    dispatch(setmonn(monn));
      // Get the month (0-11, where 0 represents January)
        console.log('Selected Month:', selectedMonth);
      }
  
      if (date) {
        console.log('Selected Date:', date.toDateString());
      }
  
       if (date) {
        const selectedDay = date.getDate();
        const value = selectedDay;
    dispatch(setValue(value)); // Get the day of the month (1-31)
        console.log('Selected Day:', selectedDay);
      }
    };
    
    const openCalendar = () => {
      // Code to open the calendar
    
    //  <DatePicker  selected={select} onChange={date=> setselect(date)}
  
   }
   const CustomCalendarIcon = (
      <AiFillClockCircle
        className="text-[#FFFF00]"
        onClick={toggleCalendar}
      />
    );
  
  return (
    <div>
    
    <div className=" grid grid-cols-3 rounded-2xl   bg-black w-[314px] h-[489px]">
    <div className="text-[#FFF000] h-[310px]  ">
      <div className="flex mt-2 ml-3 justify-normal">
        {" "}
        <BiTimeFive className="" />
      </div>

      <div className="flex mt-6 ml-3 uppercase justify-normal">
        <p>mintue</p>
      </div>

      <div className="flex mt-3 ml-3 uppercase justify-normal">
        <p>hour</p>
      </div>
      <div className="flex mt-3 ml-3 uppercase justify-normal">
        <p>day</p>
      </div>
      <div className="flex mt-3 ml-3 uppercase justify-normal">
        <p>week</p>
      </div>
      <div className="flex mt-3 ml-3 uppercase justify-normal">
        <p>months</p>
      </div>
      <div className="flex mt-3 ml-3 uppercase justify-normal">
        <p>year</p>
      </div>
    </div>
    <div className="text-[#FFF000]    col-span-1">
      <div className="flex justify-center mt-2">
        {" "}
        <p className="text-[12px]">Calender</p>
      </div>
      <div className="text-[#fff000] flex justify-end uppercase">
        <p className="text-[#fff000] text-[10px] mt-96 uppercase">
          optional
        </p>
      </div>
    </div>
    <div className="text-[#FFF000]  h-[310px]">
      <div className="flex justify-end mt-2 mr-3">
        {" "}
        <AiOutlineClose className="text-[20px]" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}}/>
      </div>

      <div className="flex justify-end mt-6 mr-3 uppercase">
        <AiOutlineUp className="mt-1 mr-1" 
        onClick={() => dispatch(minin())} />
        {min} 
        <AiOutlineDown className="mt-1 ml-1"  onClick={() => dispatch(minde())} />
      </div>

      <div className="flex justify-end mt-3 mr-3 uppercase">
        <AiOutlineUp
          className="mt-1 mr-1"
          onClick={() => dispatch(houin())}
        />
        {hou}
        <AiOutlineDown
          className="mt-1 ml-1"
          onClick={() => dispatch(houde())}
        />
      </div>
      <div className="flex justify-end mt-3 mr-3 uppercase">
        <AiOutlineUp className="mt-1 mr-1" onClick={() => dispatch(dayin())} /> {day}
        <AiOutlineDown className="mt-1 ml-1"  onClick={() => dispatch(dayde())}/>
      </div>
      <div className="flex justify-end mt-3 mr-3 uppercase">
        <AiOutlineUp className="mt-1 mr-1"  onClick={() => dispatch(weein())}/> {wee}
        <AiOutlineDown className="mt-1 ml-1"  onClick={() => dispatch(weede())}/>
      </div>
      <div className="flex justify-end mt-3 mr-3 uppercase">
        <AiOutlineUp className="mt-1 mr-1"  onClick={() => dispatch(monin())} /> {mon}
        <AiOutlineDown className="mt-1 ml-1"  onClick={() => dispatch(monde())}/>
      </div>
      <div className="flex justify-end mt-3 mr-3 uppercase">
        <AiOutlineUp className="mt-1 mr-1"  onClick={() => dispatch(yeain())}/> {yea}
        <AiOutlineDown className="mt-1 ml-1"  onClick={() => dispatch(yeade)}/>
      </div>
      <div className="flex justify-end mt-40 text-white uppercase ">
        <GrCheckmark className="text-[#fff000] text-[50px]  uppercase" />
      </div>
    </div>
    <div className="absolute translate-x-20 translate-y-80">
    <div className="flex " > 
    
{isOpen && (
<DatePicker
className="absolute translate-x-40 translate-y-2 text-[#FFFF00]"
selected={selectedDate}
onChange={handleDateChange}
customInput={CustomCalendarIcon}
dateFormat="yyyy/MM/dd"       
showPopperArrow={false}   
onClickOutside={toggleCalendar}
/>
)}

      </div>
      <p className="text-[#fff000]  text-[14px] uppercase ">
        pick from calendar
      </p>
    </div>
    <div className="absolute translate-y-96 translate-x-28">
      <AiTwotoneLock className="absolute text-[#fff000] -translate-x-8 translate-y-1" />
      <p className="text-[#fff000]  text-[14px] uppercase ">
        set password
      </p>
    </div>
    
 <div className="flex justify-end   w-[310px] text-[#fff000] ">
 
 <img src="../assets/yellowmark.png" className="absolute p-2 py-3 -translate-y-20" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}}/>
 
 
 </div>
  </div>
    
    </div>
  )
}

export default Calender