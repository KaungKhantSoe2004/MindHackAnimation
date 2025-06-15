import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  events: [],
};
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setStoreReduxEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});
export const { setStoreReduxEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
