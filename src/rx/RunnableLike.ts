import {
  Container,
  ContainerLike,
  ContainerOf,
} from "../containers/ContainerLike";
import { Function1 } from "../util/functions";
import {
  ReactiveContainerLike,
  ReactiveContainerLike_sinkInto,
} from "./ReactiveContainerLike";
import { ReactiveSinkLike } from "./ReactiveSinkLike";

export interface RunnableLike<T = unknown> extends ReactiveContainerLike {
  readonly TStatefulContainerState?: ReactiveSinkLike<this["T"]>;

  [ReactiveContainerLike_sinkInto](sink: ReactiveSinkLike<T>): void;
}

export type ToRunnable<C extends ContainerLike> = Container<C> & {
  toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
