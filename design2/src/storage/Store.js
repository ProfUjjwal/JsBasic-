import Contacts from "../reducer/Contact_Form";
import UPDATE from "../reducer/Update";
import {SaveCardID} from "../reducer/SaveCardID";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    Contacts, UPDATE, SaveCardID,
  },
  // Just to fix error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;