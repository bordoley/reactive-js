import { DisposableOrTeardown } from "../util.js";
import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ReadonlyArrayLike, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator } from "../containers.js";
import { SideEffect1, Function1, Optional, Factory, Predicate, Equality, Updater, Reducer } from "../functions.js";
import { RunnableLike, SinkLike, ToRunnable } from "../rx.js";
declare const buffer: Buffer<RunnableLike>["buffer"];
declare const catchError: CatchError<RunnableLike>["catchError"];
declare const concat: Concat<RunnableLike>["concat"];
declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
declare const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
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
    create: <T_4>(run: SideEffect1<SinkLike<T_4>>) => RunnableLike<T_4>;
    decodeWithCharset: (charset?: string | undefined) => ContainerOperator<RunnableLike<unknown>, ArrayBuffer, string>;
    defer: <T_5>(factory: Factory<RunnableLike<T_5>>) => RunnableLike<T_5>;
    distinctUntilChanged: <T_6>(options?: {
        readonly equality?: Equality<T_6> | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_6, T_6>;
    empty: <T_7>(options?: undefined) => RunnableLike<T_7>;
    everySatisfy: <T_8>(predicate: Predicate<T_8>) => ContainerOperator<RunnableLike<unknown>, T_8, boolean>;
    first: <T_9>() => Function1<RunnableLike<T_9>, Optional<T_9>>;
    forEach: <T_10>(effect: SideEffect1<T_10>) => ContainerOperator<RunnableLike<unknown>, T_10, T_10>;
    fromArray: <T_11>(options?: undefined) => Function1<ReadonlyArrayLike<T_11>, RunnableLike<T_11>>;
    generate: <T_12>(generator: Updater<T_12>, initialValue: Factory<T_12>, options?: undefined) => RunnableLike<T_12>;
    keep: <T_13>(predicate: Predicate<T_13>) => ContainerOperator<RunnableLike<unknown>, T_13, T_13>;
    last: <T_14>() => Function1<RunnableLike<T_14>, Optional<T_14>>;
    map: <TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<RunnableLike<unknown>, TA, TB>;
    never: <T_15>() => RunnableLike<T_15>;
    onRun: <T_16>(f: Factory<void | DisposableOrTeardown>) => (runnable: RunnableLike<T_16>) => RunnableLike<T_16>;
    pairwise: <T_17>() => ContainerOperator<RunnableLike<unknown>, T_17, readonly [
        T_17,
        T_17
    ]>;
    reduce: <T_18, TAcc>(reducer: Reducer<T_18, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<RunnableLike<unknown>, T_18, TAcc>;
    repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    run: <T_19>() => (runnable: RunnableLike<T_19>) => void;
    scan: <T_20, TAcc_1>(scanner: Reducer<T_20, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<RunnableLike<unknown>, T_20, TAcc_1>;
    skipFirst: <T_21>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_21, T_21>;
    someSatisfy: <T_22>(predicate: Predicate<T_22>) => ContainerOperator<RunnableLike<unknown>, T_22, boolean>;
    takeFirst: <T_23>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_23, T_23>;
    takeLast: <T_24>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_24, T_24>;
    takeWhile: <T_25>(predicate: Predicate<T_25>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_25, T_25>;
    throwIfEmpty: <T_26>(factory: Factory<unknown>) => ContainerOperator<RunnableLike<unknown>, T_26, T_26>;
    toReadonlyArray: <T_27>(options?: undefined) => Function1<RunnableLike<T_27>, ReadonlyArrayLike<T_27>>;
    toRunnable: <T_28>(options?: undefined) => Function1<RunnableLike<T_28>, RunnableLike<T_28>>;
};
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromArray, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
