import { StatefulContainerLike, ContainerLike, Container, ContainerOf, Defer, Empty, Generate, Never } from "./containers.mjs";
import { Function1, SideEffect1, Updater, Factory } from "./functions.mjs";
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
declare const ObservableLike_isEnumerable: unique symbol;
declare const ObservableLike_isRunnable: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike<ObserverLike<T>> {
    readonly TStatefulContainerState?: ObserverLike<this["T"]>;
    TContainerOf?: ObservableLike<this["T"]>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    TContainerOf?: RunnableObservableLike<this["T"]>;
    readonly [ObservableLike_isRunnable]: true;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    TContainerOf?: EnumerableObservableLike<this["T"]>;
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
declare const createSubject: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
declare const deferEnumerableObservable: Defer<EnumerableObservableLike>["defer"];
declare const deferEnumerableObservableT: Defer<EnumerableObservableLike>;
declare const deferObservable: Defer<ObservableLike>["defer"];
declare const deferObservableT: Defer<ObservableLike>;
declare const deferRunnableObservable: Defer<RunnableObservableLike, {
    delay: number;
}>["defer"];
declare const deferRunnableObservableT: Defer<RunnableObservableLike>;
declare const deferRunnable: Defer<RunnableLike>["defer"];
declare const deferRunnableT: Defer<RunnableLike>;
interface EmptyObservable {
    <T>(): EnumerableObservableLike<T>;
    <T>(options: {
        delay: number;
    }): RunnableObservableLike<T>;
}
declare const emptyObservable: EmptyObservable;
declare const emptyEnumerableObservableT: Empty<EnumerableObservableLike>;
declare const emptyObservableT: Empty<ObservableLike, {
    delay: number;
}>;
declare const emptyRunnableObservableT: Empty<RunnableObservableLike, {
    delay: number;
}>;
declare const emptyRunnable: Empty<RunnableLike>["empty"];
declare const emptyRunnableT: Empty<RunnableLike>;
interface GenerateObservable {
    <T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableObservableLike<T>;
    <T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableObservableLike<T>;
}
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
declare const generateObservable: GenerateObservable;
declare const generateEnumerableObservableT: Generate<EnumerableObservableLike>;
declare const generateObservableT: Generate<ObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
declare const generateRunnableObservableT: Generate<RunnableObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
declare const generateRunnable: Generate<RunnableLike>["generate"];
declare const generateRunnableT: Generate<RunnableLike>;
declare const neverObservable: Never<EnumerableObservableLike>["never"];
declare const neverEnumerableObservableT: Never<EnumerableObservableLike>;
declare const neverObservableT: Never<ObservableLike>;
declare const neverRunnableObservableT: Never<RunnableObservableLike>;
declare const neverRunnable: Never<RunnableLike>["never"];
declare const neverRunnableT: Never<RunnableLike>;
export { EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservableLike, SubjectLike, SubjectLike_publish, ToObservable, ToRunnable, createEnumerableObservable, createObservable, createRunnable, createRunnableObservable, createSubject, deferEnumerableObservable, deferEnumerableObservableT, deferObservable, deferObservableT, deferRunnable, deferRunnableObservable, deferRunnableObservableT, deferRunnableT, emptyEnumerableObservableT, emptyObservable, emptyObservableT, emptyRunnable, emptyRunnableObservableT, emptyRunnableT, generateEnumerableObservableT, generateObservable, generateObservableT, generateRunnable, generateRunnableObservableT, generateRunnableT, neverEnumerableObservableT, neverObservable, neverObservableT, neverRunnable, neverRunnableObservableT, neverRunnableT };
