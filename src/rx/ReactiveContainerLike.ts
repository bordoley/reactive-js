import { Container, ContainerOf } from "../containers/ContainerLike";
import {
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "../containers/StatefulContainerLike";
import { Function1 } from "../util/functions";
import { ReactiveSinkLike } from "./ReactiveSinkLike";

export const ReactiveContainerLike_sinkInto = Symbol(
  "ReactiveContainerLike_sinkInto",
);
export interface ReactiveContainerLike extends StatefulContainerLike {
  readonly TContainerOf?: this;
  readonly TStatefulContainerState?: ReactiveSinkLike;

  [ReactiveContainerLike_sinkInto](
    sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>,
  ): void;
}

export type CreateReactiveContainer<C extends ReactiveContainerLike> =
  Container<C> & {
    create<T>(
      onSink: (sink: StatefulContainerStateOf<C, T>) => void,
    ): ContainerOf<C, T>;
  };

export type Never<C extends ReactiveContainerLike> = Container<C> & {
  never<T>(): ContainerOf<C, T>;
};

export const sinkInto =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends StatefulContainerStateOf<C, T>,
  >(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
  };

export const sourceFrom =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends StatefulContainerStateOf<C, T>,
  >(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };
