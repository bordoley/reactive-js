import { ObservableLike, ObservableResourceLike } from "@reactive-js/rx";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends ObservableLike<T> {
  dispatch(request: TReq): void;
}

export interface AsyncIteratorOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    ObservableResourceLike<T> {}

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

export interface StateUpdaterLike<T> {
  (oldState: T): T;
}

/** @noInheritDoc */
export interface StateStoreLike<T> extends AsyncIteratorLike<StateUpdaterLike<T>, T>{};

/** @noInheritDoc */
export interface StateStoreResourceLike<T>
  extends StateStoreLike<T>,
    AsyncIteratorResourceLike<StateUpdaterLike<T>, T> {}

/** @noInheritDoc */
export interface EventEmitterLike<T> extends AsyncIteratorLike<T, T> {};

/** @noInheritDoc */
export interface EventEmitterResourceLike<T>
  extends EventEmitterLike<T>,
    AsyncIteratorResourceLike<T, T> {}
