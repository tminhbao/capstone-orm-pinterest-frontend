export type NotificationType = "success" | "info" | "warning" | "error";

export interface UserLoginResult {
  accessToken: string | null;
  expiresIn: string | number | null;
}

export interface UserLoginModel {
  email: string;
  password: string;
}
