import React from 'react';
import { Button, Select, Space, Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.less';

const { Option } = Select;
const Calender: React.FC = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '导入操作ID',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '数据类型',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: '操作类型',
      dataIndex: 'value6',
      key: 'value6',
    },
    {
      title: '操作用户',
      dataIndex: 'value3',
      key: 'value3',
    },
    {
      title: '操作时间',
      dataIndex: 'value4',
      key: 'value4',
    },
    {
      title: '数据状态',
      dataIndex: 'value5',
      key: 'value5',
    },
    {
      title: '操作',
      key: 'operation',
      render: (): JSX.Element => {
        return (
          <Space>
            <a>删除</a>
            <a>编辑</a>
          </Space>
        );
      },
    },
  ];
  const dataSource = [
    {
      id: '1',
      value1: '2020080901',
      value2: '日终历史场景',
      value3: 'user',
      value4: '20200809 09:09:09',
      value5: '待审核',
      value6: '导入',
    },
    {
      id: '2',
      value1: '2020080802',
      value2: '日终历史场景',
      value3: 'user',
      value4: '20200501 09:09:09',
      value5: '已审核',
      value6: '导入',
    },
  ];

  return (
    <div className="outWrapColor">
      <div className="calendarSearh_child">
        <div className="search">
          <Space style={{ marginLeft: '20px' }}>
            <span>审核类型：</span>
            <Select defaultValue="1" style={{ width: 130 }}>
              <Option value="1">全部</Option>
            </Select>
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <span>审核状态：</span>
            <Select defaultValue="1" style={{ width: 130 }}>
              <Option value="1">全部</Option>
              <Option value="2">审核通过</Option>
              <Option value="3">审核拒绝</Option>
            </Select>
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <Input placeholder="请输入导入操作id" />
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
    </div>
  );
};

export default Calender;
