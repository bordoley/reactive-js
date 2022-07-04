import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableLike, AbtractDisposableLiftable, LiftableStateOf } from "./liftable.mjs";
import { SinkLike } from "./sink.mjs";
interface ReactiveSourceLike extends LiftableLike {
    readonly TLiftableState: SinkLike<unknown>;
    sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}
declare abstract class AbtractDisposableReactiveSource<T, TSink extends SinkLike<T>> extends AbtractDisposableLiftable<TSink> implements ReactiveSourceLike {
    abstract sink(this: this, sink: TSink): void;
}
interface CreateReactiveSource<C extends ReactiveSourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const sinkInto: <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends ReactiveSourceLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { AbtractDisposableReactiveSource, CreateReactiveSource, ReactiveSourceLike, sinkInto, sourceFrom };
