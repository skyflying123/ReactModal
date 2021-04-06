/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据userId获取菜单↗](http://192.168.214.111:40000/project/223/interface/api/26795) 的 **请求类型**
 *
 * @分类 [菜单↗](http://192.168.214.111:40000/project/223/interface/api/cat_2278)
 * @请求头 `GET /menu/getMenuByUserId`
 * @更新时间 `2020-09-11 16:43:06`
 */
export interface MenuGetMenuByUserIdRequest {
  /**
   * 用户id
   */
  userId: string
}

/**
 * 接口 [根据userId获取菜单↗](http://192.168.214.111:40000/project/223/interface/api/26795) 的 **返回类型**
 *
 * @分类 [菜单↗](http://192.168.214.111:40000/project/223/interface/api/cat_2278)
 * @请求头 `GET /menu/getMenuByUserId`
 * @更新时间 `2020-09-11 16:43:06`
 */
export interface MenuGetMenuByUserIdResponse {
  /**
   * 接口返回信息
   */
  message: string
  /**
   * 响应数据
   */
  data: {
    /**
     * 菜单code
     */
    code: string
    /**
     * 菜单是否隐藏
     */
    hideInMenu: boolean
    /**
     * 图标
     */
    icon: string
    /**
     * 菜单id
     */
    id: string
    /**
     * 菜单名称
     */
    name: string
    /**
     * 操作列表
     */
    opers: {
      /**
       * 操作code
       */
      operCode: string
      /**
       * 操作ID
       */
      operId: string
      /**
       * 操作名称
       */
      operName: string
      /**
       * 是否勾选
       */
      selectFlag: boolean
    }[]
    /**
     * 序号
     */
    ord: string
    /**
     * 菜单路径
     */
    path: string
    /**
     * 父菜单id
     */
    pid: string
    /**
     * 来源标识
     */
    srcMark: string
    /**
     * 操作
     */
    permission: string
  }[]
  /**
   * 接口调用结果代码
   */
  code: string
}

/* prettier-ignore-end */
