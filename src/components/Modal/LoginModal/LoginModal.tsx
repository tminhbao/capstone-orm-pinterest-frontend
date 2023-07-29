import { Button, Form, Input, Modal, Row } from "antd";
import React from "react";
import { BsPinterest } from "react-icons/bs";
import { DispatchType } from "../../../redux/configStore";
import { loginApi } from "../../../redux/reducers/authReducer";
import { openNotificationWithIcon } from "../../../utils/notification";
import { useDispatch } from "react-redux";

type Props = {
  isModalOpen: any;
  handleCancel: any;
};

const LoginModal = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { isModalOpen, handleCancel } = props;
  const onFinish = async (values: any) => {
    try {
      await dispatch(loginApi(values));
      openNotificationWithIcon("success", "Đăng nhập thành công");
      handleCancel();
    } catch (error: any) {
      // openNotificationWithIcon("error", error);
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      className="login__modal"
      // title="Chào mừng bạn đến với Pinterest"
      open={isModalOpen}
      // onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Row className="d-flex justify-content-center">
        <BsPinterest className="header__icon fs-1" />
      </Row>
      <Row className="d-flex justify-content-center text-center">
        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: " -1.2px",
          }}
        >
          Chào mừng bạn đến với Pinterest
        </p>
      </Row>
      <Row>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="w-50 m-auto"
          size="middle"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="email" style={{ minHeight: "48px" }} />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password must be at least 8 characters!",
                min: 6,
              },
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              style={{ minHeight: "48px" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-100 login-btn"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Modal>
  );
};

export default LoginModal;
