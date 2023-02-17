import { FromEnumerable, EnumerableLike } from "../ix.js";
import { DisposableOrTeardown } from "../util.js";
import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ReadonlyArrayLike, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator } from "../containers.js";
import { SideEffect1, Function1, Optional, Factory, Predicate, Equality, Updater, Reducer } from "../functions.js";
import { RunnableLike, SinkLike, FromEnumerableObservable, FromRunnableObservable, ToRunnable, EnumerableObservableLike, RunnableObservableLike } from "../rx.js";
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
declare const fromEnumerable: FromEnumerable<RunnableLike>["fromEnumerable"];
declare const fromEnumerableObservable: FromEnumerableObservable<RunnableLike>["fromEnumerableObservable"];
declare const fromReadonlyArray: <T>(options?: undefined) => Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
declare const fromRunnableObservable: FromRunnableObservable<RunnableLike>["fromRunnableObservable"];
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
    catchError: <T_1>(onError: Function1<unknown, void | RunnableLike<T_1>>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: RunnableLike<T_2>, snd: RunnableLike<T_2>, ...tail: readonly RunnableLike<T_2>[]) => RunnableLike<T_2>;
    concatAll: <T_3>(options?: undefined) => ContainerOperator<RunnableLike<unknown>, RunnableLike<T_3>, T_3>;
    create: <T_4>(run: SideEffect1<SinkLike<T_4>>) => RunnableLike<T_4>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, ArrayBuffer, string>;
    defer: <T_5>(factory: Factory<RunnableLike<T_5>>, options?: undefined) => RunnableLike<T_5>;
    distinctUntilChanged: <T_6>(options?: {
        readonly equality?: Equality<T_6> | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_6, T_6>;
    empty: <T_7>(options?: undefined) => RunnableLike<T_7>;
    everySatisfy: <T_8>(predicate: Predicate<T_8>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_8, boolean>;
    first: <T_9>() => Function1<RunnableLike<T_9>, Optional<T_9>>;
    forEach: <T_10>(effect: SideEffect1<T_10>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_10, T_10>;
    fromEnumerable: <T_11>(options?: undefined) => Function1<EnumerableLike<T_11>, RunnableLike<T_11>>;
    fromEnumerableObservable: <T_12>(options?: undefined) => Function1<EnumerableObservableLike<T_12>, RunnableLike<T_12>>;
    fromReadonlyArray: <T_13>(options?: undefined) => Function1<ReadonlyArrayLike<T_13>, RunnableLike<T_13>>;
    fromRunnableObservable: <T_14>(options?: undefined) => Function1<RunnableObservableLike<T_14>, RunnableLike<T_14>>;
    generate: <T_15>(generator: Updater<T_15>, initialValue: Factory<T_15>, options?: undefined) => RunnableLike<T_15>;
    keep: <T_16>(predicate: Predicate<T_16>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_16, T_16>;
    last: <T_17>() => Function1<RunnableLike<T_17>, Optional<T_17>>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, TA, TB>;
    never: <T_18>(options?: undefined) => RunnableLike<T_18>;
    onRun: <T_19>(f: Factory<void | DisposableOrTeardown>) => (runnable: RunnableLike<T_19>) => RunnableLike<T_19>;
    pairwise: <T_20>(options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_20, readonly [
        T_20,
        T_20
    ]>;
    reduce: <T_21, TAcc>(reducer: Reducer<T_21, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_21, TAcc>;
    repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    run: <T_22>() => (runnable: RunnableLike<T_22>) => void;
    scan: <T_23, TAcc_1>(scanner: Reducer<T_23, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_23, TAcc_1>;
    skipFirst: <T_24>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_24, T_24>;
    someSatisfy: <T_25>(predicate: Predicate<T_25>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_25, boolean>;
    takeFirst: <T_26>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_26, T_26>;
    takeLast: <T_27>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_27, T_27>;
    takeWhile: <T_28>(predicate: Predicate<T_28>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_28, T_28>;
    throwIfEmpty: <T_29>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_29, T_29>;
    toReadonlyArray: <T_30>(options?: undefined) => Function1<RunnableLike<T_30>, ReadonlyArrayLike<T_30>>;
    toRunnable: <T_31>(options?: undefined) => Function1<RunnableLike<T_31>, RunnableLike<T_31>>;
};
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromEnumerable, fromEnumerableObservable, fromReadonlyArray, fromRunnableObservable, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
