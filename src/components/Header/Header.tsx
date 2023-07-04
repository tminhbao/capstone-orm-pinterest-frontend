import React, { useState } from "react";
import "./Header.css";
import { Row, Col, Modal, Form, Input, Button } from "antd";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };

  const handleCancelRegister = () => {
    setIsModalRegisterOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishRegister = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishRegisterFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <header className="header my-3">
        <Row>
          <Col xs={10}>
            <div className="d-flex align-items-center">
              <BsPinterest className="fs-4 ms-3 mb-2 me-2 header__icon" />
              <h3 className="header__logo">Pinterest</h3>
            </div>
          </Col>
          <Col xs={7}>
            <div className="header__search">
              <AiOutlineSearch className="fs-5" />
              <input type="text" placeholder="Search" />
            </div>
          </Col>
          <Col xs={7}>
            <nav className="header__menu">
              <a>About</a>
              <a>Business</a>
              <a>Blog</a>
              <button className="menu__button" onClick={showModal}>
                Log in
              </button>
              <button onClick={showModalRegister}>Sign Up</button>
            </nav>
          </Col>
        </Row>
      </header>
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
    </>
  );
};

export default Header;
