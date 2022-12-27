import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerOf, ContainerLike, Container, ContainerOperator } from "./containers.mjs";
import { Function2, Factory, Function1 } from "./functions.mjs";
import { DispatcherLike, SchedulerLike } from "./scheduling.mjs";
import { DisposableLike } from "./util.mjs";
/** @ignore */
declare const SinkLike_notify: unique symbol;
interface SinkLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    [SinkLike_notify](next: T): void;
}
/** @ignore */
declare const ObserverLike_dispatcher: unique symbol;
/** @ignore */
declare const ObserverLike_scheduler: unique symbol;
interface ObserverLike<T = unknown> extends SinkLike<T> {
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
    readonly [ObserverLike_scheduler]: SchedulerLike;
}
/** @ignore */
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike<TSink extends DisposableLike> extends StatefulContainerLike {
    [ReactiveContainerLike_sinkInto](sink: TSink): void;
}
interface RunnableLike<T = unknown> extends ReactiveContainerLike<SinkLike<T>> {
    readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: SinkLike<this[typeof ContainerLike_T]>;
}
/**  @ignore */
declare const ObservableLike_isEnumerable: unique symbol;
/**  @ignore */
declare const ObservableLike_isRunnable: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly [StatefulContainerLike_state]?: ObserverLike<this[typeof ContainerLike_T]>;
    readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ContainerLike_type]?: RunnableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isRunnable]: true;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ContainerLike_type]?: EnumerableObservableLike<this[typeof ContainerLike_T]>;
    readonly [ObservableLike_isEnumerable]: true;
}
/** @ignore */
declare const MulticastObservableLike_observerCount: unique symbol;
/** @ignore */
declare const MulticastObservableLike_replay: unique symbol;
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
/** @ignore */
declare const SubjectLike_publish: unique symbol;
interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
declare type AsyncReducer<C extends ObservableLike, T, TAcc> = Function2<TAcc, T, ContainerOf<C, TAcc>>;
declare type ScanAsync<C extends ContainerLike, CInner extends ObservableLike> = Container<C> & {
    scanAsync: <T, TAcc>(scanner: AsyncReducer<CInner, T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
};
declare type ToObservable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toObservable: <T>(options?: TOptions) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
};
declare type ToRunnableObservable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toRunnableObservable: <T>(options?: TOptions) => Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
};
declare type ToEnumerableObservable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toEnumerableObservable: <T>(options?: TOptions) => Function1<ContainerOf<C, T>, EnumerableObservableLike<T>>;
};
declare type ToRunnable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toRunnable<T>(options?: TOptions): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
export { AsyncReducer, EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservableLike, ScanAsync, SinkLike, SinkLike_notify, SubjectLike, SubjectLike_publish, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable };
