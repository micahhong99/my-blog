/*
 * @filename: Navbar.tsx
 * @filePath: src/components/Navbar.tsx
 * @description: 导航栏组件
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

// 定义菜单项类型
interface MenuItem {
  key: string;
  label: string;
  path: string;
}

// 菜单项数据
const menuItems: MenuItem[] = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'blog', label: '博客', path: '/blog' },
  { key: 'markdown', label: 'Markdown', path: '/markdown' },
  { key: 'link', label: '链接', path: '/link' },
  { key: 'dashboard', label: 'dashboard', path: '/dashboard' },
  { key: 'about', label: '关于', path: '/about' },
  // 生活与兴趣
// 资源推荐
];

// 导航栏组件
const Navbar: React.FC = () => {
  return (
    <Menu mode="horizontal" style={{ flex: 1, minWidth: 0 }}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;