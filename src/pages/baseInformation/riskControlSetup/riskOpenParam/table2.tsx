import React from 'react';
import { Table, Select } from 'antd';

const Table2: React.FC = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '值',
      dataIndex: 'value',
      key: 'value',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} onChange={() => {}} />
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (): JSX.Element => <a>编辑</a>,
    },
  ];
  const data = [
    { index: '1', project: '盯市调整因子', value: ['全部', '值1', '值2'] },
    { index: '2', project: '回溯期限', value: ['全部', '值1', '值2'] },
    { index: '3', project: '置信度', value: ['全部', '值1', '值2'] },
    { index: '4', project: '平仓期限', value: ['全部', '值1', '值2'] },
    { index: '5', project: '敞口调整因子', value: ['全部', '值1', '值2'] },
    { index: '6', project: '敞口计算范围', value: ['全部', '值1', '值2'] },
  ];

  return (
    <div style={{ marginTop: '48px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table2;
