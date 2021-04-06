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
      title: '期限',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '营业日准则',
      dataIndex: 'value2',
      key: 'value2',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} />
        </>
      ),
    },
    {
      title: '起息日',
      dataIndex: 'value3',
      key: 'value3',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }}>
            {/* {tags.map(tag => {*/}
            {/*  <Option value={tag}>tag</Option>*/}
            {/* })}*/}
          </Select>
        </>
      ),
    },
    {
      title: '计息方式规则',
      dataIndex: 'value4',
      key: 'value4',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} onChange={() => {}}>
            {/* {tags.map(tag => {*/}
            {/*  <Option value={tag}>tag</Option>*/}
            {/* })}*/}
          </Select>
        </>
      ),
    },
    {
      title: '输入利率形式',
      dataIndex: 'value5',
      key: 'value5',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} onChange={() => {}}>
            {/* {tags.map(tag => {*/}
            {/*  <Option value={tag}>tag</Option>*/}
            {/* })}*/}
          </Select>
        </>
      ),
    },
    {
      title: '输出利率形式',
      dataIndex: 'value6',
      key: 'value6',
      render: (tags: any) => (
        <>
          <Select defaultValue={tags[0]} style={{ width: 120 }} onChange={() => {}}>
            {/* {tags.map(tag => {*/}
            {/*  <Option value={tag}>tag</Option>*/}
            {/* })}*/}
          </Select>
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
    {
      index: '1',
      value1: 'NO',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '2',
      value1: 'WE',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '3',
      value1: '#D',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '4',
      value1: '%G',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '5',
      value1: '4F',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '6',
      value1: '5O',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '7',
      value1: 'GO',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
    {
      index: '8',
      value1: 'GH',
      value2: ['全部', '值1', '值2'],
      value3: ['全部', '值1', '值2'],
      value4: ['全部', '值1', '值2'],
      value5: ['全部', '值1', '值2'],
      value6: ['全部', '值1', '值2'],
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table2;
