import React from "react";
import { Layout, message } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../store/actions/userActions";
import { fakeData } from "../data/data";
import { useEffect } from "react";

const { Content } = Layout;

export default function Registration({ setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthanticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthanticated) {
      navigate("/profile");
      message.success("You have been authenticated ");
    }
    if (error) {
      return message.error(error);
    }
  }, [isAuthanticated, navigate, error]);

  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    setUser(fakeData.find((value) => value.email === values.email));
    dispatch(register(values.email, values.password));
  };
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Form
        name="login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Registration
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}
