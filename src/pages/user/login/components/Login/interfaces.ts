import { FormInstance } from 'antd/es/form';
import { TabPaneProps } from 'antd/es/tabs';
import { FormItemProps } from 'antd/es/form/FormItem';
import { ButtonProps } from 'antd/es/button';
import { UserLoginRequest } from '@/services/apis/permission/permission';

export interface LoginSubmitProps extends ButtonProps {
  className?: string;
}
/** ************************Form*********************************************/
/**
 * 登录参数
 */
export interface LoginParamsType {
  // 用户名
  userName: string;
  // 密码
  password: string;
  // 手机号
  mobile: string;
  // 验证码
  captcha: string;
}

export interface LoginProps {
  // 活动的tab页
  activeKey?: string;
  // tab页改变函数
  onTabChange?: (key: string) => void;
  // 样式
  style?: React.CSSProperties;
  // 提交函数
  onSubmit?: (values: UserLoginRequest) => void;
  // 类名
  className?: string;
  // antd form组件实例
  from?: FormInstance;
  // children
  children: React.ReactElement<any>[];
}

/**
 * 登录Form组件需要的props
 */
export interface LoginType extends React.FC<LoginProps> {
  // Tab组件
  Tab: React.FunctionComponent<LoginTabProps>;
  Submit: React.FC<LoginSubmitProps>;
  UserName: React.FunctionComponent<LoginItemProps>;
  Password: React.FunctionComponent<LoginItemProps>;
  Mobile: React.FunctionComponent<LoginItemProps>;
  Captcha: React.FunctionComponent<LoginItemProps>;
}

/** ************************Context*********************************************/
/**
 * 登录上下文内容
 */
export interface LoginContextProps {
  // tab工具函数集合
  tabUtil?: {
    // 新增Tab
    addTab: (id: string) => void;
    // 移除Tab
    removeTab: (id: string) => void;
  };
  // 更新活动的Tab
  updateActive?: (activeItem: { [key: string]: string } | string) => void;
}
/** ************************Tab*********************************************/
/**
 * Tab组件props
 */
export interface LoginTabProps extends TabPaneProps {
  tabUtil?: LoginContextProps['tabUtil'];
  active?: boolean;
}

/** ************************LoginItem*********************************************/
/**
 * Item组件props
 */
export interface LoginItemProps extends Partial<FormItemProps> {
  name?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  buttonText?: React.ReactNode;
  countDown?: number;
  getCaptchaButtonText?: string;
  getCaptchaSecondText?: string;
  updateActive?: LoginContextProps['updateActive'];
  type?: string;
  defaultValue?: string;
  customProps?: { [key: string]: unknown };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tabUtil?: LoginContextProps['tabUtil'];
  onGetCaptcha?: any;
}

export type WrappedLoginItemProps = LoginItemProps;

export interface LoginItemType {
  UserName: React.FC<WrappedLoginItemProps>;
  Password: React.FC<WrappedLoginItemProps>;
  Mobile: React.FC<WrappedLoginItemProps>;
  Captcha: React.FC<WrappedLoginItemProps>;
}
