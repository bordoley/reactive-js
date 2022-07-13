import { ContainerLike, Container, ContainerOf } from '../containers/ContainerLike.js';
import { Function1 } from '../util/functions.js';
import { ReactiveContainerLike, ReactiveContainerLike_sinkInto } from "./ReactiveContainerLike.mjs";
import { ReactiveSinkLike } from "./ReactiveSinkLike.mjs";
interface RunnableLike<T = unknown> extends ReactiveContainerLike<T> {
    readonly TStatefulContainerState?: ReactiveSinkLike<T>;
    [ReactiveContainerLike_sinkInto](sink: ReactiveSinkLike<T>): void;
}
declare type ToRunnable<C extends ContainerLike> = Container<C> & {
    toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
export { RunnableLike, ToRunnable };
