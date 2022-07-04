import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableLike, LiftableStateOf } from "./liftable.mjs";
import { SinkLike } from "./sink.mjs";
interface ReactiveContainerLike extends LiftableLike {
    readonly TLiftableState: SinkLike<unknown>;
    sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}
interface CreateReactiveContainer<C extends ReactiveContainerLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const sinkInto: <C extends ReactiveContainerLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveContainerLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { CreateReactiveContainer, ReactiveContainerLike, sinkInto, sourceFrom };
