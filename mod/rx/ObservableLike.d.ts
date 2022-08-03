import { ContainerOperator, ContainerOf } from "../containers.mjs";
import { Function1, Equality, SideEffect1, Predicate, Factory, Reducer } from "../functions.mjs";
import { ObservableLike, MulticastObservableLike, HotObservableLike, RunnableObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableLike, DisposableOrTeardown } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
interface Concat {
    <T>(fst: HotObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): HotObservableLike<T>;
    <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T> | EnumerableObservableLike<T>, ...tail: readonly (RunnableObservableLike<T> | EnumerableObservableLike<T>)[]): RunnableObservableLike<T>;
    <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]): EnumerableObservableLike<T>;
}
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare const concat: Concat;
interface DecodeWithCharsetObservable {
    <C extends ObservableLike>(charset?: string | undefined): ContainerOperator<C, ArrayBuffer, string>;
}
declare const decodeWithCharset: DecodeWithCharsetObservable;
interface DistinctUntilChangedObservable {
    <C extends ObservableLike, T>(options?: {
        readonly equality?: Equality<T> | undefined;
    }): ContainerOperator<C, T, T>;
    <T>(options?: {
        readonly equality?: Equality<T> | undefined;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const distinctUntilChanged: DistinctUntilChangedObservable;
interface ForEachObservable {
    <C extends ObservableLike, T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
    <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const forEach: ForEachObservable;
interface KeepObservable {
    <C extends ObservableLike, T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
    <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const keep: KeepObservable;
interface MapObservable {
    <C extends ObservableLike, TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): Function1<ObservableLike<TA>, ObservableLike<TB>>;
}
declare const map: MapObservable;
interface ForkMergeObservable {
    <C extends ObservableLike, TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
    <TIn, TOut>(fst: Function1<ObservableLike<TIn>, ObservableLike<TOut>>, snd: Function1<ObservableLike<TIn>, ObservableLike<TOut>>, ...tail: readonly Function1<ObservableLike<TIn>, ObservableLike<TOut>>[]): Function1<ObservableLike<TIn>, ObservableLike<TOut>>;
}
declare const forkMerge: ForkMergeObservable;
interface MergeObservable {
    <T>(fst: HotObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): HotObservableLike<T>;
    <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T> | EnumerableObservableLike<T>, ...tail: readonly (RunnableObservableLike<T> | EnumerableObservableLike<T>)[]): RunnableObservableLike<T>;
    <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]): EnumerableObservableLike<T>;
}
declare const merge: MergeObservable;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
interface OnSubscribeObservable {
    <C extends ObservableLike, T>(f: Factory<DisposableOrTeardown | void>): Function1<C, ContainerOf<C, T>>;
    <T>(f: Factory<DisposableOrTeardown | void>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const onSubscribe: OnSubscribeObservable;
interface PairwiseObservable {
    <C extends ObservableLike, T>(): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
    <T>(): Function1<ObservableLike<T>, ObservableLike<readonly [
        T,
        T
    ]>>;
}
declare const pairwise: PairwiseObservable;
interface ReduceObservable {
    <C extends ObservableLike, T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const reduce: ReduceObservable;
interface ScanObservable {
    <C extends ObservableLike, T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ObservableLike<T>, ObservableLike<TAcc>>;
}
declare const scan: ScanObservable;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
interface Share {
    <T>(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): Function1<ObservableLike<T>, HotObservableLike<T>>;
}
declare const share: Share;
interface SkipFirstObservable {
    <C extends ObservableLike, T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const skipFirst: SkipFirstObservable;
interface SwitchAllObservable {
    <T>(): Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, EnumerableObservableLike<T>>;
}
declare const switchAll: SwitchAllObservable;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
interface SubscribeOn {
    <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const subscribeOn: SubscribeOn;
interface TakeFirstObservable {
    <C extends ObservableLike, T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeFirst: TakeFirstObservable;
interface TakeLastObservable {
    <C extends ObservableLike, T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeLast: TakeLastObservable;
interface TakeUntilObservable {
    <C extends RunnableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <T>(notifier: ObservableLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeUntil: TakeUntilObservable;
interface TakeWhileObservable {
    <C extends ObservableLike, T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeWhile: TakeWhileObservable;
interface ThrowIfEmptyObservable {
    <C extends ObservableLike, T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
    <T>(factory: Factory<unknown>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const throwIfEmpty: ThrowIfEmptyObservable;
declare const toHotObservable: <T>() => Function1<ObservableLike<T>, HotObservableLike<T>>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;
export { concat, decodeWithCharset, distinctUntilChanged, forEach, forkMerge, getObservableType, keep, map, merge, multicast, onSubscribe, pairwise, reduce, scan, share, skipFirst, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throwIfEmpty, toHotObservable, toPromise };
