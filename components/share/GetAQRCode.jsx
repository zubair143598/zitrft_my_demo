/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";
import { AiOutlineClose } from "react-icons/ai";
import {BsQrCode } from "react-icons/bs"
import { MdOutlineContentCopy } from "react-icons/md"
import { saveAs } from "file-saver";
import QRCode from "qrcode";
import ShareModal from "../modals/shareModal/ShareModal";
import ShareModalHeader from "../modals/shareModal/ShareModalHeader";
import ShareModalHeaderImage from "../modals/shareModal/ShareModalHeaderImage";

const GetAQRCode = () => {
  const dispatch = useDispatch();
  //place below link in a component where this component is rendered
  const qrCodeValue = "https://example.com/qr-code";
  const [qrCodeImageSrc, setQrCodeImageSrc] = useState("");

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const canvas = document.createElement("canvas");
        const qrImageSpecifications = {
          width: 175,
          height: 175,
          color: {
            dark: "#FFFFFF", // Set the dark color (foreground color)
            light: "#000000", // Set the light color (background color)
          },
        };
        await QRCode.toCanvas(canvas, qrCodeValue, qrImageSpecifications);
  
        const qrCodeImage = canvas.toDataURL();
        setQrCodeImageSrc(qrCodeImage);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };
  
    generateQRCode();
  }, [qrCodeValue]);
const handleDownloadClick = async () => {
    try {
        const canvas = document.createElement("canvas");
        await QRCode.toCanvas(canvas, qrCodeValue, { width: 175, height: 175 });

        canvas.toBlob((blob) => {
            saveAs(blob, "qr-code.png");
        });
    } catch (error) {
        console.error("Error downloading QR code:", error);
    }
};

const handleCopyLinkClick = () => {
    // Generate link or handle copy link logic here
    const link = "https://example.com/qr-code";
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
};
  return (
    <ShareModal>
      <div className="text-yellow  flex flex-col justify-center items-center">
      <ShareModalHeader>
      <button className="flex  items-start left-0  border-yellow border-[1px] rounded-sm p-[1px]">
                            <BsQrCode className=" w-17 text-black bg-white " />
                        </button>
                        <div className="leading-3"><p className="text-yellow uppercase text-[12px] flex items-center tracking-[2px]">Get a QR CODE</p></div>
    

                        <button className="flex items-end right-0 "><AiOutlineClose className=" w-15" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} /></button>

    </ShareModalHeader>

    <div className="mt-8 3xl:mt-4 flex justify-center p-1 items-center bg-black rounded-xl border-[2.5px] border-yellow w-[195px] h-[195px] 3xl:w-[218px] 3xl:h-[218px] ">
                        <img src={qrCodeImageSrc} alt="QR Code" width="100%" height="100%" className="rounded-xl"/>
                        
                    </div>


                    <div className="mt-3 flex justify-center flex-col">
                        <button className="capitalize tracking-[2px] text-[12px]  ">Revision files</button>
                        <div className="flex items-center justify-between gap-4 mt-6 leading-3 " onClick={handleDownloadClick}>
                            <button  className="uppercase text-[14px] tracking-[2px]">Download</button>
                            <button ><img src="../assets/Download Icon Y.png"  width="15px" height="15px"/></button>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-4 leading-3 " onClick={handleCopyLinkClick} >
                            <button className=" text-[14px]  uppercase tracking-[2px]">Copy Link</button>
                            <button ><MdOutlineContentCopy className="w-15 h-15" /></button>
                        </div>
                        {/* <div className="flex items-center justify-between gap-4 mt-4 leading-3 w-128 h-19" onClick={handleCopyLinkClick} >
                            <button><img src="../assets/Copy Link Y.png" className=" w-[128px] 3xl:h-[19px]"  alt="" /></button>
                        </div> */}


                    </div>

                    <div className="flex flex-col mt-2  justify-center w-[150px] ">
                    <div className="flex gap-2 justify-between items-center mt-4 w-[160px]   text-yellow ">
                        <img src="../assets/SecurityLockY.png"  width="13px" height="15px"/>
                        <button className="text-yellow  text-[14px]  uppercase tracking-[2px] ">
                            set password
                        </button>
                    </div>
                    <div className="  flex items-end mt-2 justify-end w-[160px]">
                        <p className="text-yellow flex text-[10px] uppercase tracking-[2px] opacity-50">
                            optional
                        </p>
                    </div>
                    
                    </div>
                    <div className=" flex items-end mr-5 -mt-7 justify-end  w-full text-yellow " onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} >

<img src="../assets/yellowmark.png" className="pb-10
" />
</div>
      </div>
    </ShareModal>
  )
}

export default GetAQRCode
