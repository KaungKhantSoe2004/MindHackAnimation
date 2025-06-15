import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faqs: [],
};
const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setStoreReduxFaq: (state, action) => {
      state.faqs = action.payload;
    },
  },
});
export const { setStoreReduxFaq } = faqSlice.actions;
export default faqSlice.reducer;
