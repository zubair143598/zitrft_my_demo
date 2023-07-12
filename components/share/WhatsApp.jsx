/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import ShareModal from '../modals/shareModal/ShareModal';
import { getWhatsAppUrl } from "@phntms/react-share"
import ShareModalHeader from '../modals/shareModal/ShareModalHeader';
import ShareModalHeaderImage from '../modals/shareModal/ShareModalHeaderImage';

import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";
const WhatsApp = () => {
    const dispatch = useDispatch()
 const url = "https://example.com";
 const title = "Check out this!";
 const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClickForWhatsapp = () => {
    if (isMobile) {
      const shareableUrl = `whatsapp://send?text=${encodeURIComponent(
        `${title} - ${url}`
      )}`;
      window.location.href = shareableUrl;
    } else {
      const webShareableUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(`${title} " "  ${url}`)}`;
      window.open(webShareableUrl, "_blank");
    }
  };
  return (
    <ShareModal>
<div className="text-yellow">
    <ShareModalHeader>
    <ShareModalHeaderImage>
        <button>
                        <img src="../assets/WhatsApp.png" className="w-[20px]  " /></button>
                            </ShareModalHeaderImage>
                        <div className="leading-3"><p className="text-yellow uppercase text-[12px] flex items-center tracking-[2px]">Whatsapp</p></div>

                        <button className="flex items-end right-0 "><AiOutlineClose className=" w-15" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} /></button>

    </ShareModalHeader>
    <div className="mt-24 flex justify-center" onClick={handleClickForWhatsapp}>
                            <button className="flex gap-4 items-center px-2 py-2">
                                <div id="icon" className="w-[148px] h-[149px]">
                                    <img src="../assets/WhatsApp.png" width="100%" height="100%"
                                    />
                                </div>
                            </button>
                    </div>
</div>
    </ShareModal>
  )
}

export default WhatsApp
