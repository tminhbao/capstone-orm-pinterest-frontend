import { Avatar, Col, Row, Tabs, type TabsProps } from "antd";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import CreatedImage from "../../components/Image/CreatedImage/CreatedImage";
import SavedImage from "../../components/Image/SavedImage/SavedImage";

type Props = {};

const MyImage = (props: Props) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Đã tạo`,
      children: <CreatedImage />,
    },
    {
      key: "2",
      label: `Đã lưu`,
      children: <SavedImage />,
    },
  ];
  return (
    <Row>
      <Col xs={24}>
        <Row className="mx-auto">
          <Col xs={24} className="mx-auto text-center">
            <Avatar size={64} icon={<BiSolidUserCircle />} />
            <h1>Username</h1>
            <p>email@email.com</p>
            <button className="register-btn fw-bold">Chỉnh sửa hồ sơ</button>
          </Col>
        </Row>
      </Col>
      <Col xs={24} className="mx-5">
        <Row>
          <Col xs={24}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyImage;
