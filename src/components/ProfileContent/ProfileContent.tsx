import { Avatar, Col, DatePicker, DatePickerProps, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { DispatchType, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoApi,
  updateUserInfoApi,
} from "../../redux/reducers/userReducer";
import { UserUpdateModel } from "../../types";
import { openNotificationWithIcon } from "../../utils/notification";
import dayjs from "dayjs";

type Props = {};

const ProfileContent = (props: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.userReducer);
  const [birthDate, setBirthDate] = useState("");
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoApi());
  }, [dispatch]);

  const onFinish = async (values: UserUpdateModel) => {
    let { full_name } = values;
    if (full_name === undefined) full_name = userInfo?.full_name;
    const birth_date = birthDate || userInfo?.birth_date.slice(0, 10);
    await dispatch(updateUserInfoApi({ full_name, birth_date }));
    openNotificationWithIcon("success", "Cập nhật thông tin thành công");
    dispatch(getUserInfoApi());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSelectBirthDay: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setBirthDate(dateString);
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
                <Form.Item label="email" name="email">
                  {userInfo?.email ? (
                    <Input defaultValue={userInfo?.email} disabled />
                  ) : (
                    <Spin />
                  )}
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="Fullname" name="full_name">
                  {userInfo?.full_name ? (
                    <Input defaultValue={userInfo?.full_name} />
                  ) : (
                    <Spin />
                  )}
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="birthday" name="birth_date">
                  {userInfo?.birth_date ? (
                    <DatePicker
                      onChange={handleSelectBirthDay}
                      defaultValue={dayjs(
                        userInfo?.birth_date.slice(0, 10),
                        "YYYY-MM-DD"
                      )}
                    />
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
