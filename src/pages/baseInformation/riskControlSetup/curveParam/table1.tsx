import React from 'react';
import { Table, Select } from 'antd';

const Table1: React.FC = () => {
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
      render: (tags: any): JSX.Element => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} onChange={(): void => {}} />
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
    { index: '1', project: '输入曲线类型', value: ['全部', '值1', '值2'] },
    { index: '2', project: '适用营业日历', value: ['全部', '值1', '值2'] },
    { index: '3', project: '营业日准则', value: ['全部', '值1', '值2'] },
    { index: '4', project: '起息日', value: ['全部', '值1', '值2'] },
    { index: '5', project: '计息方式规则', value: ['全部', '值1', '值2'] },
    { index: '6', project: '计息方式规则', value: ['全部', '值1', '值2'] },
    { index: '7', project: '计息方式规则', value: ['全部', '值1', '值2'] },
    { index: '8', project: '利率报价格式', value: ['全部', '值1', '值2'] },
  ];

  return (
    <div>
      <Table size="small" columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table1;
