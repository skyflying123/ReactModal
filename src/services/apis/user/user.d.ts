/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户登录↗](http://192.168.214.111:40000/project/223/interface/api/26792) 的 **请求类型**
 *
 * @分类 [用户↗](http://192.168.214.111:40000/project/223/interface/api/cat_2272)
 * @请求头 `POST /user/login`
 * @更新时间 `2020-09-11 10:43:15`
 */
export interface UserLoginRequest {
  /**
   * 用户名
   */
  userName: string
  /**
   * 密码
   */
  passWord: string
}

/**
 * 接口 [用户登录↗](http://192.168.214.111:40000/project/223/interface/api/26792) 的 **返回类型**
 *
 * @分类 [用户↗](http://192.168.214.111:40000/project/223/interface/api/cat_2272)
 * @请求头 `POST /user/login`
 * @更新时间 `2020-09-11 10:43:15`
 */
export interface UserLoginResponse {
  /**
   * 接口返回信息
   */
  message: string
  /**
   * 接口返回数据
   */
  data: {
    /**
     * 用户ID
     */
    userId: string
    /**
     * 用户名称
     */
    userName: string
    /**
     * 用户角色
     */
    userRole: string[]
    /**
     * token
     */
    token: string
  }
  /**
   * 接口调用结果代码
   */
  code: string
}

/* prettier-ignore-end */
