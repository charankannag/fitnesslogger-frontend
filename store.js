import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import AuthenticationReducer from "./Reducer/Authentication.reducer";
export default configureStore({
  reducer: {
    authentication:AuthenticationReducer,
  },
});
