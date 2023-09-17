import { configureStore } from "@reduxjs/toolkit";
import UpdateState from "./Reducers/CartReducers";
export const Store = configureStore({
  reducer: { UpdateState },
});
