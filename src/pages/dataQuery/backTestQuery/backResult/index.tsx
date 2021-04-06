import React from 'react';
import { Table, Select, Form, Button, DatePicker } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import moment from 'moment';
import { DayStartAndEndResultColumn } from './interface';

const data: DayStartAndEndResultColumn[] = [];
const dayStartAndEndResult: React.FC = () => {
  const columns: ColumnProps<DayStartAndEndResultColumn>[] = [
    {
      title: '回溯测试日期',
      dataIndex: 'transactionId',
      key: 'transactionId',
      fixed: 'left',
      width: 120,
    },
    {
      title: '会员编号',
      dataIndex: 'calculationDate',
      key: 'calculationDate',
      width: 100,
    },
    {
      title: '回溯最大敞口',
      dataIndex: 'dayEndAndMiddle',
      key: 'dayEndAndMiddle',
      width: 120,
    },
    {
      title: '已接单VaR',
      dataIndex: 'buyerMarketValue',
      key: 'buyerMarketValue',
      width: 100,
    },
    {
      title: '保证金要求',
      dataIndex: 'buyerMarketValue2',
      key: 'buyerMarketValue2',
      width: 100,
    },
    {
      title: '回溯测试结果（已接单VaR）',
      dataIndex: 'sellerMarketValue',
      key: 'sellerMarketValue',
      width: 150,
    },
    {
      title: '回溯测试结果（保证金要求）',
      dataIndex: 'sellerMarketValue2',
      key: 'sellerMarketValue2',
      width: 150,
    },
    {
      title: '最近30天（已接单VaR）',
      dataIndex: 'buyerSpot',
      key: 'buyerSpot',
      width: 150,
    },
    {
      title: '最近30天（保证金要求）',
      dataIndex: 'buyerForwardCNY',
      key: 'buyerForwardCNY',
      width: 150,
    },
    {
      title: '最近90天（已接单VaR）',
      dataIndex: 'buyerForwardUSD',
      key: 'buyerForwardUSD',
      width: 150,
    },
    {
      title: '最近90天（保证金要求）',
      dataIndex: 'PipsSpotGamma',
      key: 'PipsSpotGamma',
      width: 150,
    },
    {
      title: '最近180天（已接单VaR）',
      dataIndex: 'PipsForwardGamma',
      key: 'PipsForwardGamma',
      width: 150,
    },
    {
      title: '最近180天（保证金要求）',
      dataIndex: 'buyerVega',
      key: 'buyerVega',
      width: 150,
    },
    {
      title: '最近250天（已接单VaR）',
      dataIndex: 'buyerRho',
      key: 'buyerRho',
      width: 150,
    },
    {
      title: '最近250天（保证金要求）',
      dataIndex: 'buyerRho2',
      key: 'buyerRho2',
      width: 150,
    },
    {
      title: '最近500天（已接单VaR）',
      dataIndex: 'buyerTheta',
      key: 'buyerTheta',
      width: 150,
    },
    {
      title: '最近500天（保证金要求）',
      dataIndex: 'sellerSpot',
      key: 'sellerSpot',
      width: 150,
    },
  ];
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Form style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item name="startDate" label="开始日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item name="startDate" label="结束日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item label="持有人账号">
          <Select style={{ width: 220 }} />
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
      <Table columns={columns} dataSource={data} bordered scroll={{ x: 1000 }} />
    </div>
  );
};
export default dayStartAndEndResult;
