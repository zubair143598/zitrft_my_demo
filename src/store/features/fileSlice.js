import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "files",
  initialState: {
    filesList: [],
  },

  reducers: {
    addFile: (state, action) => {
      // Check if the action and payload exist
      if (action && action.payload) {
        const fileNames = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        state.filesList = [...state.filesList, ...fileNames]; // Add the file names to the fileList array in the state
      }
    },
  },
});

export const { addFile } = fileSlice.actions;
export default fileSlice.reducer;
