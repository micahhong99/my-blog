import React from "react";
import { Card, Typography, List } from "antd";

const { Title, Paragraph } = Typography;

const links = [
  {
    category: "开发资源",
    items: [
      { name: "GitHub", url: "https://www.github.com" },
      { name: "Stack Overflow", url: "https://www.stackoverflow.com" },
    ],
  },
  {
    category: "学习资源",
    items: [
      { name: "W3Schools", url: "https://www.w3schools.com" },
      { name: "Medium", url: "https://www.medium.com" },
    ],
  },
  {
    category: "面试资源",
    items: [
      { name: "所有面试题", url: "https://www.yuque.com/silence1224/zvw0fi/qskx1m?singleDoc#94c7f2e1" },
      { name: "前端面试题汇总", url: "https://www.yuque.com/cuggz/interview" },
      { name: "2024年前端最新场景题面试.pdf", url: "2024年前端最新场景题面试.pdf" },
    ],
  },
];

const FavoriteLinks: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <Title level={1}>我的收藏链接</Title>
      <Paragraph>以下是我收藏的一些有用链接：</Paragraph>
      {links.map((linkCategory) => (
        <Card title={linkCategory.category} key={linkCategory.category} style={{ marginBottom: 16 }}>
          <List
            dataSource={linkCategory.items}
            renderItem={(item) => (
              <List.Item>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </div>
  );
};

export default FavoriteLinks;
