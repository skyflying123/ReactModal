import React from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { JobInfoColumn } from './interface';

const data = [
  {
    id: '1',
    name: '超级管理员岗',
    explain: '系统内置的管理员岗位功能',
    type: '内置',
    status: '已审核',
  },
  {
    id: '1',
    name: '自定义岗位',
    explain: '用户自己定义的岗位',
    type: '自定义',
    status: '待审核',
  },
];
const jobInfo: React.FC = () => {
  const columns: ProColumns<JobInfoColumn>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 72,
    },
    {
      title: '岗位名称',
      width: 80,
      dataIndex: 'name',
    },
    {
      title: '岗位说明',
      width: 80,
      dataIndex: 'explain',
    },
    {
      title: '岗位类型',
      width: 80,
      dataIndex: 'type',
    },
    {
      title: '岗位状态',
      width: 80,
      dataIndex: 'status',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [<a key="a">删除</a>, <a key="b">编辑</a>],
    },
  ];
  // const { run: getjobInfoList } = apisFunc.getjobInfoList<GetJobInfoRes, GetJobInfoReq>({
  //   onSuccess: (value) => {
  //     console.log(value);
  //   },
  // });
  return (
    <ProTable
      columns={columns}
      request={() => {
        return ({
          data,
        } as unknown) as Promise<{ data: typeof data }>;
      }}
      style={{ backgroundColor: 'white' }}
    />
  );
};
export default jobInfo;
