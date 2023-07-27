import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../constants";

const initialState = {
  userLogin: localStorage.getItem(USER_LOGIN)
    ? JSON.parse(localStorage.getItem(USER_LOGIN))
    : null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const {} = authReducer.actions;

export default authReducer.reducer;
