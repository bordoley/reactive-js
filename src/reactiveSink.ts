import { __DEV__ } from "./__internal__.env";
import { DisposableLike } from "./disposable";
import { Function1, SideEffect1 } from "./functions";

export interface ReactiveSinkLike<T> extends DisposableLike {
  assertState(this: this): void;

  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(this: this, next: T): void;
}

export const assertState = (sink: ReactiveSinkLike<unknown>): void => {
  if (__DEV__) {
    sink.assertState();
  }
};

export const notify =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    v: T,
  ): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink.notify(v);
    return sink;
  };

export const notifySink =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    sink: TSink,
  ): SideEffect1<T> =>
  (next: T) =>
    sink.notify(next);
