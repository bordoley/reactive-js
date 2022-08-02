import { Concat, DecodeWithCharset, DistinctUntilChanged, ForEach, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator, ContainerOf, ReadonlyArrayLike } from "../containers.mjs";
import { Factory, Option, Equality, SideEffect1, Predicate, Function1, Reducer } from "../functions.mjs";
import { RunnableObservableLike, ObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
import { ToFlowable } from "../streaming.mjs";
interface ConcatRunnableObservable {
    <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]): RunnableObservableLike<T>;
    <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]): EnumerableObservableLike<T>;
}
declare const concat: ConcatRunnableObservable;
declare const concatT: Concat<RunnableObservableLike>;
interface DecodeWithCharsetRunnableObservable {
    (charset?: string | undefined): ContainerOperator<RunnableObservableLike, ArrayBuffer, string>;
    (charset?: string | undefined): ContainerOperator<EnumerableObservableLike, ArrayBuffer, string>;
}
declare const decodeWithCharset: DecodeWithCharsetRunnableObservable;
declare const decodeWithCharsetT: DecodeWithCharset<RunnableObservableLike>;
interface DistinctUntilChangedRunnableObservable {
    <T>(options?: Option<{
        readonly equality?: Equality<T>;
    }>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: Option<{
        readonly equality?: Equality<T>;
    }>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const distinctUntilChanged: DistinctUntilChangedRunnableObservable;
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike>;
interface ForEachRunnableObservable {
    <T>(effect: SideEffect1<T>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(effect: SideEffect1<T>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const forEach: ForEachRunnableObservable;
declare const forEachT: ForEach<RunnableObservableLike>;
interface ForkMergeRunnableObservable {
    <TIn, TOut>(fst: ContainerOperator<RunnableObservableLike, TIn, TOut>, snd: ContainerOperator<RunnableObservableLike, TIn, TOut>, ...tail: readonly ContainerOperator<RunnableObservableLike, TIn, TOut>[]): ContainerOperator<RunnableObservableLike, TIn, TOut>;
    <TIn, TOut>(fst: ContainerOperator<EnumerableObservableLike, TIn, TOut>, snd: ContainerOperator<EnumerableObservableLike, TIn, TOut>, ...tail: readonly ContainerOperator<EnumerableObservableLike, TIn, TOut>[]): ContainerOperator<EnumerableObservableLike, TIn, TOut>;
}
declare const forkMerge: ForkMergeRunnableObservable;
interface KeephRunnableObservable {
    <T>(predicate: Predicate<T>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(predicate: Predicate<T>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const keep: KeephRunnableObservable;
declare const keepT: Keep<RunnableObservableLike>;
interface MaphRunnableObservable {
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<RunnableObservableLike, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<EnumerableObservableLike, TA, TB>;
}
declare const map: MaphRunnableObservable;
declare const mapT: Map<RunnableObservableLike>;
interface MergeRunnableObservable {
    <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]): ObservableLike<T>;
    <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]): ObservableLike<T>;
}
declare const merge: MergeRunnableObservable;
declare const mergeT: Concat<ObservableLike<unknown>>;
interface PairwiseRunnableObservable {
    <T>(): ContainerOperator<RunnableObservableLike, T, readonly [
        T,
        T
    ]>;
    <T>(): ContainerOperator<EnumerableObservableLike, T, readonly [
        T,
        T
    ]>;
}
declare const pairwise: PairwiseRunnableObservable;
declare const pairwiseT: Pairwise<RunnableObservableLike>;
interface ReduceRunnableObservable {
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<RunnableObservableLike, T, TAcc>;
    <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
declare const reduce: ReduceRunnableObservable;
declare const reduceT: Reduce<RunnableObservableLike>;
interface ScanRunnableObservable {
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<RunnableObservableLike, T, TAcc>;
    <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
declare const scan: ScanRunnableObservable;
declare const scanT: Scan<RunnableObservableLike>;
interface SkipFirstnRunnableObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const skipFirst: SkipFirstnRunnableObservable;
declare const skipFirstT: SkipFirst<RunnableObservableLike>;
interface TakeFirstRunnableObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeFirst: TakeFirstRunnableObservable;
declare const takeFirstT: TakeFirst<RunnableObservableLike>;
interface TakeLastRunnableObservable {
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(options?: {
        readonly count?: number;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeLast: TakeLastRunnableObservable;
declare const takeLastT: TakeLast<RunnableObservableLike>;
interface TakeUntilRunnableObservable {
    <T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<ContainerOf<RunnableObservableLike, T> | ContainerOf<EnumerableObservableLike, T>, ContainerOf<RunnableObservableLike, T>>;
}
declare const takeUntil: TakeUntilRunnableObservable;
interface TakeWhileRunnableObservable {
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const takeWhile: TakeWhileRunnableObservable;
declare const takeWhileT: TakeWhile<RunnableObservableLike>;
interface ThrowIfEmptyRunnableObservable {
    <T>(factory: Factory<unknown>): ContainerOperator<RunnableObservableLike, T, T>;
    <T>(factory: Factory<unknown>): ContainerOperator<EnumerableObservableLike, T, T>;
}
declare const throwIfEmpty: ThrowIfEmptyRunnableObservable;
declare const throwIfEmptyT: ThrowIfEmpty<RunnableObservableLike>;
declare const toFlowable: ToFlowable<RunnableObservableLike | EnumerableObservableLike>["toFlowable"];
declare const toFlowableT: ToFlowable<RunnableObservableLike>;
interface ToReadonlyArrayObservable {
    <T>(options?: Partial<{
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>): Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
    <T>(options?: Partial<{
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    }>): Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
}
declare const toReadonlyArray: ToReadonlyArrayObservable;
declare const toReadonlyArrayT: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, keep, keepT, map, mapT, merge, mergeT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT };
