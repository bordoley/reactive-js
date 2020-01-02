import {
  MulticastObservableLike,
  MulticastObservableResourceLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface AsyncEnumeratorLike<TReq, T> extends MulticastObservableLike<T> {
  dispatch(request: TReq): void;
}

/** @noInheritDoc */
export interface AsyncEnumeratorResourceLike<TReq, T>
  extends AsyncEnumeratorLike<TReq, T>,
    MulticastObservableResourceLike<T> {}

export interface AsyncEnumerableLike<TReq, T> {
  getIXAsyncEnumerator(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorResourceLike<TReq, T>;
}

export interface AsyncEnumerableOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncEnumerableLike<TSrcReq, TSrc>): AsyncEnumerableLike<TReq, T>;
}

export interface StateUpdaterLike<T> {
  (oldState: T): T;
}
