import React from "react";
import { Layout, message } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../store/actions/userActions";
import { fakeData } from "../data/data";
import { useEffect } from "react";

const { Content } = Layout;

export default function Login({ setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthanticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthanticated) {
      navigate("/profile");
    }
    if (error) {
      return message.error(error);
    }
  }, [isAuthanticated, navigate, error]);

  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    setUser(fakeData.find((value) => value.email === values.email));

    dispatch(login(values.email, values.password));
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
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}
