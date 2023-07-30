export type NotificationType = "success" | "info" | "warning" | "error";

export interface UserLoginResult {
  accessToken: string | null;
  expiresIn: string | number | null;
}

export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserRegisterModel {
  email: string;
  password: string;
  full_name: string;
  birth_date: string;
  avatar: string | null;
}

export interface UserInfoModel {
  user_id: string;
  full_name: string;
  email: string;
  password: string;
  avatar: string | null;
  birthdate: string;
}

export interface UserUpdateModel {
  full_name?: string | null;
  birth_date?: string | null;
}

export interface UserState {
  userInfo: UserInfoModel | any;
}
