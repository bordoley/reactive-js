import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerOf, ContainerLike, Container, ContainerOperator, Defer } from "./containers.mjs";
import { Function2, Factory, Function1, SideEffect1 } from "./functions.mjs";
import { ObserverLike } from "./scheduling.mjs";
import { DisposableLike, SinkLike } from "./util.mjs";
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
declare type ToRunnable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toRunnable<T>(options?: TOptions): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
declare const createEnumerableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
declare const createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createRunnableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
declare const createRunnable: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const deferEnumerableObservable: Defer<EnumerableObservableLike>["defer"];
declare const deferEnumerableObservableT: Defer<EnumerableObservableLike>;
declare const deferObservable: Defer<ObservableLike>["defer"];
declare const deferObservableT: Defer<ObservableLike>;
declare const deferRunnableObservable: Defer<RunnableObservableLike, {
    delay: number;
}>["defer"];
declare const deferRunnableObservableT: Defer<RunnableObservableLike>;
export { AsyncReducer, EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservableLike, ScanAsync, SubjectLike, SubjectLike_publish, ToObservable, ToRunnable, createEnumerableObservable, createObservable, createRunnable, createRunnableObservable, deferEnumerableObservable, deferEnumerableObservableT, deferObservable, deferObservableT, deferRunnableObservable, deferRunnableObservableT };
