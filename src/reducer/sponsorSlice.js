import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sponsors: [],
};
const sponsorSlice = createSlice({
  name: "sponsors",
  initialState,
  reducers: {
    setStoreReduxSponsors: (state, action) => {
      state.sponsors = action.payload;
    },
  },
});
export const { setStoreReduxSponsors } = sponsorSlice.actions;
export default sponsorSlice.reducer;
