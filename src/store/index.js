import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import metadata from "./features/metadata";
import modalSlice from "./features/modalSlice";
import fileSlice from "./features/fileSlice";

const store = configureStore({
  // reducers here
  reducer: {
    mintue: counterSlice,
    hour: counterSlice,
    day: counterSlice,
    week: counterSlice,
    month: counterSlice,
    year: counterSlice,
    meta: metadata,
    modals: modalSlice,
    files: fileSlice,
  },
});

export default store;
