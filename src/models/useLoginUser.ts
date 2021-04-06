import { useState } from 'react';
import { createModel } from 'hox';
import { useSessionStorageState } from '@umijs/hooks';

import { UserLoginResponse as LoginRes } from '@/services/apis/user/user';

const useLoginUser = () => {
  const [loginUser, setLoginUser] = useState<LoginRes['data']>({} as LoginRes['data']);

  const [, setSessionLoginUser] = useSessionStorageState<LoginRes['data']>('currentUser');

  const changeLoginUser = (newLoginUser: LoginRes['data'] = {} as LoginRes['data']) => {
    setSessionLoginUser(newLoginUser);
    setLoginUser(newLoginUser);
  };

  return { loginUser, changeLoginUser };
};

export default createModel(useLoginUser);
