/*
 * @filename: Blog.tsx
 * @filePath: src/pages/Blog.tsx
 * @description: 博客文章列表
 */
import { Link } from 'react-router-dom'
import { List, Typography } from 'antd'

const data = [
  { id: 1, title: '第一篇文章' },
  { id: 2, title: '第二篇文章' },
]

const Blog = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>博客文章</Typography.Title>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/post/${item.id}`}>{item.title}</Link>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Blog
