import React from 'react';
import { Button, DatePicker, Select, Space, Table } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import './index.less';

const { Option } = Select;
const Calender: React.FC = () => {
  const onChangeStar = (): void => {};

  const columns = [
    {
      title: '会员',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'USD',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: 'CNY',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: 'EUR',
      dataIndex: 'value3',
      key: 'value3',
    },
    {
      title: 'GBP',
      dataIndex: 'value4',
      key: 'value4',
    },
    {
      title: 'AUD',
      dataIndex: 'value5',
      key: 'value5',
    },
    {
      title: 'JPY',
      dataIndex: 'value6',
      key: 'value6',
    },
  ];
  const dataSource = [
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
    {
      id: '0001001',
      value1: '10000',
      value2: '9000',
      value3: '8000',
      value4: '7000',
      value5: '6000',
      value6: '5000',
    },
  ];

  return (
    <div className="outWrapColor">
      <div className="calendarSearh_child">
        <div className="search">
          <Space style={{ marginLeft: '20px' }}>
            <span>起始日期：</span>
            <DatePicker onChange={onChangeStar} />
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <span>币种选择：：</span>
            <Select defaultValue="1" style={{ width: 200 }}>
              <Option value="1">CNY</Option>
              <Option value="2">USD</Option>
            </Select>
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <Button type="primary" icon={<SearchOutlined />}>
              查询
            </Button>
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <Button type="primary" icon={<RollbackOutlined />}>
              导入
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
    </div>
  );
};

export default Calender;
