import React from 'react';
import { Tabs } from 'antd';
import './index.less';
import { KeepAlive } from 'react-activation';
import Table1 from './table1';
import Table2 from './table2';

const { TabPane } = Tabs;
const RiskOpenParam: React.FC = () => {
  return (
    <div className="outWrapColor">
      <div className="riskParameterWrap">
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="风险敞口集中度" key="1">
              <Table1 />
            </TabPane>
          </Tabs>
        </div>
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="盯市/敞口计算参数" key="1">
              <Table2 />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default () => (
  <KeepAlive name="/baseInformation/riskControlSetup/riskOpenParam" id="盯市及风险敞口参数" saveScrollPosition="screen">
    <RiskOpenParam />
  </KeepAlive>
);
