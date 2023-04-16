import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../feature/userSlice.js"

export const store =  configureStore({
  reducer:{
    user: useReducer
  }
})