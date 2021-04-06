import { RequestOptionsInit } from 'umi-request';
import { BaseResult, BaseOptions } from '@ahooksjs/use-request/lib/types';

export interface UmiRequestOptions extends RequestOptionsInit {
  // 请求地址
  url: string;
}

export type ResultWithData<T = any> = { data: any; [key: string]: any };

export type WithData = <R extends ResultWithData, P>(
  options?: BaseOptions<R['data'], P[]>,
) => BaseResult<R['data'], P[]>;

export interface FormatUrlInfoType {
  mock: {
    customPrefix: string;
    format: string;
  };
  dev: string;
  pro: string;
}
