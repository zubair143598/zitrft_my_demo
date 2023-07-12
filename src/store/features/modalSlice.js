import ShareModalMapping from "@/components/modals/ShareModalMapping";
import { modalsTab, shareIconsModals,shareModal, sidebarTab } from "@/lib/constants";

import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
  name: "modals",
  initialState: {
    sidebar:sidebarTab.sidebar,
    currentModal: modalsTab.default,
    nestedModal: shareIconsModals.defaultIcon,
    sharingModal: shareModal.defaultModal,
   
  },

  reducers: {
    changeCurrentModal: (state, action) => {
      state.currentModal = action.payload; // Update the currentModal value in the state with the payload data
    },
    changeNestedModal: (state, action) => {
      state.nestedModal = action.payload; // Update the currentModal value in the state with the payload data
    },
    changesharingModal: (state, action) => {
      state.sharingModal = action.payload; // Update the currentModal value in the state with the payload data
    },
    changeSidebar: (state, action) => {
      state.sidebar = action.payload; // Update the currentModal value in the state with the payload data
    },

  },
});

export const { changeCurrentModal, changeNestedModal ,changesharingModal,changeSidebar} = modalSlice.actions;

export default modalSlice.reducer;
