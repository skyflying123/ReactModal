```typescript jsx
<Buttons buttons={list}/>
```

list:一个数组，数组元素是一个对象，每个对象包含url，onClick，name三个属性，name是必选属性
如果有url属性，那么代表这个按钮是一个跳转按钮
例子:
```typescript jsx
import {Buttons} from 'components';

<Buttons buttons={
  [
     {
        url:'/yygj/member/order/addOrder',
        name:"订单新增",
     },
     {
        name:'批量发送',
        onClick:() => {
           console.log('ok')
        }
     }
  ]
}>
```

