import { StatefulContainerLike, ContainerLike, Container, ContainerOf, Using, Defer, Empty, Generate, Never } from "./containers.mjs";
import { Function1, SideEffect1, Factory, Updater } from "./functions.mjs";
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
declare type ObservableType = 0 | 1 | 2;
declare type RunnableObservableType = typeof RunnableObservable | typeof EnumerableObservable;
declare type EnumerableObservableType = typeof EnumerableObservable;
declare const DefaultObservable: ObservableType;
declare const RunnableObservable: ObservableType;
declare const EnumerableObservable: ObservableType;
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
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_observableType]?: RunnableObservableType;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ObservableLike_observableType]?: EnumerableObservableType;
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
declare const createEnumerableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createRunnableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
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
declare const deferRunnable: Defer<RunnableLike>["defer"];
declare const deferRunnableT: Defer<RunnableLike>;
interface EmptyObservable {
    <T>(): EnumerableObservableLike<T>;
    <T>(options: {
        delay: number;
    }): RunnableObservableLike<T>;
}
declare const emptyObservable: EmptyObservable;
declare const emptyRunnable: Empty<RunnableLike>["empty"];
declare const emptyRunnableT: Empty<RunnableLike>;
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
interface GenerateObservable {
    <T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableObservableLike<T>;
    <T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableObservableLike<T>;
}
declare const generateObservable: GenerateObservable;
declare const generateRunnable: Generate<RunnableLike>["generate"];
declare const generateRunnableT: Generate<RunnableLike>;
declare const neverObservable: Never<EnumerableObservableLike>["never"];
declare const neverObservableT: Never<EnumerableObservableLike>;
declare const neverRunnable: Never<RunnableLike>["never"];
declare const neverRunnableT: Never<RunnableLike>;
export { DefaultObservable, EnumerableObservable, EnumerableObservableLike, EnumerableObservableType, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_observableType, ObservableType, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservable, RunnableObservableLike, RunnableObservableType, SubjectLike, SubjectLike_publish, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, createEnumerableObservable, createObservable, createObservableUsing, createObservableUsingT, createRunnable, createRunnableObservable, createRunnableUsing, createRunnableUsingT, createSubject, deferObservable, deferObservableT, deferRunnable, deferRunnableT, emptyObservable, emptyRunnable, emptyRunnableT, generateObservable, generateRunnable, generateRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT };
