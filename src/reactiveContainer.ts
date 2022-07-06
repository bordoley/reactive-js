import { __DEV__ } from "./__internal__.env";
import { Container, ContainerOf } from "./container";
import { Function1 } from "./functions";
import {
  LiftableContainerLike,
  LiftableContainerStateOf,
} from "./liftableContainer";
import { ReactiveSinkLike } from "./reactiveSink";

export interface ReactiveContainerLike extends LiftableContainerLike {
  readonly TLiftableContainerState: ReactiveSinkLike<unknown>;

  sinkInto(
    this: this,
    sink: LiftableContainerStateOf<ReactiveContainerLike, this["T"]>,
  ): void;
}

export interface CreateReactiveContainer<C extends ReactiveContainerLike>
  extends Container<C> {
  create<T>(
    onSink: (sink: LiftableContainerStateOf<C, T>) => void,
  ): ContainerOf<C, T>;
}

export const sinkInto =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends LiftableContainerStateOf<C, T>,
  >(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source.sinkInto(sink);
    return source;
  };

export const sourceFrom =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends LiftableContainerStateOf<C, T>,
  >(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source.sinkInto(sink);
    return sink;
  };
