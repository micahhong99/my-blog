/*
 * @filename: Home.tsx
 * @filePath: src/pages/Home.tsx
 * @description: 首页
 */
import { Typography} from 'antd'
import { FC } from 'react'

const { Title } = Typography

const Home: FC = () => {
  return (
    <div>
      <Title>欢迎来到我的博客</Title>
    </div>
  )
}

export default Home
