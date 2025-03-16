/*
 * @filename: Dashboard.tsx
 * @filePath: /src/pages/Dashboard.tsx
 * @description: 仪表盘页面
 */
import React, { useEffect, useState } from 'react'
import { Card, Statistic, Row, Col, Spin, message } from 'antd'
import axios from 'axios'
import ReactECharts from 'echarts-for-react'

// 数据接口
interface CryptoData {
  bitcoin: { usd: number; cny: number }
  ethereum: { usd: number; cny: number }
}

// 组件
const CryptoDashboard: React.FC = () => {
  const [data, setData] = useState<CryptoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>(
    []
  )

  // 获取比特币 & 以太坊价格
  const fetchCryptoPrice = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,cny'
      )
      setData(res.data)
    } catch (error) {
      message.error('加载价格数据失败')
    }
  }

  // 获取比特币历史价格（30 天）
  const fetchCryptoHistory = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'
      )
      const formattedData = res.data.prices.map((entry: [number, number]) => ({
        date: new Date(entry[0]).toLocaleDateString(),
        price: entry[1],
      }))
      setChartData(formattedData)
    } catch (error) {
      message.error('加载历史数据失败')
    }
  }

  useEffect(() => {
    fetchCryptoPrice()
    fetchCryptoHistory()
    setLoading(false)
    const interval = setInterval(fetchCryptoPrice, 10000) // 每 10 秒刷新
    return () => clearInterval(interval)
  }, [])

  if (loading)
    return (
      <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />
    )

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            <Statistic
              title="比特币价格（USD）"
              value={data?.bitcoin.usd}
              precision={2}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="以太坊价格（USD）"
              value={data?.ethereum.usd}
              precision={2}
            />
          </Card>
        </Col>
      </Row>

      {/* 价格走势折线图 */}
      <Card title="比特币 30 天价格走势" style={{ marginTop: 20 }}>
        <ReactECharts
          option={{
            xAxis: { type: 'category', data: chartData.map((d) => d.date) },
            yAxis: { type: 'value' },
            series: [{ data: chartData.map((d) => d.price), type: 'line' }],
          }}
          style={{ height: 300 }}
        />
      </Card>
    </div>
  )
}

export default CryptoDashboard
