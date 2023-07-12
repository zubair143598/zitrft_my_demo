const { createSlice } = require("@reduxjs/toolkit");

const metadata = createSlice({
  name: "meta",
  initialState: {
    sidebarstate:'off',
    mymetadata:[
        {   
            headerlogo:'assets/ZTFR.png',
            mainlogo:'assets/LETSDOTHIS.png',
            mainlogosub:'assets/MAINLOGOSUBHEADING.png',
        },
        {
            headerlogo:'assets/ZTFR.png',
            mainlogo:'assets/LETSDOTHIS.png',
            mainlogosub:'assets/MAINLOGOSUBHEADING.png',
        }
    ]
  },
  reducers: {
    sidebaropen: (state, action) => {
      state.sidebarstate = action.payload;
    },
    sidebaroff: (state) => {
      state.sidebarstate = state.sidebarstate;
    },
  },
});

export const { sidebaropen, sidebaroff } = metadata.actions;

export default metadata.reducer;
