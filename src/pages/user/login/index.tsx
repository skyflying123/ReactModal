import React, { useState } from 'react';
import apisFunc from '@/services';
import { UserLoginResponse as LoginRes, UserLoginRequest as LoginReq } from '@/services/apis/user/user';
import useLoginUser from '@/models/useLoginUser';
import { getPageQuery } from '@/utils';
import { history } from 'umi';
import baseConfig from '@config/baseConfig';
import store from '@/utils/reduxStore';
import logp from '@/../public/logo.png';
import LoginForm from './components/Login';
import styles from './style.less';

console.log(logp);
const { Tab, UserName, Password, Submit } = LoginForm;

const Login: React.FC = () => {
  // 是否自动登录
  // const [autoLogin, setAutoLogin] = useState(true);
  // 登录类型
  const [type, setType] = useState('account');

  // 当前登录model
  const { changeLoginUser } = useLoginUser();

  const { loading } = apisFunc.login<LoginRes, LoginReq>({
    manual: true,
    onSuccess: (data) => {
      changeLoginUser({
        ...data,
      });

      const urlParams = new URL(window.location.href);
      const params = getPageQuery();
      let { redirect } = params as { redirect: string };

      if (redirect) {
        const redirectUrlParams = new URL(redirect);

        if (redirectUrlParams.origin === urlParams.origin) {
          redirect = redirect.substr(urlParams.origin.length);

          if (redirect.match(/^\/.*#/)) {
            redirect = redirect.substr(redirect.indexOf('#') + 1);
          }
        } else {
          window.location.href = baseConfig.home.default;
          return;
        }
      }

      if (redirect === '/') {
        redirect = baseConfig.home.default;
      }

      history.replace(redirect || baseConfig.home.default);
    },
  });

  const changeRedux = (): void => {
    store.dispatch({
      type: 'CHANGE_USER_NAME',
      name: '改变',
    });
    console.log(store.getState());
  };

  const handleSubmit = (): void => {
    // run(values);

    changeLoginUser({
      userId: '10086',
      userName: '前端管理员',
      userRole: [],
      token: 'token',
    });

    const urlParams = new URL(window.location.href);
    const params = getPageQuery();
    let { redirect } = params as { redirect: string };

    if (redirect) {
      const redirectUrlParams = new URL(redirect);

      if (redirectUrlParams.origin === urlParams.origin) {
        redirect = redirect.substr(urlParams.origin.length);

        if (redirect.match(/^\/.*#/)) {
          redirect = redirect.substr(redirect.indexOf('#') + 1);
        }
      } else {
        window.location.href = baseConfig.home.default;
        return;
      }
    }

    if (redirect === '/') {
      redirect = baseConfig.home.default;
    }

    history.replace(redirect || baseConfig.home.default);
  };

  return (
    <div className={styles.main}>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          <UserName
            name="userName"
            placeholder="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
              {
                type: 'string',
                max: 20,
                message: '最大长度超过限制',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Tab>
        <Submit loading={loading}>登录</Submit>
        <div onClick={changeRedux}>redux</div>
      </LoginForm>
    </div>
  );
};

export default Login;
// 当月日历
// <script>
//   var date = new Date();
//   //当前是哪一年
//   var year = date.getFullYear();
//   //当前是哪个月，注意这里的月是从0开始计数的
//   var month = date.getMonth();
//
//   //当前月的第一天的日期
//   var firstDay = new Date(year,month,1);
//   //第一天是星期几
//   var weekday = firstDay.getDay();
//
//   //求当前月一共有多少天
//   //new Date(year,month+1,0) ： month+1是下一个月，day为0代表的是上一个月的最后一天，即我们所需的当前月的最后一天。
//   //getDate（）则返回这个日期对象是一个月中的第几天，我们由最后一天得知这个月一共有多少天
//   var days = new Date(year,month+1,0).getDate();
//
//   var res = "";
//
//   /*
//   //周日换行
//   var title = '日 一 二 三 四 五 六';
//   for(var i=0;i<weekday;i++){
//   res+="  ";
//   }
//
//   for(var j=1;j<=days ;j++){
//   res += j+"_";
//   weekday++;
//
//   //如果是周日则换行
//   if(weekday%7 == 0){
//   weekday = 0;
//   res += '\n';
// }
// }
//   */
// //周一换行
//   var title = '一 二 三 四 五 六 日';
//   for(var i=1;i<weekday;i++){
//   res+="空格";
// }
//
//   for(var j=1;j<=days ;j++){
//   res += j+"_";
//   weekday++;
//
//   //如果是周日则换行
//   if(weekday%7 == 1){
//   weekday = 1;
//   res += '\n';
// }
// }
//
//   console.log(title);
//   console.log(res);
//   </script>
// a = {
//   i: 1,
//   toString: () => {
//     return a.i++;
//   },
// };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj = new Object();
const result = Person.call(obj);
obj.__proto__ = Person.prototype;
