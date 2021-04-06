import React from 'react';
import { Table, Space, Input, Form, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import { UserInfoColumn } from './interface';

const data = [
  {
    id: '1',
    name: '李小伟',
    userName: 'user',
    email: 'lixiaowei@163.com',
    verifyTime: '2020-08-01',
    logoutTime: '2020-08-01',
    accountState: '已审核',
  },
  {
    id: '2',
    name: '张伟',
    userName: 'user1',
    email: 'zhangwei@163.com',
    verifyTime: '2020-09-01',
    logoutTime: '2020-09-01',
    accountState: '待审核',
  },
  {
    id: '3',
    name: '张三',
    userName: 'user2',
    email: '1@163.com',
    verifyTime: '2020-08-02',
    logoutTime: '2020-08-02',
    accountState: '已注销',
  },
];
const userInfo: React.FC = () => {
  const columns: ColumnProps<UserInfoColumn>[] = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '审核日期',
      dataIndex: 'verifyTime',
      key: 'verifyTime',
    },
    {
      title: '注销日期',
      dataIndex: 'logoutTime',
      key: 'logoutTime',
    },
    {
      title: '账户状态',
      dataIndex: 'accountState',
      key: 'accountState',
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
        <Form.Item name="name">
          <Input placeholder="姓名" style={{ width: 220 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<PlusCircleOutlined />}>
            新增
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default userInfo;
