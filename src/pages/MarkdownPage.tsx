/*
 * @filename: MarkdownPage.tsx
 * @filePath: src/pages/MarkdownPage.tsx
 * @description: Markdown 页面
 */
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Card } from 'antd'

const MarkdownPage = () => {
  const [content, setContent] = useState('')
  const baseUrl = import.meta.env.BASE_URL // 适配 Vite base URL
  const markdownPath = `${baseUrl}doc/py.md` // 拼接正确的路径

  useEffect(() => {
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error('Error loading Markdown:', err))
  }, [markdownPath])

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <Card>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Card>{' '}
    </div>
  )
}

export default MarkdownPage
