declare interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

declare type Fn = () => void;

declare module 'postcss-pxtorem';
