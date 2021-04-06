import { ButtonProps } from 'antd/lib/button';
import { OPERA_TYPE } from '@/utils/constant';

export interface AuthButtonItemProps extends ButtonProps {
  name: string;
  id: OPERA_TYPE;
  key?: string;
}

export type AuthButtonProps = {
  buttons: AuthButtonItemProps[];
};
