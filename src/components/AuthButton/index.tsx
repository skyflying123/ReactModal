import React from 'react';
import { Button } from 'antd';
import useAuthData from '@/models/useAuthData';
import { isEmpty } from 'lodash';
import { history } from 'umi';
import { AuthButtonProps } from './interfaces';

// 验权
const checkAuth = (buttonId: string) => {
  let isPass = false;
  const { authData } = useAuthData();

  if (!buttonId || !authData?.operateKeyWithPath || isEmpty(authData?.operateKeyWithPath)) {
    return isPass;
  }
  if (authData.operateKeyWithPath[history.location.pathname].toLowerCase().indexOf(buttonId.toLowerCase()) > -1) {
    isPass = true;
    return isPass;
  }
  return isPass;
};

const AuthButtons: React.FC<AuthButtonProps> = ({ buttons }) => {
  if (!buttons || buttons.length < 0) {
    return null;
  }

  return (
    <>
      {buttons.map((button) => {
        const { id, ...buttonProps } = button;
        if (checkAuth(id)) {
          return (
            <Button {...buttonProps} key={buttonProps.key || buttonProps.name}>
              {button.name}
            </Button>
          );
        }
        return null;
      })}
    </>
  );
};

export default AuthButtons;
