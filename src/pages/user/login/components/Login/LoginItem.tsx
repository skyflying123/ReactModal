import React, { useState, useCallback, useEffect } from 'react';
import omit from 'omit.js';
// import { getCaptcha } from '@/services/login';
// import CountDownButton from '@/components/CountDownButton';
import { Button, Col, Input, Row, Form, message } from 'antd';
import { FormItemProps } from 'antd/es/form/FormItem';
import { LoginItemProps, LoginItemType } from './interfaces';
import ItemMap from './map';
import LoginContext from './LoginContext';
import styles from './index.less';

const FormItem = Form.Item;

const getFormItemOptions = ({ onChange, defaultValue, customProps = {}, rules }: LoginItemProps) => {
  const options: {
    rules: FormItemProps['rules'];
    onChange?: typeof onChange;
    initialValue?: typeof defaultValue;
  } = {
    rules: rules || (customProps.rules as FormItemProps['rules']),
  };

  if (onChange) {
    options.onChange = onChange;
  }

  if (defaultValue) {
    options.initialValue = defaultValue;
  }

  return options;
};

const LoginItem: React.FC<LoginItemProps> = (props) => {
  const { countDown } = props;
  // 验证码倒计时计数器
  const [count, setCount] = useState<number>(countDown || 0);
  const [timing, setTiming] = useState(false);

  // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil
  const {
    onChange,
    customProps,
    defaultValue,
    rules,
    name,
    getCaptchaButtonText,
    getCaptchaSecondText,
    updateActive,
    type,
    tabUtil,
    ...restProps
  } = props;

  const onGetCaptcha = useCallback(async (mobile: string) => {
    /*
    const res = await getCaptcha(mobile);

    if (res === false) {
      return;
    }
    console.log(res);
    */
    // message.success(`获取验证码成功！验证码为：${res.data.code}`);
    message.success(`获取验证码成功！${mobile || ''}验证码为：1234`);
    // setCaptCha(false);
  }, []);

  useEffect(() => {
    let interval = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setCount((preSecond) => {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval);
            // 重置秒数
            return countDown || 60;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing]);

  if (!name) {
    return null;
  }

  // get getFieldDecorator props

  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  if (type === 'Captcha') {
    const inputProps = omit(otherProps, ['onGetCaptcha', 'countDown']);
    return (
      <FormItem shouldUpdate noStyle rules={[]}>
        {({ getFieldValue }) => (
          <Row gutter={8}>
            <Col span={16}>
              <FormItem name={name} {...options}>
                <Input {...customProps} {...inputProps} />
              </FormItem>
            </Col>
            <Col span={8}>
              <Button
                disabled={timing}
                className={styles.getCaptcha}
                size="large"
                onClick={() => {
                  const value = getFieldValue('mobile');
                  onGetCaptcha(value);
                }}
              >
                {timing ? `${count} 秒` : '获取验证码'}
              </Button>
            </Col>
          </Row>
        )}
      </FormItem>
    );
  }

  return (
    <FormItem name={name} {...options}>
      <Input {...customProps} {...otherProps} />
    </FormItem>
  );
};

const LoginItems: LoginItemType = {} as LoginItemType;

Object.keys(ItemMap).forEach((key) => {
  const item = ItemMap[key as keyof typeof ItemMap];

  // eslint-disable-next-line react/display-name
  LoginItems[key as keyof typeof ItemMap] = (props) => (
    <LoginContext.Consumer>
      {(context) => (
        <LoginItem
          customProps={item.props}
          rules={item.rules}
          {...props}
          type={key}
          {...context}
          updateActive={context.updateActive}
        />
      )}
    </LoginContext.Consumer>
  );
});
export default LoginItems;
