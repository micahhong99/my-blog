import { Link } from 'react-router-dom'
import { Layout, Typography, Button } from 'antd'
import { FC } from 'react' // 引入 FC 类型
import React from 'react'

const { Header, Content } = Layout
const { Title } = Typography

const Home: FC = () => {
  return (
    <Layout>
      <Header style={{ color: 'white' }}>我的博客</Header>
      <Content style={{ padding: '20px', textAlign: 'center' }}>
        <Title>欢迎来到我的博客</Title>
        <Button type="primary">
          <Link to="/blog">查看文章</Link>
        </Button>
      </Content>
    </Layout>
  )
}

export default Home
