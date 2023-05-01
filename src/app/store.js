import { configureStore } from "@reduxjs/toolkit";
import authSlice from "state/AuthSlice";
import globalSlice from "state/index";

export default configureStore({
  reducer: { theme: globalSlice, auth: authSlice },
});
