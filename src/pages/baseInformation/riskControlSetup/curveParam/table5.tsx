import React from 'react';
import { Table, Select } from 'antd';

const Table5: React.FC = () => {
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
    { index: '1', project: '报价格式', value: ['全部', '值1', '值2'] },
    { index: '2', project: 'ATM 格式', value: ['全部', '值1', '值2'] },
    { index: '3', project: 'Delta 格式', value: ['全部', '值1', '值2'] },
    { index: '4', project: 'Smile插值', value: ['全部', '值1', '值2'] },
    { index: '5', project: '波动率相关系数（β）', value: ['全部', '值1', '值2'] },
    { index: '6', project: '插值点', value: ['全部', '值1', '值2'] },
    { index: '7', project: '期限插值', value: ['全部', '值1', '值2'] },
    { index: '8', project: '期限外插方法', value: ['全部', '值1', '值2'] },
    { index: '9', project: '基准货币营业日历', value: ['全部', '值1', '值2'] },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default Table5;
