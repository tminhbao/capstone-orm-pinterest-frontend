import { Avatar, Col, Modal, Row } from "antd";
import React from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Button, Checkbox, Form, Input } from "antd";

const { Dragger } = Upload;

type Props = {
  open: any;
  onCancel: any;
};

const CreateImageModal = (props: Props) => {
  const { open, onCancel } = props;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      className="create__modal"
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Row gutter={20}>
        <Col xs={12}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <BsFillPlusCircleFill className="fs-2" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Col>
        <Col xs={12}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-100 pe-3"
            layout="vertical"
          >
            <Form.Item
              label="Tạo tiêu đề"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Avatar /> <span>username</span>
            </Form.Item>
            <Form.Item
              label="Mô tả"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label="URL"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Tạo
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default CreateImageModal;
