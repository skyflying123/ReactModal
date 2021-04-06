import React from 'react';
import { Card, Checkbox, Space, Input, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../calendarManager/index.less';

const CalenderInit: React.FC = () => {
  const options = [
    { label: 'CNY_FI', value: '1' },
    { label: 'USD_FX', value: '2' },
    { label: 'HRD_FD', value: '3' },
    { label: 'URU_FD', value: '9' },
    { label: 'DRJ_FD', value: '4' },
    { label: 'YRD_FD', value: '5' },
    { label: 'BRD_FD', value: '6' },
    { label: 'HRK_FD', value: '7' },
    { label: 'URD_FD', value: '8' },
  ];
  return (
    <div style={{ marginLeft: '600px', marginTop: '300px' }} className="editCalendar_child">
      <Card title="日历初始化" extra={<div className="close">×</div>} style={{ width: 600 }}>
        <Space className="yearTitle">
          <span>初始化年份：</span>
          <LeftOutlined />
          <Input style={{ width: '80px' }} defaultValue="2020年" />
          <RightOutlined />
        </Space>
        <div className="checkGroup">
          <div style={{ marginBottom: '20px' }}>选择日历：</div>
          <div className="checkItem">
            <Checkbox.Group options={options} defaultValue={[]} onChange={(): void => {}} />
          </div>
        </div>
        <div style={{ marginTop: '6px' }}>
          <Checkbox>覆盖已有日历</Checkbox>
        </div>
      </Card>
      <div className="confirmBottom">
        <Button type="primary">生成</Button>
        <Button style={{ margin: '0px 20px 0 10px' }}>取消</Button>
      </div>
    </div>
  );
};
export default CalenderInit;
