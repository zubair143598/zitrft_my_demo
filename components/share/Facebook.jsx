/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useDispatch} from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import ShareModal from '../modals/shareModal/ShareModal';
import ShareModalHeader from '../modals/shareModal/ShareModalHeader';
import ShareModalHeaderImage from '../modals/shareModal/ShareModalHeaderImage';
import { FacebookProvider, ShareButton } from 'react-facebook';
import { changeNestedModal } from "@/src/store/features/modalSlice";
import { shareIconsModals } from "@/lib/constants";
const Facebook= () => {
    const dispatch = useDispatch()
    
    const url = "https://example.com";
    const handleClickForFacebook = () => {
        const shareableUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        
          window.open(shareableUrl, "_blank");
      };

  return (
    <ShareModal>
<div className="text-yellow  ">
<ShareModalHeader>
                    <ShareModalHeaderImage>
                        <img src="../assets/Facebook.png" className="w-[11px]  " />
                            </ShareModalHeaderImage>
                        <div className="leading-3"><p className="text-yellow uppercase text-[12px] flex items-center tracking-[2px]">Facebook</p></div>

                        <div className="flex items-end right-0 "><AiOutlineClose className=" w-15" /></div>

                    </ShareModalHeader>
    <div className="mt-20 flex justify-center items-center" onClick={handleClickForFacebook}>
                        
                            <button className="flex gap-4 items-center px-2 py-2flex-col">
                                    <img src="../assets/Facebook.png" width="78px" height="148px"
                                    />
                            </button>
                    </div>
</div>
    </ShareModal>
  )
}

export default Facebook
