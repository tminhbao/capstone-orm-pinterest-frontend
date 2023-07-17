import { Col, Image, Row } from "antd";
import React from "react";

type Props = {};

const SavedImage = (props: Props) => {
  return (
    <Row gutter={10}>
      <Col xs={6}>
        <Image src="https://picsum.photos/1600/900" />
      </Col>
      <Col xs={6}>
        <Image src="https://picsum.photos/600/900" />
      </Col>
      <Col xs={6}>
        <Image src="https://picsum.photos/340/270" />
      </Col>
      <Col xs={6}>
        <Image src="https://picsum.photos/100/200" />
      </Col>
      <Col xs={6}>
        <Image src="https://picsum.photos/600/900" />
      </Col>
    </Row>
  );
};

export default SavedImage;
