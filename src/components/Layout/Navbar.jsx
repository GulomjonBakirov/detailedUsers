import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* Icons */
import { MdAppRegistration } from "react-icons/md";
import { BiLogInCircle, BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const { Sider } = Layout;

const Navbar = ({ collapsed }) => {
  const path = window.location.pathname;
  const { isAuthanticated } = useSelector((state) => state.auth);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h1 className="logo">Logo</h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[
          `${
            path === "/"
              ? 1
              : path === "/register"
              ? 2
              : path === "/login"
              ? 3
              : 1
          }`,
        ]}
      >
        <Menu.Item key="1" icon={<BiHomeAlt />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        {!isAuthanticated ? (
          <>
            {" "}
            <Menu.Item key="2" icon={<MdAppRegistration />}>
              <Link to="/register">Registration</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BiLogInCircle />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="4" icon={<CgProfile />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
};

export default Navbar;
