import { Avatar, Col, Row } from "antd";
import React from "react";
import { Form, Input } from "antd";

type Props = {};

const ProfileContent = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row>
        <Col xs={24}>
          <p>Hồ sơ công khai</p>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Avatar className="fs-3 me-2" />
          <button className="register-btn fw-bold">Thay đổi</button>
        </Col>
      </Row>
      <Row className="my-3">
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Row gutter={10}>
            <Col xs={12}>
              <Form.Item
                label="email"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Fullname"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="birthday"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item>
                <button className="register-btn w-100">Thiết lập lại</button>
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item>
                <button className="login-btn mt-0">Thay đổi</button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default ProfileContent;
