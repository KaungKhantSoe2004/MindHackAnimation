import { configureStore } from "@reduxjs/toolkit";

import eventsSlice from "./reducer/eventsSlice";
import gallerySlice from "./reducer/gallerySlice";
import sponsorSlice from "./reducer/sponsorSlice";
import faqSlice from "./reducer/faqSlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    faqs: faqSlice,
    sponsors: sponsorSlice,
    gallery: gallerySlice,
  },
});
