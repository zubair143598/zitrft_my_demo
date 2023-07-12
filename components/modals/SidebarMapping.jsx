import { sidebarTab } from "@/lib/constants";
import { useSelector } from "react-redux";

import Sidebar from "../sidebar/Sidebar";
import GetLink from "../get-link/GetLink";

const SidebarMapping = () => {
  const sidebarModalTab = useSelector((state) => state?.modals?.sidebar); // Get the current modal from the Redux store

  if (sidebarModalTab === sidebarTab.sidebar) return <Sidebar />;
  if (sidebarModalTab === sidebarTab.getLink) return <GetLink />;

  return null; // Return null if the current modal doesn't match any of the specified modal types
};

export default SidebarMapping;
