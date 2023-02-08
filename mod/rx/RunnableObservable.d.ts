import { SideEffect1, Equality, Predicate, Function1, Updater, Factory, Reducer } from "../functions.js";
import { RunnableObservableLike, ObserverLike, ScanAsync, RunnableLike, ToRunnable } from "../rx.js";
import { ContainerOperator, CatchError, ConcatAll, Defer, ToPromiseable, ReadonlyArrayLike, Buffer, Concat, DecodeWithCharset, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromArray, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.js";
import { ToEnumerable } from "../ix.js";
import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling.js";
import { ToFlowable } from "../streaming.js";
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, readonly T[]>;
declare const catchError: CatchError<RunnableObservableLike>["catchError"];
declare const concat: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
declare const decodeWithCharset: (charset?: string | undefined) => ContainerOperator<RunnableObservableLike<unknown>, ArrayBuffer, string>;
declare const defer: Defer<RunnableObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const empty: <T>(options?: {
    delay: number;
} | undefined) => RunnableObservableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => ContainerOperator<RunnableObservableLike<unknown>, T, boolean>;
declare const exhaust: ConcatAll<RunnableObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const fromArray: <T>(options?: {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => Function1<readonly T[], RunnableObservableLike<T>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay: number;
    readonly delayStart: boolean;
} | undefined) => RunnableObservableLike<T>;
declare const keep: <T>(predicate: Predicate<T>) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<RunnableObservableLike<unknown>, TA, TB>;
declare const merge: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
declare const mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const never: <T>() => RunnableObservableLike<T>;
declare const pairwise: <T>() => ContainerOperator<RunnableObservableLike<unknown>, T, readonly [
    T,
    T
]>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<RunnableObservableLike<unknown>, T, TAcc>;
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<RunnableObservableLike<unknown>, T, TAcc>;
declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
declare const skipFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => ContainerOperator<RunnableObservableLike<unknown>, T, boolean>;
declare const switchAll: ConcatAll<RunnableObservableLike>["concatAll"];
declare const takeFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const toEnumerable: ToEnumerable<RunnableObservableLike>["toEnumerable"];
declare const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"];
declare const toPromise: ToPromiseable<RunnableObservableLike, SchedulerLike>["toPromise"];
declare const toReadonlyArray: <T>(options?: {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
} | undefined) => Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const toRunnable: <T>(options?: undefined) => Function1<RunnableObservableLike<T>, RunnableLike<T>>;
declare const zip: {
    <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
/** @ignore */
declare const RunnableObservable: Buffer<RunnableObservableLike> & CatchError<RunnableObservableLike> & Concat<RunnableObservableLike> & ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}> & DecodeWithCharset<RunnableObservableLike> & Defer<RunnableObservableLike> & DistinctUntilChanged<RunnableObservableLike> & Empty<RunnableObservableLike, {
    delay: number;
}> & EverySatisfy<RunnableObservableLike> & ForEach<RunnableObservableLike> & FromArray<RunnableObservableLike> & Generate<RunnableObservableLike> & Keep<RunnableObservableLike> & Map<RunnableObservableLike> & Never<RunnableObservableLike> & Pairwise<RunnableObservableLike> & Reduce<RunnableObservableLike> & Scan<RunnableObservableLike> & ScanAsync<RunnableObservableLike, RunnableObservableLike> & SkipFirst<RunnableObservableLike> & SomeSatisfy<RunnableObservableLike> & TakeFirst<RunnableObservableLike> & TakeLast<RunnableObservableLike> & TakeWhile<RunnableObservableLike> & ThrowIfEmpty<RunnableObservableLike> & ToEnumerable<RunnableObservableLike> & ToFlowable<RunnableObservableLike> & ToPromiseable<RunnableObservableLike, SchedulerLike> & ToReadonlyArray<RunnableObservableLike> & ToRunnable<RunnableObservableLike> & Zip<RunnableObservableLike>;
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, RunnableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromArray, generate, keep, map, merge, mergeAll, never, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, zip };
