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
