import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableContainerLike, LiftableContainerStateOf } from "./liftableContainer.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
interface ReactiveContainerLike extends LiftableContainerLike {
    readonly TLiftableContainerState: ReactiveSinkLike<unknown>;
    sinkInto(this: this, sink: LiftableContainerStateOf<ReactiveContainerLike, this["T"]>): void;
}
interface CreateReactiveContainer<C extends ReactiveContainerLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableContainerStateOf<C, T>) => void): ContainerOf<C, T>;
}
interface Never<C extends ReactiveContainerLike> extends Container<C> {
    never<T>(): ContainerOf<C, T>;
}
declare const sinkInto: <C extends ReactiveContainerLike, T, TSink extends LiftableContainerStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike, T, TSink extends LiftableContainerStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { CreateReactiveContainer, Never, ReactiveContainerLike, sinkInto, sourceFrom };
