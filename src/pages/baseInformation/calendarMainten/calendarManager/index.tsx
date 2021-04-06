import React from 'react';
import { Tabs } from 'antd';
import CalendarMoth from '@/pages/baseInformation/calendarMainten/calendarManager/CalendarMoth';
import './index.less';

const { TabPane } = Tabs;
const Calender: React.FC = () => {
  return (
    <div className="outWrapColor">
      <div className="content" style={{ display: 'flex' }}>
        <div className="right" style={{ flex: 1 }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="CNY_FI (2020)" key="1">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="CNY_FX (2020)" key="2">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="USD_FI (2019)" key="3">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="USD_FX (2019)" key="4">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="GPY_FI (2018)" key="5">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="HKD_FI (2017)" key="6">
              <CalendarMoth />
            </TabPane>
            <TabPane tab="HKD_FX (2017)" key="7">
              <CalendarMoth />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Calender;
