import React from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default HomeTemplate;
