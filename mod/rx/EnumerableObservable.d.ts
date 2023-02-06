import { SideEffect1, Equality, Predicate, Function1, Updater, Factory, Reducer } from "../functions.js";
import { EnumerableObservableLike, ObserverLike, ScanAsync, RunnableLike, ToRunnable } from "../rx.js";
import { ContainerOperator, CatchError, ConcatAll, Defer, ToPromiseable, ReadonlyArrayLike, Buffer, Concat, DecodeWithCharset, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromArray, Generate, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.js";
import { ToEnumerable } from "../ix.js";
import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling.js";
import { ToFlowable } from "../streaming.js";
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly T[]>;
declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
declare const concat: <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]) => EnumerableObservableLike<T>;
declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
declare const decodeWithCharset: (charset?: string | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, ArrayBuffer, string>;
declare const defer: Defer<EnumerableObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const empty: <T>(options?: {
    delay: number;
} | undefined) => EnumerableObservableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => ContainerOperator<EnumerableObservableLike<unknown>, T, boolean>;
declare const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const fromArray: <T>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => Function1<readonly T[], EnumerableObservableLike<T>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: undefined) => EnumerableObservableLike<T>;
declare const keep: <T>(predicate: Predicate<T>) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<EnumerableObservableLike<unknown>, TA, TB>;
declare const merge: <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]) => EnumerableObservableLike<T>;
declare const mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const never: <T>() => EnumerableObservableLike<T>;
declare const pairwise: <T>() => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly [
    T,
    T
]>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<EnumerableObservableLike<unknown>, T, TAcc>;
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<EnumerableObservableLike<unknown>, T, TAcc>;
declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
declare const skipFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => ContainerOperator<EnumerableObservableLike<unknown>, T, boolean>;
declare const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const takeFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"];
declare const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"];
declare const toPromise: ToPromiseable<EnumerableObservableLike, SchedulerLike>["toPromise"];
declare const toReadonlyArray: <T>(options?: {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
} | undefined) => Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const toRunnable: <T>(options?: undefined) => Function1<EnumerableObservableLike<T>, RunnableLike<T>>;
declare const zip: {
    <TA, TB>(a: EnumerableObservableLike<TA>, b: EnumerableObservableLike<TB>): EnumerableObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: EnumerableObservableLike<TA_1>, b: EnumerableObservableLike<TB_1>, c: EnumerableObservableLike<TC>): EnumerableObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: EnumerableObservableLike<TA_2>, b: EnumerableObservableLike<TB_2>, c: EnumerableObservableLike<TC_1>, d: EnumerableObservableLike<TD>): EnumerableObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: EnumerableObservableLike<TA_3>, b: EnumerableObservableLike<TB_3>, c: EnumerableObservableLike<TC_2>, d: EnumerableObservableLike<TD_1>, e: EnumerableObservableLike<TE>): EnumerableObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: EnumerableObservableLike<TA_4>, b: EnumerableObservableLike<TB_4>, c: EnumerableObservableLike<TC_3>, d: EnumerableObservableLike<TD_2>, e: EnumerableObservableLike<TE_1>, f: EnumerableObservableLike<TF>): EnumerableObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableObservableLike<TA_5>, b: EnumerableObservableLike<TB_5>, c: EnumerableObservableLike<TC_4>, d: EnumerableObservableLike<TD_3>, e: EnumerableObservableLike<TE_2>, f: EnumerableObservableLike<TF_1>, g: EnumerableObservableLike<TG>): EnumerableObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableObservableLike<TA_6>, b: EnumerableObservableLike<TB_6>, c: EnumerableObservableLike<TC_5>, d: EnumerableObservableLike<TD_4>, e: EnumerableObservableLike<TE_3>, f: EnumerableObservableLike<TF_2>, g: EnumerableObservableLike<TG_1>, h: EnumerableObservableLike<TH>): EnumerableObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableObservableLike<TA_7>, b: EnumerableObservableLike<TB_7>, c: EnumerableObservableLike<TC_6>, d: EnumerableObservableLike<TD_5>, e: EnumerableObservableLike<TE_4>, f: EnumerableObservableLike<TF_3>, g: EnumerableObservableLike<TG_2>, h: EnumerableObservableLike<TH_1>, i: EnumerableObservableLike<TI>): EnumerableObservableLike<readonly [
        TA_7,
        TB_7,
        TC_6,
        TD_5,
        TE_4,
        TF_3,
        TG_2,
        TH_1,
        TI
    ]>;
};
declare const EnumerableObservable: Buffer<EnumerableObservableLike> & CatchError<EnumerableObservableLike> & Concat<EnumerableObservableLike> & ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}> & DecodeWithCharset<EnumerableObservableLike> & Defer<EnumerableObservableLike> & DistinctUntilChanged<EnumerableObservableLike> & Empty<EnumerableObservableLike, {
    delay: number;
}> & EverySatisfy<EnumerableObservableLike> & ForEach<EnumerableObservableLike> & FromArray<EnumerableObservableLike> & Generate<EnumerableObservableLike> & Keep<EnumerableObservableLike> & Map<EnumerableObservableLike> & Pairwise<EnumerableObservableLike> & Reduce<EnumerableObservableLike> & Scan<EnumerableObservableLike> & ScanAsync<EnumerableObservableLike, EnumerableObservableLike> & SkipFirst<EnumerableObservableLike> & SomeSatisfy<EnumerableObservableLike> & TakeFirst<EnumerableObservableLike> & TakeLast<EnumerableObservableLike> & TakeWhile<EnumerableObservableLike> & ThrowIfEmpty<EnumerableObservableLike> & ToEnumerable<EnumerableObservableLike> & ToFlowable<EnumerableObservableLike> & ToPromiseable<EnumerableObservableLike, SchedulerLike> & ToReadonlyArray<EnumerableObservableLike> & ToRunnable<EnumerableObservableLike> & Zip<EnumerableObservableLike>;
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, EnumerableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromArray, generate, keep, map, merge, mergeAll, never, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, zip };
