import React from 'react';
import { Table, Select, Form, Button, DatePicker } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import moment from 'moment';
import { DayStartAndEndResultColumn } from './interface';

const { Option } = Select;
const data: DayStartAndEndResultColumn[] = [];
const dayStartAndEndResult: React.FC = () => {
  const columns: ColumnProps<DayStartAndEndResultColumn>[] = [
    {
      title: '成交编号/现金流编号',
      dataIndex: 'transactionId',
      key: 'transactionId',
      fixed: 'left',
      width: 120,
    },
    {
      title: '计算日期',
      dataIndex: 'calculationDate',
      key: 'calculationDate',
      width: 100,
    },
    {
      title: '日终/日间',
      dataIndex: 'dayEndAndMiddle',
      key: 'dayEndAndMiddle',
      width: 100,
    },
    {
      title: '买方盯市价值',
      dataIndex: 'buyerMarketValue',
      key: 'buyerMarketValue',
      width: 100,
    },
    {
      title: '买方未经期权费调整的盯市价值',
      dataIndex: 'buyerMarketValue2',
      key: 'buyerMarketValue2',
      width: 150,
    },
    {
      title: '卖方盯市价值',
      dataIndex: 'sellerMarketValue',
      key: 'sellerMarketValue',
      width: 100,
    },
    {
      title: '卖方未经期权费调整的盯市价值',
      dataIndex: 'sellerMarketValue2',
      key: 'sellerMarketValue2',
      width: 150,
    },
    {
      title: '买方Pips spot delta',
      dataIndex: 'buyerSpot',
      key: 'buyerSpot',
      width: 100,
    },
    {
      title: '买方Pips forward delta（人民币计价）',
      dataIndex: 'buyerForwardCNY',
      key: 'buyerForwardCNY',
      width: 200,
    },
    {
      title: '买方Pips forward delta（美元计价）',
      dataIndex: 'buyerForwardUSD',
      key: 'buyerForwardUSD',
      width: 200,
    },
    {
      title: 'Pips spot gamma',
      dataIndex: 'PipsSpotGamma',
      key: 'PipsSpotGamma',
      width: 120,
    },
    {
      title: 'Pips forward gamma',
      dataIndex: 'PipsForwardGamma',
      key: 'PipsForwardGamma',
      width: 120,
    },
    {
      title: '买方Vega',
      dataIndex: 'buyerVega',
      key: 'buyerVega',
      width: 100,
    },
    {
      title: '买方Rho',
      dataIndex: 'buyerRho',
      key: 'buyerRho',
      width: 100,
    },
    {
      title: '买方Rho*',
      dataIndex: 'buyerRho2',
      key: 'buyerRho2',
      width: 100,
    },
    {
      title: '买方Theta',
      dataIndex: 'buyerTheta',
      key: 'buyerTheta',
      width: 100,
    },
    {
      title: '卖方Pips spot delta',
      dataIndex: 'sellerSpot',
      key: 'sellerSpot',
      width: 100,
    },
    {
      title: '卖方Vega',
      dataIndex: 'sellerVega',
      key: 'sellerVega',
      width: 100,
    },
    {
      title: '卖方Rho',
      dataIndex: 'sellerRho',
      key: 'sellerRho',
      width: 100,
    },
    {
      title: '卖方Rho*',
      dataIndex: 'sellerRho2',
      key: 'sellerRho2',
      width: 100,
    },
    {
      title: '卖方Theta',
      dataIndex: 'sellerTheta',
      key: 'sellerTheta',
      width: 100,
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
        <Form.Item label="日间/日终：" name="dayMiddle">
          <Select style={{ width: 220 }} defaultValue="日终">
            <Option value="日间">日间</Option>
            <Option value="日终">日终</Option>
          </Select>
        </Form.Item>
        <Form.Item label="产品名称：" name="productName">
          <Select style={{ width: 220 }} defaultValue="外汇询价即期">
            <Option value="外汇询价即期">外汇询价即期</Option>
            <Option value="外汇询价远期">外汇询价远期</Option>
            <Option value="外汇询价掉期">外汇询价掉期</Option>
            <Option value="外汇期权">外汇期权</Option>
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
      <Table columns={columns} dataSource={data} bordered scroll={{ x: 1000 }} />
    </div>
  );
};
export default dayStartAndEndResult;
