import React, { useState } from 'react';
import { Button, DatePicker, Select, Space, Table, Tabs } from 'antd';
import { SendOutlined, FormOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const Page1: React.FC<{ changePageState: Function }> = ({ changePageState }) => {
  const [tableState, setTableState] = useState([1]);
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '数据项目',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '进度',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: '应急上传',
      key: 'operation',
      render: (): JSX.Element => {
        return <FormOutlined />;
      },
    },
  ];
  const dataSource = [
    {
      id: '1',
      value1: '报价数据',
      value2: '100%',
    },
    {
      id: '2',
      value1: '外汇交易数据',
      value2: '100%',
    },
    {
      id: '3',
      value1: '行权数据',
      value2: '100%',
    },
    {
      id: '4',
      value1: '差额行权现金流',
      value2: '100%',
    },
    {
      id: '5',
      value1: '未完成结算现金流',
      value2: '100%',
    },
  ];
  const columns1 = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '处理项目',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: '进度',
      dataIndex: 'value2',
      key: 'value2',
    },
  ];
  const dataSource1 = [
    {
      id: '1',
      value1: '构造人民币贴现利率曲线',
      value2: '100%',
    },
    {
      id: '2',
      value1: '各币种即期汇率处理',
      value2: '',
    },
    {
      id: '3',
      value1: '构建美元隐含利率曲线',
      value2: '100%',
    },
    {
      id: '4',
      value1: '构建隐含波动率曲面',
      value2: '',
    },
    {
      id: '5',
      value1: '日终场景生成',
      value2: '100%',
    },
  ];

  const tableClassState = (num: number): string => {
    if (tableState.length >= num) {
      return '';
    }
    return 'displayStateNone';
  };

  return (
    <div className="RiskDayWrap_Page1">
      <div className="pageTop">
        <Space style={{ marginLeft: '20px' }}>
          <span>系统估值日期：</span>
          <DatePicker />
          <span style={{ marginLeft: '20px' }}>系统当前状态：</span>
          <Select defaultValue="1" style={{ width: 130 }}>
            <Option value="1">日终</Option>
            <Option value="2">日间</Option>
          </Select>
        </Space>
        <Space style={{ marginLeft: '20px' }}>
          <Button
            type="primary"
            onClick={(): void => {
              changePageState(2);
            }}
          >
            应急日切
          </Button>
        </Space>
      </div>
      <div className="pageMid">
        <span
          onClick={(): void => {
            setTableState([1, 2]);
          }}
        >
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <div className="tableBottomText">
            <span>数据接收</span>
            <Space>
              <span>处理状态：</span>
              <span>已完成</span>
            </Space>
          </div>
        </span>
        <span className="arrow">
          <SendOutlined className={tableClassState(2)} />
        </span>
        <span
          onClick={(): void => {
            setTableState([1, 2, 3]);
          }}
        >
          <div className={tableClassState(2)}>
            <Table dataSource={dataSource1} columns={columns1} pagination={false} />
            <div className="tableBottomText">
              <span>场景构建</span>
              <Space>
                <span>处理状态：</span>
                <span>处理中</span>
              </Space>
            </div>
          </div>
        </span>
        <span className="arrow">
          <SendOutlined className={tableClassState(3)} />
        </span>
        <span>
          <div className={tableClassState(3)}>
            <Table dataSource={dataSource1} columns={columns1} pagination={false} />
            <div className="tableBottomText">
              <span>敞口计算</span>
              <Space>
                <span>处理状态：</span>
                <span>未开始</span>
              </Space>
            </div>
          </div>
        </span>
      </div>
      <div className="pageBottom">
        <Tabs defaultActiveKey="1">
          <TabPane tab="处理日志" key="1" />
          <TabPane tab="异常日志" key="2" />
        </Tabs>
      </div>
    </div>
  );
};

export default Page1;
