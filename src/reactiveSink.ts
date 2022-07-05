import { __DEV__ } from "./__internal__.env";
import { ContainerLike } from "./container";
import { Disposable } from "./disposable";
import { Function1, SideEffect1 } from "./functions";

export interface ReactiveSinkLike<T> extends Disposable, ContainerLike {
  readonly T: T;
  readonly TContainerOf: ReactiveSinkLike<this["T"]>;

  assertState(this: this["TContainerOf"]): void;

  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(this: this["TContainerOf"], next: T): void;
}

export const assertState = (sink: ReactiveSinkLike<unknown>): void => {
  if (__DEV__) {
    sink.assertState();
  }
};

export const notify =
  <TSink extends ReactiveSinkLike<T>, T>(v: T): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink.notify(v);
    return sink;
  };

export const notifySink =
  <TSink extends ReactiveSinkLike<T>, T>(sink: TSink): SideEffect1<T> =>
  (next: T) =>
    sink.notify(next);
