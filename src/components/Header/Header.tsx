import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { USER_LOGIN } from "../../constants";
import { loginAction } from "../../redux/reducers/authReducer";
import { openNotificationWithIcon } from "../../utils/notification";

type Props = {};

const Header = (props: Props) => {
  const { userLogin } = useSelector((state: RootState) => state.authReducer);
  const dispatch: DispatchType = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const isTokenExpired = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const { exp } = JSON.parse(jsonPayload);
    const expired = Date.now() >= exp * 1000;
    return expired;
  };

  useEffect(() => {
    console.log(isTokenExpired(userLogin?.accessToken));
    if (isTokenExpired(userLogin?.accessToken)) {
      dispatch(loginAction({ accessToken: null, expiresIn: null }));
      openNotificationWithIcon("error", "Xin mời đăng nhập lại");
    }
  }, []);

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
        <NavLink to={"/profile"} className="text-decoration-none">
          My Profile
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to={"/my-images"} className="text-decoration-none">
          My Images
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <p
          className="text-danger mb-0"
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            dispatch(loginAction({ accessToken: null, expiresIn: null }));
          }}
        >
          Logout
        </p>
      ),
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
            {userLogin.accessToken ? (
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
