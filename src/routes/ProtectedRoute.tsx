import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isLogined: any;
  children: any;
};

const ProtectedRoute = (props: Props) => {
  const { isLogined, children } = props;
  if (!isLogined) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
