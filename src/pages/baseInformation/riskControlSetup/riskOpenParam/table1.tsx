import React from 'react';
import { Table, Space, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Table1: React.FC = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '等级',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '起点',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: '终点',
      dataIndex: 'value3',
      key: 'value3',
    },
    {
      title: '保证金调整倍率',
      dataIndex: 'value4',
      key: 'value4',
    },
    {
      title: '操作',
      key: 'action',
      render: (): JSX.Element => <a>编辑</a>,
    },
  ];
  const data = [
    { index: '1', value1: '1级', value2: '', value3: '', value4: '' },
    { index: '2', value1: '2级', value2: '', value3: '', value4: '' },
    { index: '3', value1: '3级', value2: '', value3: '', value4: '' },
    { index: '4', value1: '4级', value2: '', value3: '', value4: '' },
    { index: '5', value1: '5级', value2: '', value3: '', value4: '' },
  ];

  return (
    <div>
      <Space style={{ marginBottom: '16px' }}>
        <span>等级：</span>
        <Input style={{ width: '180px' }} defaultValue="5" />
        <SettingOutlined />
      </Space>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table1;
