import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { Function1 } from "./functions";
import { LiftableContainerLike, LiftableStateOf } from "./liftable";
import { ReactiveSinkLike } from "./reactiveSink";

export interface ReactiveContainerLike extends LiftableContainerLike {
  readonly TLiftableState: ReactiveSinkLike<unknown>;

  sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}

export interface CreateReactiveContainer<C extends ReactiveContainerLike>
  extends Container<C> {
  create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}

export const sinkInto =
  <C extends ReactiveContainerLike, T, TSink extends LiftableStateOf<C, T>>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sink(sink);
    return source;
  };

export const sourceFrom =
  <C extends ReactiveContainerLike, T, TSink extends LiftableStateOf<C, T>>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sink(sink);
    return sink;
  };
