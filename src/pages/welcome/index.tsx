import React from 'react';
import { Card, Typography, Alert, Button } from 'antd';
import styles from './index.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome = (): React.ReactNode => {
  return (
    <Card>
      <Alert
        message="链石前端"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://umijs.org/zh-CN">
          enjoy your development!!!
        </a>
      </Typography.Text>
      <CodePreview>yarn start</CodePreview>
      <Button type="primary">确定</Button>
    </Card>
  );
};

export default Welcome;
