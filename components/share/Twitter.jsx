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
const Twitter= () => {
    const dispatch = useDispatch()
    const shareableUrl = "https://example.com";
    const title = "Check out this!";
    const handleClickForTwitter = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareableUrl
        )}&text=${encodeURIComponent(title)}`;
        window.open(url, "_blank")
    };

  return (
    <ShareModal>
<div className="text-yellow flex flex-col justify-between items-center ">
    <ShareModalHeader>
    <ShareModalHeaderImage>
        <button>
        <img src="../assets/Twitter.svg" width="20px" height="17px"/></button>
                            </ShareModalHeaderImage>
                        <div className="leading-3"><p className="text-yellow uppercase text-[12px] flex items-center tracking-[2px]">Twitter</p></div>

                        <button className="flex items-end right-0 "><AiOutlineClose className=" w-15" onClick={()=> {dispatch(changeNestedModal(shareIconsModals.defaultIcon))}} /></button>

    </ShareModalHeader>
    <div className="mt-20 flex justify-center"  onClick={handleClickForTwitter}>
                            <button className="flex gap-4 items-center px-2 py-2 flex-col">
                                <div id="icon" className="w-[183px] h-[149px]">
                                    <img src="../assets/Twitter.svg" width="100%" height="100%"
                                    />
                                </div>
                            </button>
                    </div>
</div>
    </ShareModal>
  )
}

export default Twitter
