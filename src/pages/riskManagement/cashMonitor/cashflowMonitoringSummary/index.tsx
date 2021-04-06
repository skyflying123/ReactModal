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
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
    },
    {
      id: '0001001',
      value1: '20000',
      value2: '12000',
      value3: '11000',
      value4: '23000',
      value5: '2000',
      value6: '9000',
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
            <span>汇总内容：：</span>
            <Select defaultValue="1" style={{ width: 200 }}>
              <Option value="1">超出阈值天数汇总</Option>
              <Option value="2">最大现金流汇总</Option>
              <Option value="3">最近超出天数汇总</Option>
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
