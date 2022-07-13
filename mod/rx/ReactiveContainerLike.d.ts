import { Container, ContainerOf } from '../containers/ContainerLike.js';
import { StatefulContainerLike, StatefulContainerStateOf } from '../containers/StatefulContainerLike.js';
import { Function1 } from '../util/functions.js';
import { ReactiveSinkLike } from "./ReactiveSinkLike.mjs";
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike<T = unknown> extends StatefulContainerLike<T> {
    readonly TStatefulContainerState?: ReactiveSinkLike<unknown>;
    [ReactiveContainerLike_sinkInto](sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>): void;
}
declare type CreateReactiveContainer<C extends ReactiveContainerLike> = Container<C> & {
    create<T>(onSink: (sink: StatefulContainerStateOf<C, T>) => void): ContainerOf<C, T>;
};
declare type Never<C extends ReactiveContainerLike> = Container<C> & {
    never<T>(): ContainerOf<C, T>;
};
declare const sinkInto: <C extends ReactiveContainerLike<unknown>, T, TSink extends StatefulContainerStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike<unknown>, T, TSink extends StatefulContainerStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { CreateReactiveContainer, Never, ReactiveContainerLike, ReactiveContainerLike_sinkInto, sinkInto, sourceFrom };
