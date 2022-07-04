import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { Function1 } from "./functions";
import {
  AbtractDisposableLiftable,
  LiftableLike,
  LiftableStateOf,
} from "./liftable";
import { SinkLike } from "./sink";

export interface ReactiveSourceLike extends LiftableLike {
  readonly TLiftableState: SinkLike<unknown>;

  sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}

export abstract class AbtractDisposableReactiveSource<
    T,
    TSink extends SinkLike<T>,
  >
  extends AbtractDisposableLiftable<TSink>
  implements ReactiveSourceLike
{
  abstract sink(this: this, sink: TSink): void;
}

export interface CreateReactiveSource<C extends ReactiveSourceLike>
  extends Container<C> {
  create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}

export const sinkInto =
  <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sink(sink);
    return source;
  };

export const sourceFrom =
  <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sink(sink);
    return sink;
  };
