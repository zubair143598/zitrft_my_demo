
const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "mintue",
  name: "hour",
  name: "day",
  name: "week",
  name: "month",
  name: "year",
  

  initialState: {
    min: "00",
    hou: "00",
    day: "00",
    wee: "00",
    mon: "00",
    yea: "00",
  },
  reducers: {
    minin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.min = state.value
      
      if (state.min === 60) {
        if (state.hou === "00") {
          state.hou = 0;
        }
        state.hou += 1;
        state.min = 0;
      }

      if (state.min === "00") {
        state.min = 0;
      }
      state.min += 1;
    },
    minde: (state) => {
      if (state.min >= 1) {
        state.min -= 1;
      }
    },
    houin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      if (state.hou === "00") {
        state.hou = 0;
      }

      if (state.hou === 24) {
        state.hou = 0;
        state.day = 1;
      }

      state.hou += 1;
    },
    houde: (state) => {
      if (state.hon >= 1) {
        state.hon -= 1;
      }
    },
    dayin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      if (state.day === 7) {
        state.day = 0;
        state.wee += 1;
      }
      if (state.day === "00") {
        state.day = 0;
      }

      state.day += 1;
    },
    dayde: (state) => {
      if (state.day >= 1) {
        state.day -= 1;
      }
    },
    weein: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.wee === "00") {
        state.wee = 0;
      }
      if (state.wee === 4) {
        state.mon += 1;
        state.wee = 0;
      }

      state.wee += 1;
    },
    weede: (state) => {
      if (state.wee >= 1) {
        state.wee -= 1;
      }
    },
    monin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.mon === "00") {
        state.mon = 0;
      }
      if (state.mon === 12) {
        state.mon = 0;

        state.yea += 1;
      }

      state.mon += 1;
    },
    monde: (state) => {
      if (state.mon >= 1) {
        state.mon -= 1;
      }
    },
    yeain: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.yea === 2026) {
        state.yea = 2000;
      }
      if (state.yea === "00") {
        state.yea = 0;
      }
      state.yea += 1;
    },
    yeade: (state) => {
      if (state.yea >= 1) {
        state.yea -= 1;
      }
    },

    setValue: (state, action) => {
      state.value = action.payload;
      state.day = state.value;
    },
    
    setmonn: (state, action) => {
      state.monn = action.payload;
      state.mon = state.monn;
    },
    setyear: (state, action) => {
      state.years = action.payload;
      state.yea = state.years;
    },
  },
});

export const {
  setyear,
  setmonn,
  setValue,
  minin,
  minde,
  houde,
  houin,
  dayin,
  dayde,
  weein,
  weede,
  monde,
  monin,
  yeain,
  yeade,
} = counterSlice.actions;

export default counterSlice.reducer;
