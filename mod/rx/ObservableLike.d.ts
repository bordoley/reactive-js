import { ContainerOperator, Buffer, Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, ContainerOf, Pairwise, Reduce, Scan, SkipFirst, ConcatAll, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Zip } from "../containers.mjs";
import { Function1, Equality, SideEffect1, Predicate, Factory, Reducer, Option } from "../functions.mjs";
import { EnumerableLike } from "../ix.mjs";
import { ObservableLike, MulticastObservableLike, RunnableObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableOrTeardown, DisposableLike } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<unknown, ObservableLike<unknown>>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
declare const bufferT: Buffer<ObservableLike<unknown>>;
declare type ConcattedObservable<TObs extends unknown[]> = TObs extends [
    infer F
] ? F : TObs extends [
    infer F,
    ...infer R
] ? F extends EnumerableObservableLike ? ConcattedObservable<R> : F extends RunnableObservableLike ? ConcattedObservable<R> extends EnumerableObservableLike ? F : ConcattedObservable<R> extends RunnableObservableLike ? F : R : F : never;
interface concat {
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, T>(c1: C1, c2: C2): ConcattedObservable<[
        C1,
        C2
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3): ConcattedObservable<[
        C1,
        C2,
        C3
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4): ConcattedObservable<[
        C1,
        C2,
        C3,
        C4
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5): ConcattedObservable<[
        C1,
        C2,
        C3,
        C4,
        C5
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6): ConcattedObservable<[
        C1,
        C2,
        C3,
        C4,
        C5,
        C6
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, C7 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6, c7: C7): ConcattedObservable<[
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7
    ]>;
    <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, C3 extends ObservableLike<T>, C4 extends ObservableLike<T>, C5 extends ObservableLike<T>, C6 extends ObservableLike<T>, C7 extends ObservableLike<T>, C8 extends ObservableLike<T>, T>(c1: C1, c2: C2, c3: C3, c4: C4, c5: C5, c6: C6, c7: C7, c8: C8): ConcattedObservable<[
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
declare const concat: concat;
declare const concatT: Concat<ObservableLike>;
interface decodeWithCharset {
    <C extends ObservableLike = ObservableLike>(charset?: string | undefined): ContainerOperator<C, ArrayBuffer, string>;
}
declare const decodeWithCharset: decodeWithCharset;
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
interface distinctUntilChanged {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly equality?: Equality<T> | undefined;
    }): ContainerOperator<C, T, T>;
}
declare const distinctUntilChanged: distinctUntilChanged;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
interface forEach {
    <T, C extends ObservableLike = ObservableLike>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
    <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const forEach: forEach;
declare const forEachT: ForEach<ObservableLike>;
interface keep {
    <T, C extends ObservableLike = ObservableLike>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
    <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const keep: keep;
declare const keepT: Keep<ObservableLike>;
interface map {
    <TA, TB, C extends ObservableLike = ObservableLike>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}
declare const map: map;
declare const mapT: Map<ObservableLike>;
interface forkMerge {
    <TIn, TOut, C extends ObservableLike = ObservableLike>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
}
declare const forkMerge: forkMerge;
/** @hidden */
declare const merge: concat;
declare const mergeT: Concat<ObservableLike>;
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
interface onSubscribe {
    <T, C extends ObservableLike = ObservableLike>(f: Factory<DisposableOrTeardown | void>): Function1<C, ContainerOf<C, T>>;
}
declare const onSubscribe: onSubscribe;
interface pairwise {
    <T, C extends ObservableLike = ObservableLike>(): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
}
declare const pairwise: pairwise;
declare const pairwiseT: Pairwise<ObservableLike>;
interface reduce {
    <T, TAcc, C extends ObservableLike = ObservableLike>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
declare const reduce: reduce;
declare const reduceT: Reduce<ObservableLike>;
interface scan {
    <T, TAcc, C extends ObservableLike = ObservableLike>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
declare const scan: scan;
declare const scanT: Scan<ObservableLike>;
interface share {
    /**
     * Returns an `ObservableLike` backed by a shared refcounted subscription to the
     * source. When the refcount goes to 0, the underlying subscription
     * to the source is disposed.
     *
     * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
     * @param replay The number of events that should be replayed when the `ObservableLike`
     * is subscribed to.
     */
    <T>(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const share: share;
interface skipFirst {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const skipFirst: skipFirst;
declare const skipFirstT: SkipFirst<ObservableLike>;
interface switchAll {
    <T>(): Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends RunnableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends EnumerableObservableLike<T>, T>(): Function1<C, EnumerableObservableLike<T>>;
    <C extends EnumerableObservableLike<CInner>, CInner extends RunnableObservableLike<T>, T>(): Function1<C, RunnableObservableLike<T>>;
}
declare const switchAll: switchAll;
declare const switchAllT: ConcatAll<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
interface subscribeOn {
    <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const subscribeOn: subscribeOn;
interface takeFirst {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const takeFirst: takeFirst;
declare const takeFirstT: TakeFirst<ObservableLike>;
interface takeLast {
    <T, C extends ObservableLike = ObservableLike>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
declare const takeLast: takeLast;
declare const takeLastT: TakeLast<ObservableLike>;
interface takeUntil {
    <C extends RunnableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <C extends EnumerableObservableLike<T>, T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
    <T>(notifier: ObservableLike): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const takeUntil: takeUntil;
interface takeWhile {
    <T, C extends ObservableLike = ObservableLike>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
}
declare const takeWhile: takeWhile;
declare const takeWhileT: TakeWhile<ObservableLike>;
interface throwIfEmpty {
    <T, C extends ObservableLike = ObservableLike>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}
declare const throwIfEmpty: throwIfEmpty;
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike>;
declare const toEnumerable: <T>() => Function1<ObservableLike<T>, Option<EnumerableLike<T>>>;
declare const toEnumerableObservable: <T>() => (obs: ObservableLike<T>) => Option<EnumerableObservableLike<T>>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;
declare const toRunnableObservable: <T>() => (obs: ObservableLike<T>) => Option<RunnableObservableLike<T>>;
declare const zip: Zip<ObservableLike>["zip"];
declare const zipT: Zip<ObservableLike>;
export { buffer, bufferT, concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toPromise, toRunnableObservable, zip, zipT };
