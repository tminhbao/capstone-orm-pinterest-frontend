import React, { useState } from "react";
import "./Header.css";
import { Row, Col, Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiFillBell, AiFillMessage, AiOutlinePlusCircle } from "react-icons/ai";
import CreateImageModal from "../Modal/CreateImageModal/CreateImageModal";
import LoginModal from "../Modal/LoginModal/LoginModal";
import RegisterModal from "../Modal/RegisterModal/RegisterModal";

type Props = {};

const Header = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  // MODAL LOGIN
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // MODAL REGISTER
  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };

  const handleCancelRegister = () => {
    setIsModalRegisterOpen(false);
  };

  // MODAL CREATE
  const showModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCancelCreate = () => {
    setIsModalCreateOpen(false);
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
      <LoginModal isModalOpen={isModalOpen} handleCancel={handleCancel} />

      <RegisterModal
        isModalRegisterOpen={isModalRegisterOpen}
        handleCancelRegister={handleCancelRegister}
      />

      <CreateImageModal
        open={isModalCreateOpen}
        onCancel={handleCancelCreate}
      />
    </>
  );
};

export default Header;
