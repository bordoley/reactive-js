import { DisposableOrTeardown } from "../util.js";
import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ReadonlyArrayLike, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator } from "../containers.js";
import { SideEffect1, Function1, Optional, Factory, Predicate, Equality, Updater, Reducer } from "../functions.js";
import { SinkLike, RunnableLike, ToRunnable } from "../rx.js";
declare const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const buffer: Buffer<RunnableLike>["buffer"];
declare const catchError: CatchError<RunnableLike>["catchError"];
declare const concat: Concat<RunnableLike>["concat"];
declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
declare const defer: Defer<RunnableLike>["defer"];
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
declare const empty: Empty<RunnableLike>["empty"];
declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
declare const first: <T>() => Function1<RunnableLike<T>, Optional<T>>;
declare const forEach: ForEach<RunnableLike>["forEach"];
declare const fromArray: <T>(options?: undefined) => Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
declare const generate: Generate<RunnableLike>["generate"];
declare const keep: Keep<RunnableLike>["keep"];
declare const last: <T>() => Function1<RunnableLike<T>, Optional<T>>;
declare const map: Map<RunnableLike>["map"];
declare const never: Never<RunnableLike>["never"];
declare const onRun: <T>(f: Factory<void | DisposableOrTeardown>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
declare const pairwise: Pairwise<RunnableLike>["pairwise"];
declare const reduce: Reduce<RunnableLike>["reduce"];
declare const repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
declare const run: <T>() => (runnable: RunnableLike<T>) => void;
declare const scan: Scan<RunnableLike>["scan"];
declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
declare const takeLast: TakeLast<RunnableLike>["takeLast"];
declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
/** @ignore */
declare const Runnable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: Function1<unknown, void | RunnableLike<T_1>>) => ContainerOperator<RunnableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: RunnableLike<T_2>, snd: RunnableLike<T_2>, ...tail: readonly RunnableLike<T_2>[]) => RunnableLike<T_2>;
    concatAll: <T_3>(options?: undefined) => ContainerOperator<RunnableLike<unknown>, RunnableLike<T_3>, T_3>;
    decodeWithCharset: (charset?: string | undefined) => ContainerOperator<RunnableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: Factory<RunnableLike<T_4>>) => RunnableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: Equality<T_5> | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: undefined) => RunnableLike<T_6>;
    everySatisfy: <T_7>(predicate: Predicate<T_7>) => ContainerOperator<RunnableLike<unknown>, T_7, boolean>;
    first: <T_8>() => Function1<RunnableLike<T_8>, Optional<T_8>>;
    forEach: <T_9>(effect: SideEffect1<T_9>) => ContainerOperator<RunnableLike<unknown>, T_9, T_9>;
    fromArray: <T_10>(options?: undefined) => Function1<ReadonlyArrayLike<T_10>, RunnableLike<T_10>>;
    generate: <T_11>(generator: Updater<T_11>, initialValue: Factory<T_11>, options?: undefined) => RunnableLike<T_11>;
    keep: <T_12>(predicate: Predicate<T_12>) => ContainerOperator<RunnableLike<unknown>, T_12, T_12>;
    last: <T_13>() => Function1<RunnableLike<T_13>, Optional<T_13>>;
    map: <TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<RunnableLike<unknown>, TA, TB>;
    pairwise: <T_14>() => ContainerOperator<RunnableLike<unknown>, T_14, readonly [
        T_14,
        T_14
    ]>;
    reduce: <T_15, TAcc>(reducer: Reducer<T_15, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<RunnableLike<unknown>, T_15, TAcc>;
    repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    scan: <T_16, TAcc_1>(scanner: Reducer<T_16, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<RunnableLike<unknown>, T_16, TAcc_1>;
    skipFirst: <T_17>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_17, T_17>;
    someSatisfy: <T_18>(predicate: Predicate<T_18>) => ContainerOperator<RunnableLike<unknown>, T_18, boolean>;
    takeFirst: <T_19>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_19, T_19>;
    takeLast: <T_20>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_20, T_20>;
    takeWhile: <T_21>(predicate: Predicate<T_21>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_21, T_21>;
    throwIfEmpty: <T_22>(factory: Factory<unknown>) => ContainerOperator<RunnableLike<unknown>, T_22, T_22>;
    toReadonlyArray: <T_23>(options?: undefined) => Function1<RunnableLike<T_23>, ReadonlyArrayLike<T_23>>;
    toRunnable: <T_24>(options?: undefined) => Function1<RunnableLike<T_24>, RunnableLike<T_24>>;
};
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromArray, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
