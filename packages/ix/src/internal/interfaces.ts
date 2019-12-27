import {
  MulticastObservableLike,
  MulticastObservableResourceLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends MulticastObservableLike<T> {
  dispatch(request: TReq): void;
}

export interface AsyncIteratorOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    MulticastObservableResourceLike<T> {}

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

export interface AsyncIterableLike<TReq, T> {
  getIXAsyncIterator(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncIteratorResourceLike<TReq, T>;
}

export interface AsyncIterableOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIterableLike<TSrcReq, TSrc>): AsyncIterableLike<TReq, T>;
}

export interface StateUpdaterLike<T> {
  (oldState: T): T;
}

/** @noInheritDoc */
export type StateStoreLike<T> = AsyncIteratorLike<StateUpdaterLike<T>, T>;

/** @noInheritDoc */
export interface StateStoreResourceLike<T>
  extends StateStoreLike<T>,
    AsyncIteratorResourceLike<StateUpdaterLike<T>, T> {}