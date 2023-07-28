import { Button, Form, Input, Modal, Row } from "antd";
import React from "react";
import { BsPinterest } from "react-icons/bs";

type Props = {
  isModalRegisterOpen: any;
  handleCancelRegister: any;
};

const RegisterModal = (props: Props) => {
  const { isModalRegisterOpen, handleCancelRegister } = props;
  const onFinishRegister = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishRegisterFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      className="register__modal"
      open={isModalRegisterOpen}
      onCancel={handleCancelRegister}
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
          onFinish={onFinishRegister}
          onFinishFailed={onFinishRegisterFailed}
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              style={{ minHeight: "48px" }}
            />
          </Form.Item>

          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Họ tên" style={{ minHeight: "48px" }} />
          </Form.Item>
          <Form.Item
            label="age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input placeholder="Tuổi" style={{ minHeight: "48px" }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-100 login-btn"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Modal>
  );
};

export default RegisterModal;
