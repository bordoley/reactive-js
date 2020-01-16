import { MulticastObservableLike, SafeSubscriberLike } from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface AsyncEnumeratorLike<TReq, T>
  extends SafeSubscriberLike<TReq>,
    MulticastObservableLike<T> {}

export interface AsyncEnumerableLike<TReq, T> {
  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<TReq, T>;
}

export interface AsyncEnumerableOperatorLike<TSrcReq, TSrc, TReq, T> {
  (enumerable: AsyncEnumerableLike<TSrcReq, TSrc>): AsyncEnumerableLike<
    TReq,
    T
  >;
}

export interface StateUpdaterLike<T> {
  (oldState: T): T;
}
