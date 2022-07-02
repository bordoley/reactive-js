import { Container, ContainerOf } from "./container.mjs";
import { Function1, SideEffect1 } from "./functions.mjs";
import { LiftableStateLike, LiftableLike, Lift as Lift$1, ContraVariant, LiftableStateOf, AbstractLiftable, AbtractDisposableLiftable } from "./liftable.mjs";
interface SinkLike<T> extends LiftableStateLike {
    assertState(this: SinkLike<T>): void;
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: SinkLike<T>, next: T): void;
}
interface SourceLike extends LiftableLike {
    readonly liftableStateType: SinkLike<unknown>;
    sink(this: this["type"], sink: this["liftableStateType"]): void;
}
interface Lift<C extends SourceLike> extends Lift$1<C, ContraVariant> {
}
interface CreateSource<C extends SourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const assertState: <C extends SourceLike>(sink: LiftableStateOf<C, unknown>) => void;
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare abstract class AbtractDisposableSource<T, TSink extends SinkLike<T>> extends AbtractDisposableLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare const notify: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => SideEffect1<T>;
declare const sinkInto: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
export { AbstractSource, AbtractDisposableSource, CreateSource, Lift, SinkLike, SourceLike, assertState, notify, notifySink, sinkInto, sourceFrom };
