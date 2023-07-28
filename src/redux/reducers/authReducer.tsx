import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN } from "../../constants";
import { UserLoginModel, UserLoginResult } from "../../types";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";
import { openNotificationWithIcon } from "../../utils/notification";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem(ACCESS_TOKEN) || "{}") || null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserLoginResult>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginAction } = authReducer.actions;

export default authReducer.reducer;

export const loginApi = (userLogin: UserLoginModel) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post(`/sign-in`, userLogin);
      dispatch(loginAction(result.data));
    } catch (error: any) {
      openNotificationWithIcon("error", error);
    }
  };
};
