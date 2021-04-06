/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [岗位信息↗](http://192.168.214.111:40000/project/223/interface/api/26798) 的 **请求类型**
 *
 * @分类 [系统管理↗](http://192.168.214.111:40000/project/223/interface/api/cat_2284)
 * @请求头 `GET /systemManager/jobInfo`
 * @更新时间 `2020-09-11 15:20:45`
 */
export interface SystemManagerJobInfoRequest {}

/**
 * 接口 [岗位信息↗](http://192.168.214.111:40000/project/223/interface/api/26798) 的 **返回类型**
 *
 * @分类 [系统管理↗](http://192.168.214.111:40000/project/223/interface/api/cat_2284)
 * @请求头 `GET /systemManager/jobInfo`
 * @更新时间 `2020-09-11 15:20:45`
 */
export interface SystemManagerJobInfoResponse {
  message: string
  data: {
    id: string
    name: string
    explain: string
    type: string
    status: string
  }[]
  code: string
}

/* prettier-ignore-end */
