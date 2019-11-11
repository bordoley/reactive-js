import { ObservableResourceLike } from "@rx-min/rx-core";

export interface AsyncIteratorLike<TReq, T> extends ObservableResourceLike<T> {
  request(data: TReq): void;
}

export interface AsyncIterableLike<TReq, T> {
  iterateAsync(): AsyncIteratorLike<TReq, T>;
}
