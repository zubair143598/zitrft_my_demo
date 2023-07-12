/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import { BsQrCode } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { changeCurrentModal, changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";
import Draggable from "../common/Draggable";


function MainShare() {
  const dispatch = useDispatch();
  return (
    <Draggable>
      <div className="bg-[#FFFF00]    min-h-screen">
        <div className="grid lg:h-screen sm:h-screen lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
          
          <div className="grid col-span-2 justify-items-center ">
          <div className="flex flex-col items-center justify-center mr-4 ">
          <div className="bg-black w-[922px] lg:w-[635px] lg:h-[600px] sm:w-[300px] sm:h-1/2 md:w-[200px]   container h-[648px] lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-4 rounded-md ">
            <div className="relative ">
              <div className="m-6 ">
                <div className=" absolute bg-[#FFFF00] h-[520px]  w-[2px]  translate-x-44 translate-y-9 "></div>
      
                <img src="../../assets/hodot.png" />
      
                <div className="flex justify-left mt-4  h-[5px] w-[310px] text-[#fff000] ">
                  <p className="text-[#fff000]  text-[12px]  uppercase  ">
                    title
                  </p>
                  <CiEdit className="m-1 ml-3 " />
                </div>
                <div>
                  <p className=" text-[#FFFF00] text-[14px] mt-5 ">
                    {" "}
                    Revsion file
                  </p>
                </div>
                <div className="mt-6">
                  <div>
                    <p className=" mt-9 text-[11px] text-[#FFFF00] ">
                      {" "}
                      image.png
                    </p>
                    <p className="text-[#FFFF00] mt-1 text-[10px]">
                      {" "}
                      3mb - jpg
                    </p>
      
                    <p className=" mt-2 text-[11px] text-[#FFFF00] ">
                      {" "}
                      diaty.doc
                    </p>
                    <p className="text-[#FFFF00] mt-1 text-[10px]">
                      {" "}
                      35kb - doc
                    </p>
      
                    <p className=" mt-2 text-[11px] text-[#FFFF00] ">
                      {" "}
                      id.png
                    </p>
                    <p className="text-[#FFFF00] mt-1 text-[10px]">
                      {" "}
                      3mb - png
                    </p>
      
                    <p className=" mt-2 text-[11px] text-[#FFFF00] ">
                      {" "}
                      assgnment
                    </p>
                    <p className="text-[#FFFF00] mt-1 text-[10px]">
                      {" "}
                      folder - 50item - 2.8gb
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="flex items-center mt-6 bg-black"  >
                <div className="flex justify-end w-1/4">
                  <img src="../../assets/AddIconYellow.png" />
                </div>
                <div className="px-4 bg-black">
                  <h2 className="text-[#ffff00] text-[14px] uppercase">
                    upload files
                  </h2>
                  <p className="text-[#ffff00] text-[40px]">OR</p>
                  <h2 className="text-[#ffff00] text-[13px] uppercase ml-4">
                    select a folder
                  </h2>
                </div>
              </div>
              <div className="ml-1 w-[190px] h-[86px] ">
                <div className="flex justify-left mt-4  h-[5px] w-[310px] text-[#fff000] ">
                  <p className="text-[#fff000]  text-[12px]  uppercase  ">
                    note
                  </p>
                  <CiEdit className="ml-3 " />
                </div>
                <div className="mt-7">
                  <p className="text-[#FFFF00] ml-1 text-[12px] mt-1">
                    Hi, just thought you may want to have these to hand.
                    Good luck. See you soon. Jessica x
                  </p>
                </div>
              </div>
            </div>
       
            <div className="grid ">
              <div className="">
                <div className="mt-14">
                  <p className="flex flex-1 text-[#FFFF00]    "onClick={()=> {dispatch(changeNestedModal(shareIconsModals.ExpiresIn))}}>
                    {" "}
                    <AiFillClockCircle className="mr-4 " />{" "}
                    <span className="text-[12px]  ">Expires in</span>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-20 w-[30px] h-[22px]"
                    />
                  </p>
                  <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>{" "}
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 text-[#FFFF00] text-[14px]   "onClick={()=> {dispatch(changeNestedModal(shareIconsModals.schduleTransfer))}}>
                    {" "}
                    <img
                      src="../../assets/Calendar Icon B.svg"
                      className=" w-[16px] fill-[#FFFF00] ml-2"
                    />{" "}
                    <p className="text-[12px]  ">SCHEDULE TRANSFER</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-2 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className=" h-[40px] mt-4">
                
                  <div className="flex flex-1 text-[#FFFF00] text-[14px]   " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.email))}}>
                    {" "}
                    <img src="../../assets/Email.svg" className="mr-5 w-[20px]"/>{" "}
                    <p className="text-[12px] uppercase  ">Email</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-24 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 text-[#FFFF00] text-[14px]   "onClick={()=> {dispatch(changeNestedModal(shareIconsModals.getALink))}}>
                    {" "}
                    <AiOutlineLink className="mr-6 " />{" "}
                    <p className="text-[12px]   uppercase"> get a link</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-14 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 mb-[8px] text-[#FFFF00] text-[14px] items-center  " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.getAQRCode))}}>
                    {" "}
                    <img src="../../assets/QR Icon large.svg" className="mr-4 w-[19px] border-2 border-yellow rounded-sm"/>
                    <p className="text-[12px] tracking-[2px] uppercase ">get a qr code</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-4 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  {/* <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div> */}
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 mb-[12px] text-[#FFFF00] text-[14px] items-center  " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.whatsapp))}}>
                    {" "}
                    <img src="../../assets/Whatsapp.png" className="mr-4 w-[19px]"/>
                    <p className="text-[12px]   uppercase">whatsapp</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-16 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  {/* <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div> */}
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 text-[#FFFF00] text-[14px]  items-center "onClick={()=> {dispatch(changeNestedModal(shareIconsModals.messages))}}>
                    {" "}
                    <img src="/assets/Messages.png" className=" w-[20px]  mr-3"/>
                    <p className="text-[12px]  uppercase tracking-[2px] ">messages</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-14 w-[30px] h-[22px]"
                    />
                  </div>
                  
                  <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 mb-[10px] items-center text-[#FFFF00] text-[14px]   " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.facebook))}}>
                    {" "}
                    <img src="/assets/Facebook.png" className="mr-5 w-[10px]"/>{" "}
                    <p className="text-[12px]  uppercase tracking-[2px]  ">Facebook</p>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-14 w-[30px] h-[22px] "
                    />
                  </div>
                  
                  {/* <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div> */}
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                <div className="  h-[40px] mt-4">
                
                  <div className="flex flex-1 items-center mb-[10px] text-[#FFFF00] text-[14px]   " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.twitter))}}>
                    {" "}
                    <img src="../../assets/Twitter.png" className="mr-3 w-[22px]"/>
                    {" "}
                    <span className="text-[12px] tracking-[2px]  uppercase">twitter</span>{" "}
                    <img
                      src="../../assets/whitemark.png"
                      className="ml-16 w-[30px] h-[22px] "
                    />
                  </div>
                  
                  {/* <div className="w-[203px]  flex  justify-end">
                    <p className="text-[#353533] text-[8px] uppercase">
                      UP TO 365 DAYS
                    </p>
                  </div> */}
                  <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-1 "></div>
                </div>
                {" "}
                <div className="  bg-[#FFFF00] h-[2px]  w-[200px] mt-7 "></div>
                <p className="flex flex-1  justify-center text-[#FFFF00] text-[14px] mt-3  ">
                  {" "}
                  <span className="text-[7px]  uppercase ">
                    Advance encrytion standard Aes 256bits
                  </span>{" "}
                </p>
              </div>
              <div className=" absolute bg-[#FFFF00] h-[520px]  w-[2px]  translate-x-52 translate-y-14 "></div>
            </div>
      
            <div className="">
              <div className="mt-8 ml-3">
                <div className="flex justify-end mt-4 h-[25px] w-[165px] text-[#fff000] ">
                  <AiTwotoneLock />
                </div>
                <div className="flex justify-left mt-1 mb-3  h-[25px] w-[200px] text-[#fff000] ">
                <img
                src="../../assets/Customise Link Y.svg"
                className="w-[30px] mr-1 "
              />
                  <p className="text-[#fff000]  text-[12px]   uppercase  ">
                    assign
                  </p>
                  <img
                  src="../../assets/PIN Icon Y.svg"
                  className="w-[30px] ml-16 "
                />
                </div>
                <div className="  bg-[#FFFF00] h-[2px]  w-[160px]  "></div>
                <div className=" h-[120px] w-[180px] mt-2  ">
                  <p className="text-[#FFFF00] text-[10px]">
                    ASSIGN IS AN EXCLUSIVE FEATURE WHICH ALLOWS THE ASSIGNER
                    TO UPLOAD FILES/FOLDERS AND HAVE THE OPTION TO SPECIFY
                    AND CONTROL WHICH FILES/ FOLDERS THEY WOULD LIKE THE
                    ASSIGNEE TO GAIN ACCESS TO. A UNIQUE 4 DIGIT PIN is
                    provided to the assignee to gain access to the
                    files/folders.
                    <br />
                  </p>
      
                  <div>
                    <p className="text-[10px] mt-2 text-[#FFFF00] ">
                      ONE UPLOAD.
                      <br />
                      <br />
                      MAGNITUDE OF POSSIBILITIES.
                    </p>
                  </div>
                  <p className="flex flex-1 text-[#FFFF00] text-[14px] mt-7  ">
                    {" "}
                    <BiTimeFive className="mr-6 " />{" "}
                    <span className="text-[12px]    mb-1">
                      customise a link
                    </span>{" "}
                  </p>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[160px] mt-2 "></div>
                  <p className="flex flex-1 text-[#FFFF00] text-[14px] mt-7  ">
                    {" "}
                    <AiTwotoneLock className="mr-6 " />{" "}
                    <span className="text-[12px]    mb-1">set passwrd</span>{" "}
                  </p>
                  <div className="  bg-[#FFFF00] h-[2px]  w-[160px] mt-2 "></div>
                  <div className=" flex  justify-end w-[200px] h-[150px]">
                    <p className="text-[#FFFF00] text-[10px] mt-40 m-1 ">
                      ZTFER7867867861
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="absolute left-[20%]    -bottom-[220%]  rounded-md lg:flex-col lg:items-center lg:justify-center lg:flex sm:static sm:float-left sm:ml-0 sm:mt-28 sm:mr-auto sm:mb-auto">
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
      </Draggable>
    
  );
}

export default MainShare;
