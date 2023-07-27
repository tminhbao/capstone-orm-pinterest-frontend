import { Col, Image, Row } from "antd";
import { FiMoreHorizontal, FiUpload, FiLink } from "react-icons/fi";
import React from "react";
import Comment from "../../components/Comment/Comment";

type Props = {};

const ImageDetail = (props: Props) => {
  return (
    <Row
      className="border shadow bg-white"
      style={{
        borderRadius: "40px",
        margin: "0 280px",
        verticalAlign: "middle",
        // minHeight: "3\80px",
      }}
      gutter={8}
    >
      <Col xs={12}>
        <Image
          src="https://picsum.photos/1600/900"
          alt="image"
          className="p-3"
          style={{
            borderRadius: "40px",
          }}
        />
      </Col>
      <Col xs={12}>
        {/* ICON  */}
        <Row className="align-items-center mt-3">
          <Col xs={12}>
            <FiMoreHorizontal className="fs-3 mx-2" />
            <FiUpload className="fs-3 mx-2" />
            <FiLink className="fs-3 mx-2" />
          </Col>
          <Col xs={12} className="text-center">
            <button className="login-btn w-50">Lưu</button>
          </Col>
        </Row>
        <Row className="comment-section">
          <Comment />
        </Row>
      </Col>
    </Row>
  );
};

export default ImageDetail;
