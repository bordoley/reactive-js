import { Container, ContainerOf } from "./container.mjs";
import { Function1 } from "./functions.mjs";
import { LiftableLike, AbtractDisposableLiftable, LiftableStateOf } from "./liftable.mjs";
import { SinkLike } from "./sink.mjs";
interface SourceLike extends LiftableLike {
    readonly TLiftableState: SinkLike<unknown>;
    sink(this: this["TContainerOf"], sink: this["TLiftableState"]): void;
}
declare abstract class AbtractDisposableSource<T, TSink extends SinkLike<T>> extends AbtractDisposableLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
interface CreateSource<C extends SourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const sinkInto: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { AbtractDisposableSource, CreateSource, SourceLike, sinkInto, sourceFrom };
