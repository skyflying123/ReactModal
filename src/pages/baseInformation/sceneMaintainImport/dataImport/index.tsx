import React from 'react';
import { Button, DatePicker, Space, Table } from 'antd';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';
import './index.less';

const Calender: React.FC = () => {
  const onChangeStar = (): void => {};
  const onChangeEnd = (): void => {};

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '导入操作ID',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '数据类型',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: '操作用户',
      dataIndex: 'value3',
      key: 'value3',
    },
    {
      title: '操作时间',
      dataIndex: 'value4',
      key: 'value4',
    },
    {
      title: '数据状态',
      dataIndex: 'value5',
      key: 'value5',
    },
    {
      title: '操作',
      key: 'operation',
      render: (): JSX.Element => {
        return (
          <Space>
            <a>删除</a>
            <a>编辑</a>
          </Space>
        );
      },
    },
  ];
  const dataSource = [
    {
      id: '1',
      value1: '2020080901',
      value2: '日终历史场景',
      value3: 'user',
      value4: '20200809 09:09:09',
      value5: '待审核',
    },
    {
      id: '2',
      value1: '2020080802',
      value2: '压力测试参数',
      value3: 'user',
      value4: '20200501 09:09:09',
      value5: '已审核',
    },
  ];

  return (
    <div className="outWrapColor">
      <div className="calendarSearh_child">
        <div className="search">
          <Space style={{ marginLeft: '20px' }}>
            <span>起始日期：</span>
            <DatePicker onChange={onChangeStar} />
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <span>截止日期：</span>
            <DatePicker onChange={onChangeEnd} />
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <Button type="primary" icon={<SearchOutlined />}>
              查询
            </Button>
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <Button type="primary" icon={<RollbackOutlined />}>
              导出
            </Button>
          </Space>
        </div>
        <div className="tableConten">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10, total: 200, showQuickJumper: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
