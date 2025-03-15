import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
      <Menu.Item key="blog"><Link to="/blog">博客</Link></Menu.Item>
      <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
    </Menu>
  );
};

export default Navbar;
