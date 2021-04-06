import React from 'react';
import { Tabs } from 'antd';
import './index.less';
import { KeepAlive } from 'react-activation';
import Table1 from './table1';
import Table2 from './table2';

const { TabPane } = Tabs;
const SceneConstructParam: React.FC = () => {
  return (
    <div style={{ position: 'relative' }} className="outWrapColor">
      <div className="riskParameterWrap">
        <div style={{ marginTop: '16px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane key="1">
              <Table2 />
            </TabPane>
          </Tabs>
        </div>
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="调整因子" key="1">
              <Table1 />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default () => (
  <KeepAlive name="/baseInformation/riskControlSetup/sceneConstructParam" id="场景构建参数" saveScrollPosition="screen">
    <SceneConstructParam />
  </KeepAlive>
);
