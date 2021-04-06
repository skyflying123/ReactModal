import React from 'react';
import { Table } from 'antd';

const Table1: React.FC = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '货币对',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '调整因子',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: '操作',
      key: 'action',
      render: (): JSX.Element => <a>编辑</a>,
    },
  ];
  const data = [
    { index: '1', value1: 'USDCNY', value2: '100%' },
    { index: '2', value1: 'EURCNY', value2: '100%' },
    { index: '3', value1: 'JPYCNY', value2: '100%' },
    { index: '4', value1: 'GBPCNY', value2: '100%' },
    { index: '5', value1: 'HKDCNY', value2: '100%' },
    { index: '6', value1: 'AUDCNY', value2: '100%' },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table1;
