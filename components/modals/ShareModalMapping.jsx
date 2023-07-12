/* eslint-disable @next/next/no-img-element */
import { shareModal  } from "@/lib/constants";
import { useSelector } from "react-redux";
import Screen7 from "../share/MainShare";
import MainShare from "../share/MainShare";


const ShareModalMapping  = () => {
  const sharing = useSelector((state) => state?.modals?.sharingModal); // Get the current modal from the Redux store

  if (sharing === shareModal.sharing) return  <MainShare/>
  
   //<SHARE MODAL WALA COMPONENT />; // Render the NewMeeting component if the current modal is "newMeetings"
 
  
  return null; // Return null if the current modal doesn't match any of the specified modal types
};

export default ShareModalMapping;
