import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default function Main() {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      Register
    </Content>
  );
}
