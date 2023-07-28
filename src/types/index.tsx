export type NotificationType = "success" | "info" | "warning" | "error";

export interface UserLoginResult {
  accessToken: string;
  expiresIn: string | number;
}

export interface UserLoginModel {
  email: string;
  password: string;
}
