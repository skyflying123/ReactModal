import React from 'react';
import { DatePicker, Space, Select, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { InterfaceColumns } from './interface';

const { Option } = Select;
const Name: React.FC = () => {
  const onChangeStar = (): void => {};
  const onChangeEnd = (): void => {};

  const columns: ColumnsType<InterfaceColumns> = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '日历',
      dataIndex: 'calendar',
      key: 'calendar',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '工作类型',
      dataIndex: 'workType',
      key: 'workType',
    },
    {
      title: '审核状态',
      dataIndex: 'checkState',
      key: 'checkState',
    },
    {
      title: '操作',
      key: 'operation',
      render: (): JSX.Element => <a>查看</a>,
    },
  ];
  const dataSource: Array<InterfaceColumns> = [
    { id: '1', calendar: 'CNY_FI', date: '2020-09-03', workType: '工作日', checkState: '待审核' },
    { id: '2', calendar: 'CGK_FX', date: '2020-08-03', workType: '工作日', checkState: '待审核' },
    { id: '3', calendar: 'UNY_FI', date: '2020-07-03', workType: '节假日', checkState: '待审核' },
    { id: '4', calendar: 'CYC_FX', date: '2019-06-03', workType: '工作日', checkState: '待审核' },
    { id: '5', calendar: 'LNY_FI', date: '2019-02-03', workType: '节假日', checkState: '待审核' },
    { id: '6', calendar: 'DGP_FI', date: '2018-07-23', workType: '工作日', checkState: '待审核' },
    { id: '7', calendar: 'CNY_FI', date: '2018-04-14', workType: '节假日', checkState: '待审核' },
    { id: '8', calendar: 'CNY_FI', date: '2018-04-14', workType: '节假日', checkState: '待审核' },
    { id: '9', calendar: 'CNY_FI', date: '2018-04-14', workType: '节假日', checkState: '待审核' },
    { id: '10', calendar: 'CNY_FI', date: '2018-04-14', workType: '节假日', checkState: '待审核' },
  ];

  return (
    <div className="calendarSearh_child">
      <div className="search">
        <Space style={{ marginLeft: '20px' }}>
          <span>起始日期：</span>
          <DatePicker onChange={onChangeStar} />
        </Space>
        <Space style={{ marginLeft: '20px' }}>
          <span>截止日期：</span>
          <DatePicker onChange={onChangeEnd} />
        </Space>
        <Space style={{ marginLeft: '20px' }}>
          <span>审核状态：</span>
          <Select defaultValue="1" style={{ width: 130 }}>
            <Option value="1">待审核</Option>
            <Option value="2">审核通过</Option>
            <Option value="3">审核拒绝</Option>
          </Select>
        </Space>
        <Space style={{ marginLeft: '20px' }}>
          <Button type="primary" icon={<SearchOutlined />}>
            查询
          </Button>
        </Space>
      </div>
      <div className="tableConten">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 10, total: 200, showQuickJumper: true }}
        />
      </div>
    </div>
  );
};

export default Name;
