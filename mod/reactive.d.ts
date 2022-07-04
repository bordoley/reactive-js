import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableLike, LiftableStateOf } from "./liftable.mjs";
import { SinkLike } from "./sink.mjs";
interface ReactiveSourceLike extends LiftableLike {
    readonly TLiftableState: SinkLike<unknown>;
    sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}
interface CreateReactiveSource<C extends ReactiveSourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const sinkInto: <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { CreateReactiveSource, ReactiveSourceLike, sinkInto, sourceFrom };
