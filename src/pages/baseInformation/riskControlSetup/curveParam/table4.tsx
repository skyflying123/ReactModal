import React from 'react';
import { Table, Select } from 'antd';

const Table4: React.FC = () => {
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
    { index: '1', project: '基准货币营业日历', value: ['全部', '值1', '值2'] },
    { index: '2', project: '非基准货币营业日历', value: ['全部', '值1', '值2'] },
    { index: '3', project: '插值方法', value: ['全部', '值1', '值2'] },
    { index: '4', project: '外插方法', value: ['全部', '值1', '值2'] },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table4;
