/*
 * @filename: Post.tsx
 * @filePath: src/pages/Post.tsx
 * @description: 文章页面
 */
import { useParams } from 'react-router-dom'
import { Typography } from 'antd'

const Post = () => {
  const { id } = useParams()

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>文章 {id}</Typography.Title>
      <Typography.Paragraph>这里是文章 {id} 的内容...</Typography.Paragraph>
    </div>
  )
}

export default Post
