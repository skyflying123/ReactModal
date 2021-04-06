import React from 'react';
import { Table, Space, Input, Select, Form, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import { UserVerifyInfoColumn } from './interface';

const { Option } = Select;
const data = [
  {
    id: '2020080901',
    contentType: '岗位维护',
    operateType: '变更',
    modifyUser: 'user',
    modifyTime: '2020-08-09 09:09:09',
    verifyState: '待审核',
  },
  {
    id: '2020080902',
    contentType: '岗位维护',
    operateType: '变更',
    modifyUser: 'user',
    modifyTime: '2020-08-09 09:09:09',
    verifyState: '审核拒绝',
  },
  {
    id: '2020080903',
    contentType: '岗位维护',
    operateType: '变更',
    modifyUser: 'user',
    modifyTime: '2020-08-09 09:09:09',
    verifyState: '审核通过',
  },
];
const userVerifyInfo: React.FC = () => {
  const columns: ColumnProps<UserVerifyInfoColumn>[] = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '变更操作ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '变更内容类别',
      dataIndex: 'contentType',
      key: 'contentType',
    },
    {
      title: '操作类型',
      dataIndex: 'operateType',
      key: 'operateType',
    },
    {
      title: '修改用户',
      dataIndex: 'modifyUser',
      key: 'modifyUser',
    },
    {
      title: '修改时间',
      dataIndex: 'modifyTime',
      key: 'modifyTime',
    },
    {
      title: '审核状态',
      dataIndex: 'verifyState',
      key: 'verifyState',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>删除</a>
          <a>编辑</a>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Form style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item name="operateType">
          <Input placeholder="请输入变更操作ID" style={{ width: 220 }} />
        </Form.Item>
        <Form.Item label="变更内容类别：" name="contentType">
          <Select style={{ width: 220 }}>
            <Option value="岗位维护1">岗位维护1</Option>
            <Option value="岗位维护2">岗位维护2</Option>
            <Option value="岗位维护3" disabled>
              岗位维护3
            </Option>
            <Option value="岗位维护4">岗位维护4</Option>
          </Select>
        </Form.Item>
        <Form.Item label="审核状态：" name="verifyState">
          <Select style={{ width: 220 }}>
            <Option value="待审核">待审核</Option>
            <Option value="审核拒绝">审核拒绝</Option>
            <Option value="审核通过">审核通过</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />}>
            查询
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default userVerifyInfo;
