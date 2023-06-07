import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "sliceRedbus",
  initialState: {
    isUserSignedIn: JSON.parse(localStorage.getItem("isUserSignedIn")) || false,
    isAdminSignedIn:
      JSON.parse(localStorage.getItem("isAdminSignedIn")) || false,
    logData: JSON.parse(localStorage.getItem("logData")) || {},
    allBusData: JSON.parse(localStorage.getItem("allBuses")) || [],
    // cart: [],
    // wishlist: [],
  },
  reducers: {
    signInUser: (state, action) => {
      state.isUserSignedIn = action.payload;
    },
    signInAdmin: (state, action) => {
      state.isAdminSignedIn = action.payload;
    },
    logDetails: (state, action) => {
      state.logData = action.payload;
    },
    addBus: (state, action) => {
      state.allBusData.push(action.payload);
    },
  },
});

export const { signInUser, signInAdmin, logDetails, addBus } =
  stateSlice.actions;
export default stateSlice.reducer;
