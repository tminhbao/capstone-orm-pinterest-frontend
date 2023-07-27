import { notification } from "antd";
import { NotificationType } from "../types";

export const openNotificationWithIcon = (
  type: NotificationType,
  message: string | null,
  description?: string | null
) => {
  notification[type]({
    message,
    description,
  });
};
