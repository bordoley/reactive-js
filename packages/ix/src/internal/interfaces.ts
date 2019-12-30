import {
  MulticastObservableLike,
  MulticastObservableResourceLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends MulticastObservableLike<T> {
  dispatch(request: TReq): void;
}

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    MulticastObservableResourceLike<T> {}

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
