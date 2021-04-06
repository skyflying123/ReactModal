import { OnMessageType } from './interfaces';

class WebSocketClass {
  // websocket实例
  private ws!: WebSocket;

  // 心跳频率 ms
  private heartRate = 10000;

  // 心跳计时器序号
  private heartTimer: number | null = null;

  // 初始化参数
  private initParam?: string | object | null | undefined;

  // 目标地址
  private url: string;

  // 重连信息
  private reconnectInfo: {
    reconnecting: boolean;
    reconnectCount: number;
    reconnectTimer?: number | null;
  } = {
    reconnecting: false,
    reconnectCount: 0,
    reconnectTimer: null,
  };

  private events = {
    onOpen: [] as ((e?: Event) => void)[],
    onClose: [] as ((e?: CloseEvent) => void)[],
    onMessage: {
      all: [],
      specified: {},
    } as OnMessageType,
    onError: [] as ((e?: Event) => void)[],
  };

  constructor(url: string, initParam?: string) {
    this.url = url;
    this.initParam = initParam;
    this._connect();
  }

  private _connect = () => {
    const finalUrl = `${this.url}${this.initParam || ''}`;
    this.ws = new WebSocket(finalUrl);
    this.ws.onopen = this._onopen;
    this.ws.onmessage = this._onmessage;
    this.ws.onclose = this._onclose;
    this.ws.onerror = this._onerror;
  };

  private _onopen = (e: Event) => {
    console.log('ws连上了');
    // 开启心跳
    this._startHeartBeat();
    if (this.reconnectInfo.reconnecting) {
      this.reconnectInfo = {
        reconnecting: false,
        reconnectCount: this.reconnectInfo.reconnectCount,
      };
      console.log(`终端${this.url}第${this.reconnectInfo.reconnectCount}次重连成功!`);
    }

    this.events.onOpen.forEach((onOpen) => onOpen(e));
  };

  private _onmessage = async (event: MessageEvent) => {
    console.log('收到消息了', event);
    let data: {
      msgType: string;
      remark: string;
      data: any;
    } & { [K in string]: any } = {
      msgType: '',
      remark: '',
      data: undefined,
    };
    // 重置心跳
    if (this.ws.readyState === WebSocket.OPEN) {
      this._resetHeartBeat();
    }
    if (typeof event.data === 'string') {
      data = JSON.parse(event.data);
    } else if (event.data instanceof ArrayBuffer) {
      console.log('流数据');
    } else if (event.data instanceof Blob) {
      data = JSON.parse(await new Response(event.data).text());
    }

    console.log('ws收到消息:', data);

    // 通知全局
    this.events.onMessage.all.forEach((cb) => {
      if (cb) {
        cb(event);
      }
    });
    // 指定消息通知全局
    this.events.onMessage.specified[data.msgType]?.initiative.forEach((cb) => {
      if (cb) {
        cb(event);
      }
    });
    // 通知指定消息的指定组件
    // 注意：这里只分发消息类型级别不同的消息，具体symbol请在回调函数中自行判断
    Object.keys(this.events.onMessage.specified[data.msgType]?.passive || {}).forEach((key) => {
      if (data.remark.indexOf(key) > -1) {
        this.events.onMessage.specified[data.msgType]?.passive[key](data.data);
      }
    });
  };

  private _onclose = (event: CloseEvent) => {
    // 停止心跳
    this._stopHeartBeat();
    console.log('ws连接被关闭，服务端返回原因:', event.reason);
    if (event.code === 3000) {
      console.log('ws鉴权失败，尝试获取最新token并重连中。。。。');
      this._reconnect();
    }
    this.events.onClose.forEach((onClose) => onClose());
  };

  private _onerror = (e: Event) => {
    // 停止心跳
    this._stopHeartBeat();
    console.log('ws连接发生了错误', e);
    this._reconnect();
  };

  private _reconnect = () => {
    if (this.reconnectInfo.reconnectCount >= 10) {
      console.error(`终端${this.url} ws重连失败次数超过10次，停止重连`);
      return;
    }
    // 获取最新token
    const { token } = JSON.parse(window.sessionStorage.getItem('currentUser') || '{"userId":"","token":""}');
    this.initParam = token;
    this.reconnectInfo = {
      reconnectCount: ++this.reconnectInfo.reconnectCount,
      reconnecting: true,
    };
    console.log(`终端${this.url} 开始重连...`);
    this._connect();
  };

  // 开始心跳
  private _startHeartBeat = () => {
    this.heartTimer = window.setInterval(() => {
      this.ws.send('ping');
    }, this.heartRate);
  };

  // 重置心跳
  private _resetHeartBeat = () => {
    if (this.heartTimer || this.heartTimer === 0) {
      clearInterval(this.heartTimer);
    }
    this._startHeartBeat();
  };

  // 停止心跳
  private _stopHeartBeat = () => {
    if (this.heartTimer || this.heartTimer === 0) {
      clearInterval(this.heartTimer);
    }
  };

  public onopen = (cb: (e?: Event) => void) => {
    if (cb) {
      this.events.onOpen.push(cb);
    }
  };

  public onclose = (cb: (e?: CloseEvent) => void) => {
    if (cb) {
      this.events.onClose.push(cb);
    }
  };

  public close = () => {
    this._stopHeartBeat();
    this.ws.close();
    this._resetWs();
  };

  /**
   * 重置WS私有属性
   */
  private _resetWs = () => {
    // 初始化参数
    this.initParam = '';

    // 重连信息
    this.reconnectInfo = {
      reconnecting: false,
      reconnectCount: 0,
      reconnectTimer: null,
    };

    this.events = {
      onOpen: [] as ((e?: Event) => void)[],
      onClose: [] as ((e?: CloseEvent) => void)[],
      onMessage: {
        all: [],
        specified: {},
      } as OnMessageType,
      onError: [] as ((e?: Event) => void)[],
    };
  };

  /**
   *
   * @param cb 回调
   * @param msgType 期望得到的消息类型
   * @param token 回调组件（请保证唯一）
   * @return 返回该回调在队列中的位置
   */
  public registerOnMessageEvent = (cb: (e?: MessageEvent) => void, msgType?: string, token?: string): number => {
    let index = -1;
    // 初始化msgType对象
    if (msgType) {
      if (!this.events.onMessage.specified[msgType]) {
        this.events.onMessage.specified[msgType] = { passive: {}, initiative: [] };
        this.events.onMessage.specified[msgType].initiative = [];
      }
    }

    // 指定消息类型 + 指定组件
    if (msgType && token) {
      this.events.onMessage.specified[msgType].passive[token] = cb;
    } else if (msgType) {
      // 仅指定消息类型
      index = this.events.onMessage.specified[msgType].initiative.push(cb) - 1;
    } else {
      // 所有消息
      index = this.events.onMessage.all.push(cb) - 1;
    }

    return index;
  };

  /**
   *
   * @param index 回调序号（在注册的时候有返回）
   * @param msgType 指定消息类型
   * @param token 指定回调组件
   */
  public cancelOnMessageEvent = ({ index, msgType, token }: { index: number; msgType?: string; token?: string }) => {
    if (msgType && token) {
      delete this.events.onMessage.specified[msgType].passive[token];
    } else if (msgType) {
      this.events.onMessage.specified[msgType].initiative[index] = undefined;
    } else {
      this.events.onMessage.all[index] = undefined;
    }
  };
}

export default WebSocketClass;
