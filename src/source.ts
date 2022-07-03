import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { Function1, SideEffect1 } from "./functions";
import {
  AbtractDisposableLiftable,
  LiftableLike,
  LiftableStateLike,
  LiftableStateOf,
} from "./liftable";

export interface SinkLike<T> extends LiftableStateLike {
  assertState(this: SinkLike<T>): void;

  /**
   * Notifies the the sink of the next notification produced by the observable source.
   *
   * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
   * scheduled using the sink's `schedule` method.
   *
   * @param next The next notification value.
   */
  notify(this: SinkLike<T>, next: T): void;
}

export interface SourceLike extends LiftableLike {
  readonly TLiftableState: SinkLike<unknown>;

  sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}

export abstract class AbtractDisposableSource<T, TSink extends SinkLike<T>>
  extends AbtractDisposableLiftable<TSink>
  implements SourceLike
{
  abstract sink(this: this, sink: TSink): void;
}

export interface CreateSource<C extends SourceLike> extends Container<C> {
  create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}

export const assertState = <C extends SourceLike>(
  sink: LiftableStateOf<C, unknown>,
): void => {
  if (__DEV__) {
    sink.assertState();
  }
};

export const notify =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    v: T,
  ): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink.notify(v);
    return sink;
  };

export const notifySink =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): SideEffect1<T> =>
  (next: T) =>
    sink.notify(next);

export const sinkInto =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sink(sink);
    return source;
  };

export const sourceFrom =
  <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sink(sink);
    return sink;
  };
