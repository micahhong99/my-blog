/*
 * @filename: main.tsx
 * @filePath: /src/main.tsx
 * @description: 入口文件
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'      // 自定义样式
import 'antd/dist/reset.css'     // Ant Design 样式

import App from './App.tsx'

// 创建根组件并渲染
const rootElement = document.getElementById('root') as HTMLDivElement
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
