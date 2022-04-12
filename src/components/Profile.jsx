import React from "react";
import { Image } from "antd";
import Loader from "./Layout/Loader";
import { Layout } from "antd";

const { Content } = Layout;

export default function Profile({ user }) {
  return (
    <Content
      className="site-layout-background userSingle"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {!Object.keys(user).length ? (
        <Loader />
      ) : (
        <div className="moreInfo">
          <Image src={`${user?.avatar}`} />
          <div className="detailedInfo">
            <h2>My First Name: {user?.first_name}</h2>
            <h2>My Last Name: {user?.last_name}</h2>
            <h2>
              My Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </h2>
          </div>
        </div>
      )}
    </Content>
  );
}
