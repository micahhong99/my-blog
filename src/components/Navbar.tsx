/*
 * @filename: Navbar.tsx
 * @filePath: src/components/Navbar.tsx
 * @description: 导航栏组件
 */
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="blog">
        <Link to="/blog">博客</Link>
      </Menu.Item>
      <Menu.Item key="markdown">
        <Link to="/markdown">markdown</Link>
      </Menu.Item>
      <Menu.Item key="link">
        <Link to="/link">link</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">关于</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
