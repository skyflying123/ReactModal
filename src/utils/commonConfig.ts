import { TableProps, ColumnProps } from 'antd/lib/table';
import { TreeProps } from 'antd/lib/tree';
import { ModalProps } from 'antd/lib/modal';
import { ButtonProps } from 'antd/lib/button';
import { FormProps, FormItemProps } from 'antd/lib/form';

export const antdCommonConfig: {
  modal: ModalProps & {
    small: number;
    middle: number;
    larger: number;
  };
  table: TableProps<any>;
  tableItem: ColumnProps<any>;
  tree: TreeProps;
  button: ButtonProps;
  form: FormProps;
  formItem: Omit<FormItemProps, 'children'> & {
    oneLayout: { labelCol: FormItemProps['labelCol']; wrapperCol: FormItemProps['wrapperCol'] };
    twoLayout: { labelCol: FormItemProps['labelCol']; wrapperCol: FormItemProps['wrapperCol'] };
    threeLayout: { labelCol: FormItemProps['labelCol']; wrapperCol: FormItemProps['wrapperCol'] };
    fouryout: { labelCol: FormItemProps['labelCol']; wrapperCol: FormItemProps['wrapperCol'] };
  };
} = {
  modal: {
    // 适用于表单一列布局,且label最大支持5个中文,无法满足请自行增加with
    small: 680,
    // 适用于表单两列布局,且label最大支持6个中文,无法满足请自行增加with
    middle: 780,
    // 适用于表单三/四列布局,三列label最大支持7个中文,四列label最大支持6个中文,无法满足请自行增加with
    larger: 880,
  },
  table: {
    size: 'small',
  },
  tableItem: {},
  tree: {},
  button: {},
  form: {},
  formItem: {
    oneLayout: {
      labelCol: {
        sm: { span: 3 },
      },
      wrapperCol: {
        sm: { span: 21 },
      },
    },
    twoLayout: {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 18 },
      },
    },
    threeLayout: {
      labelCol: {
        sm: { span: 9 },
      },
      wrapperCol: {
        sm: { span: 15 },
      },
    },
    fouryout: {
      labelCol: {
        sm: { span: 12 },
      },
      wrapperCol: {
        sm: { span: 12 },
      },
    },
  },
};
