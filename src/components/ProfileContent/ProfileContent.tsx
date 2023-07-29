import { Avatar, Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { DispatchType, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfoApi } from "../../redux/reducers/userReducer";

type Props = {};

const ProfileContent = (props: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.userReducer);
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoApi());
  }, [dispatch]);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (userInfo)
    return (
      <div>
        <Row>
          <Col xs={24}>
            <p>Hồ sơ công khai</p>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Avatar className="fs-3 me-2" src={userInfo?.avatar} />
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
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  {userInfo?.email ? (
                    <Input defaultValue={userInfo?.email} />
                  ) : (
                    <Spin />
                  )}
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item
                  label="Fullname"
                  name="full_name"
                  rules={[
                    { required: true, message: "Please input your fullname!" },
                  ]}
                >
                  {userInfo?.full_name ? (
                    <Input defaultValue={userInfo?.full_name} />
                  ) : (
                    <Spin />
                  )}
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item
                  label="birthday"
                  name="birth_date"
                  rules={[
                    { required: true, message: "Please input your birthday!" },
                  ]}
                >
                  {userInfo?.birth_date ? (
                    <Input defaultValue={userInfo?.birth_date.slice(0, 10)} />
                  ) : (
                    <Spin />
                  )}
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
  else return <Spin />;
};

export default ProfileContent;
