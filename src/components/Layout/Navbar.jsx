import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

/* Icons */
import { MdAppRegistration } from "react-icons/md";
import { BiLogInCircle, BiHomeAlt } from "react-icons/bi";

const { Sider } = Layout;

const Navbar = ({ collapsed }) => {
  console.log(window.location.pathname);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h1 className="logo">Logo</h1>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<BiHomeAlt />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MdAppRegistration />}>
          <Link to="/register">Registration</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BiLogInCircle />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
