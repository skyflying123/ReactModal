import React from 'react';
import { Table, Select } from 'antd';

const Table3: React.FC = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '货币的',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '汇率格式',
      dataIndex: 'value',
      key: 'value',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} />
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: () => <a>编辑</a>,
    },
  ];
  const data = [
    { index: '1', project: 'TYD/CNY', value: ['全部', '值1', '值2'] },
    { index: '2', project: 'USD/CNY', value: ['全部', '值1', '值2'] },
    { index: '3', project: 'DGF', value: ['全部', '值1', '值2'] },
    { index: '4', project: 'GER', value: ['全部', '值1', '值2'] },
    { index: '5', project: 'TRR', value: ['全部', '值1', '值2'] },
    { index: '6', project: 'UJF', value: ['全部', '值1', '值2'] },
    { index: '7', project: 'ERE', value: ['全部', '值1', '值2'] },
    { index: '8', project: 'TYY', value: ['全部', '值1', '值2'] },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table3;
