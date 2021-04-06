import { request } from '@@/plugin-request/request';

export interface BaseSendMessage {
  // 发送类型
  type: undefined;
  // 发送的数据
  data: undefined;
}

export interface SubTeyp extends BaseSendMessage {
  request: typeof request;
}

export interface OnMessageType {
  // 所有消息都要触发的回调
  all: (((e?: MessageEvent) => void) | never | undefined)[];
  // 指定消息类型才触发的回调
  specified: {
    // key为消息类型
    [M in string]: {
      // 非指定组件调用
      initiative: (((e?: MessageEvent) => void) | never | undefined)[];
      // 指定组件调用（这里会通过ws推送消息中的自定义内容进行token匹配）
      // 匹配原则是indexOf(token) > -1
      passive: {
        // key为指定组件的token
        [T in string]: (data: any) => void;
      };
    };
  };
}
