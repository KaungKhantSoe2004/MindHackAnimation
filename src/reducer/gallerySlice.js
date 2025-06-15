import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gallery: [],
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setStoreReduxGallery: (state, action) => {
      state.gallery = action.payload;
    },
  },
});
export const { setStoreReduxGallery } = gallerySlice.actions;
export default gallerySlice.reducer;
