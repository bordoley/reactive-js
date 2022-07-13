import { DisposableLike } from "../util/DisposableLike";
import { Function1, SideEffect1 } from "../util/functions";

export const ReactiveSinkLike_notify = Symbol("ReactiveSinkLike_notify");
export interface ReactiveSinkLike<T = unknown> extends DisposableLike {
  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  [ReactiveSinkLike_notify](next: T): void;
}

export const notify =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    v: T,
  ): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[ReactiveSinkLike_notify](v);
    return sink;
  };

export const notifySink =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    sink: TSink,
  ): SideEffect1<T> =>
  (next: T) =>
    sink[ReactiveSinkLike_notify](next);
