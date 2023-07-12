import React, { useState } from "react";
import Screen7 from "./share/MainShare";
import { BiTimeFive, BiVerticalBottom } from "react-icons/bi";
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

import { BsQrCode } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import SideBar from "./SideBar";
import FirstPage from "./FirstPage";
import ShareModalMapping from "./modals/ShareModalMapping";
import Modal from "./modals/ModalMapping";
import SidebarMapping from "./modals/SidebarMapping";

function Hero() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (componentNumber) => {
    setActiveComponent(componentNumber);
  };
  return (
    <div>
      <div className="bg-[#FFFF00]   h-max">
        <div className="grid lg:h-screen sm:h-screen lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center mr-4 ">
          
          </div>

          <div className="grid col-span-2 justify-items-center ">
            <div className="flex flex-col items-center justify-center mr-4 ">
              <ShareModalMapping/>
            </div>
          </div>
          
          <div className="absolute left-[20%]    -bottom-[220%]  rounded-md lg:flex-col lg:items-center lg:justify-center lg:flex sm:static sm:float-left sm:ml-0 sm:mt-28 sm:mr-auto sm:mb-auto">
            <div className="">
            <Modal/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
