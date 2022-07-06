import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableContainerLike, LiftableContainerStateOf } from "./liftable.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
interface ReactiveContainerLike extends LiftableContainerLike {
    readonly TLiftableContainerState: ReactiveSinkLike<unknown>;
    sink(this: this, sink: LiftableContainerStateOf<ReactiveContainerLike, this["T"]>): void;
}
interface CreateReactiveContainer<C extends ReactiveContainerLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableContainerStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const sinkInto: <C extends ReactiveContainerLike, T, TSink extends LiftableContainerStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike, T, TSink extends LiftableContainerStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { CreateReactiveContainer, ReactiveContainerLike, sinkInto, sourceFrom };
