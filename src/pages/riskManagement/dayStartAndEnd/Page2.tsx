import React from 'react';
import { Button, DatePicker, Select, Space, Tabs } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;
const Page2: React.FC<{ changePageState: Function }> = ({ changePageState }) => {
  return (
    <div className="RiskDayWrap_Page2">
      <div className="pageTop">
        <Space style={{ marginLeft: '20px' }}>
          <span>系统估值日期：</span>
          <DatePicker />
          <span style={{ marginLeft: '20px' }}>系统当前状态：</span>
          <Select defaultValue="1" style={{ width: 130 }}>
            <Option value="1">日终</Option>
            <Option value="2">日间</Option>
          </Select>
          <span style={{ marginLeft: '20px' }}>当前日间处理模式：</span>
          <Select defaultValue="1" style={{ width: 130 }}>
            <Option value="1">自动</Option>
            <Option value="2">手工</Option>
          </Select>
        </Space>
        <Space style={{ marginLeft: '20px' }}>
          <Button
            onClick={(): void => {
              changePageState(1);
            }}
            type="primary"
          >
            应急日终
          </Button>
        </Space>
      </div>
      <div className="pageBottom">
        <Tabs defaultActiveKey="1">
          <TabPane tab="处理日志" key="1" />
        </Tabs>
      </div>
    </div>
  );
};

export default Page2;
