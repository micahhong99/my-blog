/*
 * @filename: App.tsx
 * @filePath: /src/App.tsx
 * @description: App 组件
 */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import MarkdownPage from './pages/MarkdownPage'
import Links from './pages/Links'

const App: React.FC = () => {
  return (
    <Router basename="/my-blog">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/link" element={<Links />} />
        <Route path="/markdown" element={<MarkdownPage />} />
      </Routes>
    </Router>
  )
}

export default App
