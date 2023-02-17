import { FromEnumerable, EnumerableLike } from "../ix.js";
import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, ContainerOperator, ReadonlyArrayLike } from "../containers.js";
import { DisposableOrTeardown } from "../util.js";
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
declare const fromIterable: FromIterable<RunnableLike>["fromIterable"];
declare const fromReadonlyArray: FromReadonlyArray<RunnableLike>["fromReadonlyArray"];
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
    fromIterable: <T_13>(options?: undefined) => Function1<Iterable<T_13>, RunnableLike<T_13>>;
    fromReadonlyArray: <T_14>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_14[], RunnableLike<T_14>>;
    fromRunnableObservable: <T_15>(options?: undefined) => Function1<RunnableObservableLike<T_15>, RunnableLike<T_15>>;
    generate: <T_16>(generator: Updater<T_16>, initialValue: Factory<T_16>, options?: undefined) => RunnableLike<T_16>;
    keep: <T_17>(predicate: Predicate<T_17>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_17, T_17>;
    last: <T_18>() => Function1<RunnableLike<T_18>, Optional<T_18>>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, TA, TB>;
    never: <T_19>(options?: undefined) => RunnableLike<T_19>;
    onRun: <T_20>(f: Factory<void | DisposableOrTeardown>) => (runnable: RunnableLike<T_20>) => RunnableLike<T_20>;
    pairwise: <T_21>(options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_21, readonly [
        T_21,
        T_21
    ]>;
    reduce: <T_22, TAcc>(reducer: Reducer<T_22, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_22, TAcc>;
    repeat: (predicate?: number | Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    run: <T_23>() => (runnable: RunnableLike<T_23>) => void;
    scan: <T_24, TAcc_1>(scanner: Reducer<T_24, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_24, TAcc_1>;
    skipFirst: <T_25>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_25, T_25>;
    someSatisfy: <T_26>(predicate: Predicate<T_26>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_26, boolean>;
    takeFirst: <T_27>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_27, T_27>;
    takeLast: <T_28>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_28, T_28>;
    takeWhile: <T_29>(predicate: Predicate<T_29>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<RunnableLike<unknown>, T_29, T_29>;
    throwIfEmpty: <T_30>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<RunnableLike<unknown>, T_30, T_30>;
    toReadonlyArray: <T_31>(options?: undefined) => Function1<RunnableLike<T_31>, ReadonlyArrayLike<T_31>>;
    toRunnable: <T_32>(options?: undefined) => Function1<RunnableLike<T_32>, RunnableLike<T_32>>;
};
export { buffer, catchError, concat, concatAll, create, decodeWithCharset, Runnable as default, defer, distinctUntilChanged, empty, everySatisfy, first, forEach, fromEnumerable, fromEnumerableObservable, fromIterable, fromReadonlyArray, fromRunnableObservable, generate, keep, last, map, never, onRun, pairwise, reduce, repeat, run, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, toRunnable };
