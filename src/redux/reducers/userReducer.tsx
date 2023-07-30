import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfoModel, UserState, UserUpdateModel } from "../../types";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";

const initialState: UserState = {
  userInfo: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getUserInfoAction: (
      state: UserState,
      action: PayloadAction<UserInfoModel>
    ) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getUserInfoAction } = userReducer.actions;

export default userReducer.reducer;

export const getUserInfoApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/user/info`);
      dispatch(getUserInfoAction(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserInfoApi = (userUpdate: UserUpdateModel) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.put("/user/info", userUpdate);
    } catch (error) {
      console.log(error);
    }
  };
};
