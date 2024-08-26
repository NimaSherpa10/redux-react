import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
//creating redux store
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
