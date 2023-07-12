/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useDispatch} from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import ShareModal from '../modals/shareModal/ShareModal';
import ShareModalHeader from '../modals/shareModal/ShareModalHeader';
import ShareModalHeaderImage from '../modals/shareModal/ShareModalHeaderImage';

import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";
const Message= () => {
    const dispatch = useDispatch()
    const shareableUrl = "https://example.com";
    const title = "Check out this!";
 const handleClickForMessage = () => {
    const messageBody = `${title} " "  ${shareableUrl}`;

    const smsUri = `sms:?body=${encodeURIComponent(messageBody)}`;
    window.location.href = smsUri;
};

  return (
    <ShareModal>
<div className="text-yellow flex flex-col justify-between items-center ">
    <ShareModalHeader>
    <ShareModalHeaderImage>
        <button>
        <img src="../assets/Messages.png" width="20px" /></button>
                            </ShareModalHeaderImage>
                        <div className="leading-3"><p className="text-yellow uppercase text-[12px] flex items-center tracking-[2px]">Messages</p></div>

                        <button className="flex items-end right-0 "><AiOutlineClose className=" w-15" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} /></button>

    </ShareModalHeader>
    <div className="mt-20 flex justify-center"onClick={handleClickForMessage}>
                            <button className="flex gap-4 items-center px-2 py-2  flex-col">
                                    <img src="../assets/Messages.png" width="148px" height="148px"
                                    />
                            <div className="mt-1 leading-3 w-auto opacity-50"><p className="text-[14px] text-yellow tracking-[2px] text-center ">Mobile Device</p></div>
                            </button>
                    </div>
</div>
    </ShareModal>
  )
}

export default Message
