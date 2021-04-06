import React from 'react';
import { Table, Select, Form, Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import moment from 'moment';
import { ForeignColumn } from './interface';

const { Option } = Select;
const data = [
  {
    id: '1',
    column2: '',
    column3: '',
  },
  {
    id: '2',
    column2: '',
    column3: '',
  },
  {
    id: '3',
    column2: '',
    column3: '',
  },
  {
    id: '4',
    column2: '',
    column3: '',
  },
  {
    id: '5',
    column2: '',
    column3: '',
  },
  {
    id: '6',
    column2: '',
    column3: '',
  },
  {
    id: '7',
    column2: '',
    column3: '',
  },
  {
    id: '8',
    column2: '',
    column3: '',
  },
];
const contractElementQuery: React.FC = () => {
  const columns: ColumnProps<ForeignColumn>[] = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: 'column2',
      dataIndex: 'column2',
      key: 'column2',
    },
    {
      title: 'column3',
      dataIndex: 'column3',
      key: 'column3',
    },
  ];
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <Form style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item name="queryDate" label="查询日期">
          <DatePicker defaultValue={moment('2018-12-01', dateFormat)} format={dateFormat} style={{ width: 220 }} />
        </Form.Item>
        <Form.Item label="日间/日终：" name="dayMiddle">
          <Select style={{ width: 220 }}>
            <Option value="日间">日间</Option>
            <Option value="日终">日终</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />}>
            查询
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default contractElementQuery;
