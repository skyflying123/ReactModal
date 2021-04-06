import React from 'react';
import { Table, Form, Button, DatePicker, Tabs } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import moment from 'moment';
import { StressColumn, MemberStressColumn, StressTestColumn } from './interface';

const { TabPane } = Tabs;
const data = [
  {
    id: '1',
    column: '压力测试日期',
    value: '2019-01-28',
  },
  {
    id: '2',
    column: '当日压力测试结果',
    value: '742290695.196506',
  },
  {
    id: '3',
    column: '压力缺口场景编号',
    value: '#2',
  },
];
const memberData = [
  {
    id: '1',
    code: '#22',
    openValue: '123',
    vaR: 'var',
    scene: '123',
  },
];
const stressTestData = [
  {
    id: '1',
    scene: '场景',
    risk: '20%',
    riskProportion: '30%',
    maxMember: '123',
    difference: '66',
    differenceProportion: '23%',
    lowMember: '22',
  },
];
const stressTestQuery: React.FC = () => {
  const columns: ColumnProps<StressColumn>[] = [
    {
      title: 'Column',
      dataIndex: 'column',
      key: 'column',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  const memberColumns: ColumnProps<MemberStressColumn>[] = [
    {
      title: '会员编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '会员的最大敞口值',
      dataIndex: 'openValue',
      key: 'openValue',
    },
    {
      title: '会员已结单VaR',
      dataIndex: 'vaR',
      key: 'vaR',
    },
    {
      title: '会员最大敞口值场景编号',
      dataIndex: 'scene',
      key: 'scene',
    },
  ];
  const stressTestColumns: ColumnProps<StressTestColumn>[] = [
    {
      title: '场景',
      dataIndex: 'scene',
      key: 'scene',
    },
    {
      title: '风险缺口',
      dataIndex: 'risk',
      key: 'risk',
    },
    {
      title: '风险缺口占比',
      dataIndex: 'riskProportion',
      key: 'riskProportion',
    },
    {
      title: '最大会员',
      dataIndex: 'maxMember',
      key: 'maxMember',
    },
    {
      title: '差额',
      dataIndex: 'difference',
      key: 'difference',
    },
    {
      title: '差额占比',
      dataIndex: 'differenceProportion',
      key: 'differenceProportion',
    },
    {
      title: '次大会员',
      dataIndex: 'lowMember',
      key: 'lowMember',
    },
  ];
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Form style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item name="startDate" label="查询日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />} style={{ marginRight: '20px' }}>
            查询
          </Button>
          <Button type="primary" icon={<RollbackOutlined />}>
            导出
          </Button>
        </Form.Item>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Tabs
          defaultActiveKey="1"
          style={{ width: '60vw', background: 'white', paddingLeft: '20px', minHeight: '50vh' }}
        >
          <TabPane tab="压力测试结果" key="1">
            <Table columns={columns} dataSource={data} style={{ width: '20vw' }} />
          </TabPane>
          <TabPane tab="会员压力最大缺口" key="2">
            <Table columns={memberColumns} dataSource={memberData} style={{ width: '20vw' }} />
          </TabPane>
          <TabPane tab="压力测试场景风险缺口" key="3">
            <Table columns={stressTestColumns} dataSource={stressTestData} style={{ width: '50vw' }} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default stressTestQuery;
