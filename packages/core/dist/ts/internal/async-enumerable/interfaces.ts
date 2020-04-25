import {
  MulticastObservableLike,
  SafeSubscriberLike,
} from "../../observable.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { Operator } from "../../pipe.ts";

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

export type AsyncEnumerableOperator<TSrcReq, TSrc, TReq, T> = {
  (enumerable: AsyncEnumerableLike<TSrcReq, TSrc>): AsyncEnumerableLike<
    TReq,
    T
  >;
};

export type StateUpdater<T> = {
  (oldState: T): T;
};

export const enum StreamMode {
  Resume = 1,
  Pause = 2,
}

export const enum StreamEventType {
  Next = 1,
  Complete = 2,
}

export type StreamEvent<T> =
  | { readonly type: StreamEventType.Next; readonly data: T }
  | { readonly type: StreamEventType.Complete };

export interface StreamLike<T>
  extends AsyncEnumerableLike<StreamMode, StreamEvent<T>> {}

export interface StreamSinkLike<T>
  extends AsyncEnumerableLike<StreamEvent<T>, StreamMode> {}

export type StreamOperator<TA, TB> = Operator<StreamLike<TA>, StreamLike<TB>>;
