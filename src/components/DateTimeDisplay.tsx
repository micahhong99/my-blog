import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const DateTimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 清除定时器
    return () => clearInterval(timer);
  }, []);

  // 格式化日期和时间
  const formatDateTime = (date: Date) => {
    const formattedDate = date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const formattedTime = date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '18px', fontWeight: 'bold' }}>
      <Text>{formatDateTime(currentTime)}</Text>
    </div>
  );
};

export default DateTimeDisplay;