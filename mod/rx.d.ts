import { StatefulContainerLike, Container, ContainerOf, ContainerLike, Using, Defer, Empty } from "./containers.mjs";
import { Function1, SideEffect1, Factory } from "./functions.mjs";
import { ObserverLike } from "./scheduling.mjs";
import { DisposableLike, SinkLike } from "./util.mjs";
/** @ignore */
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike<TSink extends DisposableLike> extends StatefulContainerLike {
    [ReactiveContainerLike_sinkInto](sink: TSink): void;
}
interface RunnableLike<T = unknown> extends ReactiveContainerLike<SinkLike<T>> {
    readonly TContainerOf?: RunnableLike<this["T"]>;
    readonly TStatefulContainerState?: SinkLike<this["T"]>;
}
declare const DefaultObservable = 0;
declare const RunnableObservable = 1;
declare const EnumerableObservable = 2;
/** @ignore */
declare const ObservableLike_observableType: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly TContainerOf?: ObservableLike<this["T"]>;
    readonly TStatefulContainerState?: ObserverLike<this["T"]>;
    readonly [ObservableLike_observableType]: typeof EnumerableObservable | typeof RunnableObservable | typeof DefaultObservable;
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof RunnableObservable | typeof EnumerableObservable;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof EnumerableObservable;
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
declare type Never<C extends StatefulContainerLike> = Container<C> & {
    never<T>(): ContainerOf<C, T>;
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
declare const createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createObservableUsing: Using<ObservableLike>["using"];
declare const createObservableUsingT: Using<ObservableLike>;
declare const createRunnable: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const createRunnableUsing: Using<RunnableLike>["using"];
declare const createRunnableUsingT: Using<RunnableLike>;
declare const createSubject: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
interface DeferObservable {
    <T>(factory: Factory<SideEffect1<ObserverLike<T>>>, options?: {
        readonly delay?: number;
    }): ObservableLike<T>;
    <T>(factory: Factory<ObservableLike<T>>): ObservableLike<T>;
}
declare const deferObservable: DeferObservable;
declare const deferObservableT: Defer<ObservableLike>;
declare const emptyRunnable: Empty<RunnableLike>["empty"];
declare const emptyRunnableT: Empty<RunnableLike>;
declare const neverObservable: Never<ObservableLike>["never"];
declare const neverObservableT: Never<ObservableLike>;
declare const neverRunnable: Never<RunnableLike>["never"];
declare const neverRunnableT: Never<RunnableLike>;
export { DefaultObservable, EnumerableObservable, EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, Never, ObservableLike, ObservableLike_observableType, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservable, RunnableObservableLike, SubjectLike, SubjectLike_publish, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, createObservable, createObservableUsing, createObservableUsingT, createRunnable, createRunnableUsing, createRunnableUsingT, createSubject, deferObservable, deferObservableT, emptyRunnable, emptyRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT };
