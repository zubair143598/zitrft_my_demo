/* eslint-disable @next/next/no-img-element */
import { modalsTab, shareIconsModals } from "@/lib/constants";
import { useSelector } from "react-redux";
import Expires from "../share/Expires";
import Calender from "../share/Calender";
import Email from "../share/Email";
import Verit from "../share/Verit";
import Copy from "../share/Copy";
import WhatsApp from "../share/WhatsApp";
import GetAQRCode from "../share/GetAQRCode";
import Message from "../share/Message";
import Facebook from "../share/Facebook";
import Twitter from "../share/Twitter";


const Modal = () => {
  const currentModal = useSelector((state) => state?.modals?.nestedModal); // Get the current modal from the Redux store

  if (currentModal === shareIconsModals.ExpiresIn) return <Expires/>
  if (currentModal === shareIconsModals.schduleTransfer) return <Calender/>
  if (currentModal === shareIconsModals.email) return <Email/>
  if (currentModal === shareIconsModals.verit) return <Verit/>
  if (currentModal === shareIconsModals.getALink) return <Copy/>
  if (currentModal === shareIconsModals.whatsapp) return <WhatsApp/>
  if (currentModal === shareIconsModals.getAQRCode) return <GetAQRCode/>
  if (currentModal === shareIconsModals.messages) return <Message/>
  if (currentModal === shareIconsModals.facebook) return <Facebook/>
  if (currentModal === shareIconsModals.twitter) return <Twitter/>
   //<SHARE MODAL WALA COMPONENT />; // Render the NewMeeting component if the current modal is "newMeetings"
 
  
  return null; // Return null if the current modal doesn't match any of the specified modal types
};

export default Modal;
