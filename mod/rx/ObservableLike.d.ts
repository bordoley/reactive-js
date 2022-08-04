import { Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, ConcatAll, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ContainerOperator, ContainerOf } from "../containers.mjs";
import { Function1, Equality, SideEffect1, Predicate, Factory, Reducer } from "../functions.mjs";
import { ObservableLike, MulticastObservableLike, RunnableObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableLike, DisposableOrTeardown } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare type ConcatObservableType<TObs extends unknown[]> = TObs extends [
    infer F
] ? F : TObs extends [
    infer F,
    ...infer R
] ? F extends EnumerableObservableLike ? ConcatObservableType<R> : F extends RunnableObservableLike ? ConcatObservableType<R> extends EnumerableObservableLike ? F : ConcatObservableType<R> extends RunnableObservableLike ? F : R : F : unknown;
interface ConcatObservable {
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, T>(c1: C1, c2: C2): ConcatObservableType<[
        C1,
        C2
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3): ConcatObservableType<[
        C1,
        C2,
        C3
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4): ConcatObservableType<[
        C1,
        C2,
        C3,
        C4
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5): ConcatObservableType<[
        C1,
        C2,
        C3,
        C4,
        C5
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6): ConcatObservableType<[
        C1,
        C2,
        C3,
        C4,
        C5,
        C6
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, C7 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6, c7: C7): ConcatObservableType<[
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, C7 extends ObservableLike<T>, C8 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6, c7: C7, c8: C8): ConcatObservableType<[
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7,
        C8
    ]>;
}
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 * @hidden
 */
declare const concat: ConcatObservable;
declare const concatT: Concat<ObservableLike>;
interface DecodeWithCharsetObservable {
    <C extends ObservableLike = ObservableLike>(charset?: string | undefined): ContainerOperator<C, ArrayBuffer, string>;
}
declare const decodeWithCharset: DecodeWithCharsetObservable;
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
interface DistinctUntilChangedObservable {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly equality?: Equality<T> | undefined;
    }): ContainerOperator<C, T, T>;
}
declare const distinctUntilChanged: DistinctUntilChangedObservable;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
interface ForEachObservable {
    <T, C extends ObservableLike = ObservableLike>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
    <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const forEach: ForEachObservable;
declare const forEachT: ForEach<ObservableLike>;
interface KeepObservable {
    <T, C extends ObservableLike = ObservableLike>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
    <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const keep: KeepObservable;
declare const keepT: Keep<ObservableLike>;
interface MapObservable {
    <TA, TB, C extends ObservableLike = ObservableLike>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}
declare const map: MapObservable;
declare const mapT: Map<ObservableLike>;
interface ForkMergeObservable {
    <TIn, TOut, C extends ObservableLike = ObservableLike>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
}
declare const forkMerge: ForkMergeObservable;
/** @hidden */
declare const merge: ConcatObservable;
declare const mergeT: Concat<ObservableLike<unknown>>;
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
    <T, C extends ObservableLike = ObservableLike>(f: Factory<DisposableOrTeardown | void>): Function1<C, ContainerOf<C, T>>;
}
declare const onSubscribe: OnSubscribeObservable;
interface PairwiseObservable {
    <T, C extends ObservableLike = ObservableLike>(): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
}
declare const pairwise: PairwiseObservable;
declare const pairwiseT: Pairwise<ObservableLike>;
interface ReduceObservable {
    <T, TAcc, C extends ObservableLike = ObservableLike>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
declare const reduce: ReduceObservable;
declare const reduceT: Reduce<ObservableLike>;
interface ScanObservable {
    <T, TAcc, C extends ObservableLike = ObservableLike>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
declare const scan: ScanObservable;
declare const scanT: Scan<ObservableLike>;
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
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const share: Share;
interface SkipFirstObservable {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const skipFirst: SkipFirstObservable;
declare const skipFirstT: SkipFirst<ObservableLike>;
interface SwitchAllObservable {
    <T>(): Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, EnumerableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
}
declare const switchAll: SwitchAllObservable;
declare const switchAllT: ConcatAll<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
interface SubscribeOn {
    <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const subscribeOn: SubscribeOn;
interface TakeFirstObservable {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const takeFirst: TakeFirstObservable;
declare const takeFirstT: TakeFirst<ObservableLike>;
interface TakeLastObservable {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const takeLast: TakeLastObservable;
declare const takeLastT: TakeLast<ObservableLike>;
interface TakeUntilObservable {
    <C extends RunnableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <T>(notifier: ObservableLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeUntil: TakeUntilObservable;
interface TakeWhileObservable {
    <T, C extends ObservableLike = ObservableLike>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
}
declare const takeWhile: TakeWhileObservable;
declare const takeWhileT: TakeWhile<ObservableLike>;
interface ThrowIfEmptyObservable {
    <T, C extends ObservableLike = ObservableLike>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}
declare const throwIfEmpty: ThrowIfEmptyObservable;
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;
export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toPromise };
