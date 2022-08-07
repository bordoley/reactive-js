import { StatefulContainerLike, ContainerLike, Container, ContainerOf, Defer, Empty, Generate, Never } from "./containers.mjs";
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
interface CreateObservable {
    <T>(f: SideEffect1<ObserverLike<T>>, options: {
        readonly isRunnable: true;
    }): RunnableObservableLike<T>;
    <T>(f: SideEffect1<ObserverLike<T>>, options: {
        readonly isEnumerable: true;
    }): EnumerableObservableLike<T>;
    <T>(f: SideEffect1<ObserverLike<T>>): ObservableLike<T>;
}
declare const createObservable: CreateObservable;
declare const createRunnable: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const createSubject: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
interface DeferObservable {
    <T>(factory: SideEffect1<ObserverLike<T>>): ObservableLike<T>;
    <T>(factory: SideEffect1<ObserverLike<T>>, options: {
        readonly delay: number;
    }): ObservableLike<T>;
    <T>(factory: SideEffect1<ObserverLike<T>>, options: {
        readonly isRunnable: true;
        readonly delay?: number;
    }): RunnableObservableLike<T>;
    <T>(factory: SideEffect1<ObserverLike<T>>, options: {
        readonly isEnumerable: true;
    }): EnumerableObservableLike<T>;
    <T>(factory: Factory<ObservableLike>): ObservableLike<T>;
    <T>(factory: Factory<ObservableLike>, options: {
        readonly delay: number;
    }): ObservableLike<T>;
    <T>(factory: Factory<RunnableObservableLike>, options: {
        readonly isRunnable: true;
        readonly delay?: number;
    }): RunnableObservableLike<T>;
    <T>(factory: Factory<EnumerableObservableLike>, options: {
        readonly isEnumerable: true;
    }): EnumerableObservableLike<T>;
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
declare const emptyObservableT: Empty<ObservableLike, {
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
declare const generateObservableT: Generate<ObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
declare const generateRunnable: Generate<RunnableLike>["generate"];
declare const generateRunnableT: Generate<RunnableLike>;
declare const neverObservable: Never<EnumerableObservableLike>["never"];
declare const neverObservableT: Never<ObservableLike>;
declare const neverRunnable: Never<RunnableLike>["never"];
declare const neverRunnableT: Never<RunnableLike>;
export { EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservableLike, SubjectLike, SubjectLike_publish, ToObservable, ToRunnable, createObservable, createRunnable, createSubject, deferObservable, deferObservableT, deferRunnable, deferRunnableT, emptyObservable, emptyObservableT, emptyRunnable, emptyRunnableT, generateObservable, generateObservableT, generateRunnable, generateRunnableT, neverObservable, neverObservableT, neverRunnable, neverRunnableT };
