<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
=======
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
