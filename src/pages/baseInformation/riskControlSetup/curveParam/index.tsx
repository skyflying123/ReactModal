import React from 'react';
import { Tabs, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import './index.less';
import { KeepAlive } from 'react-activation';
import Table1 from './table1';
import Table2 from './table2';
import Table3 from './table3';
import Table4 from './table4';
import Table5 from './table5';

const { TabPane } = Tabs;
const CurveParam: React.FC = () => {
  return (
    <div className="curveStructWrap outWrapColor" style={{ position: 'relative' }}>
      <Button style={{ position: 'absolute', right: '50px' }} type="primary" icon={<RollbackOutlined />}>
        导出
      </Button>
      <Tabs defaultActiveKey="1">
        <TabPane tab="人民币贴现利率曲线" key="1">
          <Table1 />
        </TabPane>
        <TabPane tab="期限设置参数" key="2">
          <Table2 />
        </TabPane>
        <TabPane tab="即期汇率" key="3">
          <Table3 />
        </TabPane>
        <TabPane tab="美元兑人民币远期汇率" key="4">
          <Table4 />
        </TabPane>
        <TabPane tab="隐含波动率曲面" key="5">
          <Table5 />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default () => (
  <KeepAlive name="/baseInformation/riskControlSetup/curveParam" id="曲线/曲面构造参数" saveScrollPosition="screen">
    <CurveParam />
  </KeepAlive>
);
