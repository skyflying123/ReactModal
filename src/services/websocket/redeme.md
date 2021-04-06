# websocket 模块使用

websocket模块支持多数据源，在config/baseConfig.ts中配置websocket。


```typescript jsx
import { request } from '@@/plugin-request/request';
// 导入ws
import getWs from '@/service/websocket'

// getWs不传参的话默认获取/utils/config.ts中第一个websocket
const  ws = getWs();

// 注册open事件
ws.onopen((e?: Event) => {
  console.log('ws连接成功!');
})

// 注册close事件
ws.onclose((e?: CloseEvent) => {
  console.log('ws已关闭');
})

// 注册message事件
// 1.注册全局消息
const globalEvent = ws.registerOnMessageEvent((e?: MessageEvent) => {
  console.log('ws收到消息')
})

// 2.注册指定类型的消息(只监听某一个类型)
// 这里假设只监听实时行情数据（realTimeQuotaTick）
const typeEvent = ws.registerOnMessageEvent((e?: MessageEvent) => {
  console.log('ws收到消息')
}, 'realTimeQuotaTick')

// 3.注册指定类型的消息，并表明自己的组件身份
// 假设有N个组件同时订阅了实时行情数据， 则需要表明自己的token
// 以区别该消息类型应该分发给哪个组件, 该token需要在订阅时放在remark字段
request('/api/dev/quotation/realtime/sub', {
  skipErrorHandler: true,
  method: 'POST',
  data: {
    exSec: [
      {
        exchangeId: 'SZSE',
        instrumentId: '002142',
      },
    ],
    quoType: '2',
    remark: 'KlineComponent',
  },
}).then(() => {
  console.log('完成订阅');
});
const componentEvent = ws.registerOnMessageEvent((e?: MessageEvent) => {
  console.log('ws收到消息')
}, 'realTimeQuotaTick', 'KlineComponent')

// 取消事件
// 1. 取消全局事件
ws.cancelOnMessageEvent({ index: globalEvent })

// 2.取消指定消息类型事件
ws.cancelOnMessageEvent({ index: typeEvent, msgType: 'realTimeQuotaTick'})

// 3.取消指定组件事件
ws.cancelOnMessageEvent({ index: componentEvent, msgType: 'realTimeQuotaTick', token: 'KlineComponent'})
```
