import React, { useState } from "react";
import "./Header.css";
import { Row, Col, Modal, Form, Input, Button, Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiFillBell, AiFillMessage, AiOutlinePlusCircle } from "react-icons/ai";
import CreateImageModal from "../Modal/CreateImageModal/CreateImageModal";

type Props = {};

const Header = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

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

  const showModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCancelCreate = () => {
    setIsModalCreateOpen(false);
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

  const onFinishCreate = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishCreateFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          My Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          My Image
        </a>
      ),
    },
    {
      key: "3",
      label: <p className="text-danger mb-0"> Logout</p>,
    },
  ];

  return (
    <>
      <header className="header my-3">
        <Row>
          <Col xs={10}>
            <NavLink
              to="/"
              className="d-flex align-items-center text-decoration-none"
            >
              <BsPinterest className="fs-4 ms-3 mb-2 me-2 header__icon" />
              <h3 className="header__logo">Pinterest</h3>
            </NavLink>
          </Col>
          <Col xs={7}>
            <div className="header__search">
              <AiOutlineSearch className="fs-5" />
              <input type="text" placeholder="Search" />
            </div>
          </Col>
          <Col xs={7}>
            {isLogin ? (
              <nav className="header__menu">
                <a onClick={(e: any) => setIsModalCreateOpen(true)}>
                  <AiOutlinePlusCircle className="fs-3" />
                </a>
                <a>
                  <AiFillBell className="fs-3" />
                </a>
                <a>
                  <AiFillMessage className="fs-3" />
                </a>
                <a>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <Avatar />
                  </Dropdown>
                </a>
              </nav>
            ) : (
              <nav className="header__menu">
                <a>About</a>
                <a>Business</a>
                <a>Blog</a>

                <button className="menu__button" onClick={showModal}>
                  Log in
                </button>
                <button onClick={showModalRegister}>Sign Up</button>
              </nav>
            )}
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

      <CreateImageModal
        open={isModalCreateOpen}
        onCancel={handleCancelCreate}
      />
    </>
  );
};

export default Header;
