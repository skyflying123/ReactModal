import React from 'react';
import { Table, Select, Form, Button, DatePicker, Tabs } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import moment from 'moment';
import { HistorySceneColumn } from './interface';
import HistorySceneChart from './component/index';

const { Option } = Select;
const { TabPane } = Tabs;
const data = [
  {
    id: '1',
    date: '2020-08-01',
  },
  {
    id: '2',
    date: '2020-08-02',
  },
];
const historyScene: React.FC = () => {
  const columns: ColumnProps<HistorySceneColumn>[] = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
  ];
  const dateFormat = 'YYYY-MM-DD';
  return (
    <>
      <Form style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item name="startDate" label="开始日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item name="startDate" label="结束日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item label="日间/日终：" name="dayMiddle">
          <Select style={{ width: 220 }}>
            <Option value="日间">日间</Option>
            <Option value="日终">日终</Option>
          </Select>
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
        <Table columns={columns} dataSource={data} style={{ width: '20vw' }} />
        <Tabs
          defaultActiveKey="1"
          style={{ width: '60vw', background: 'white', paddingLeft: '20px', minHeight: '50vh' }}
        >
          <TabPane tab="人民币贴现利率曲线" key="1">
            人民币贴现利率曲线
          </TabPane>
          <TabPane tab="即期汇率" key="2">
            即期汇率
          </TabPane>
          <TabPane tab="远期汇率曲线" key="3">
            远期汇率曲线
          </TabPane>
          <TabPane tab="美元隐含利率曲线" key="4">
            美元隐含利率曲线
          </TabPane>
          <TabPane tab="波动率曲面" key="5">
            波动率曲面
          </TabPane>
          <TabPane tab="图表" key="6">
            <HistorySceneChart />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
export default historyScene;
