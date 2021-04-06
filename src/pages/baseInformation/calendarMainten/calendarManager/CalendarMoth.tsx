import React from 'react';
import { Calendar, Button, Space, Input } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const twelveMonth: number[] = [];
for (let i = 0; i < 12; i++) {
  twelveMonth.push(i);
}
const CalendarMoth: React.FC = () => {
  return (
    <div className="calenderWrap_Child">
      <div>
        <div className="top">
          <Space>
            <LeftOutlined style={{ cursor: 'pointer' }} />
            <Input style={{ width: '80px' }} defaultValue="2020年" />
            <RightOutlined style={{ cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="content">
          {twelveMonth.map((item, index) => {
            return (
              <div key={`${1 + index}`} className="eachiItem">
                <Calendar headerRender={(): string => ''} fullscreen={false} onPanelChange={(): void => {}} />
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <Button type="primary">保存</Button>
          <Button style={{ marginLeft: '16px', marginRight: '24px' }}>取消</Button>
        </div>
      </div>
      <div />
    </div>
  );
};

export default CalendarMoth;
