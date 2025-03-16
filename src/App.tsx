/*
 * @filename: App.tsx
 * @filePath: /src/App.tsx
 * @description: App 组件
 */
import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import DateTimeDisplay from './components/DateTimeDisplay'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import MarkdownPage from './pages/MarkdownPage'
import Dashboard from './pages/Dashboard'
import Links from './pages/Links'

import './styles/App.css'

const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  return (
    <Router basename="/my-blog">
      <Layout style={{ minHeight: '100vh' }}>
        {/* 头部 */}
        <Header className="app-header">
          <Navbar />
          <DateTimeDisplay />
        </Header>

        {/* 内容区域 */}
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/link" element={<Links />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markdown" element={<MarkdownPage />} />
          </Routes>
        </Content>

        {/* 底部 */}
        <Footer className="app-footer">
          {`myblog ©${new Date().getFullYear()} Created by me`}
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
