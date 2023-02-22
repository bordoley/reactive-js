import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, Generate, Keep, Map, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, FromRunnableObservable, RunnableLike, ToRunnable } from "../rx.js";
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const concat: Concat<RunnableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
export declare const create: <T>(run: import("../functions.js").SideEffect1<import("../rx.js").SinkLike<T>>) => RunnableLike<T>;
export declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableLike>["empty"];
export declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
export declare const first: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
export declare const forEach: ForEach<RunnableLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<RunnableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<RunnableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<RunnableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableLike>["fromReadonlyArray"];
export declare const fromRunnableObservable: FromRunnableObservable<RunnableLike>["fromRunnableObservable"];
export declare const generate: Generate<RunnableLike>["generate"];
export declare const keep: Keep<RunnableLike>["keep"];
export declare const last: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
export declare const map: Map<RunnableLike>["map"];
export declare const never: Never<RunnableLike>["never"];
export declare const onRun: <T>(f: import("../functions.js").Factory<void | import("../util.js").DisposableOrTeardown>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
export declare const pairwise: Pairwise<RunnableLike>["pairwise"];
export declare const reduce: Reduce<RunnableLike>["reduce"];
export declare const repeat: (predicate?: number | import("../functions.js").Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
export declare const run: <T>() => (runnable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableLike>["scan"];
export declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
export declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableLike>["takeLast"];
export declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
/** @ignore */
declare const Runnable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: import("../functions.js").Function1<unknown, void | RunnableLike<T_1>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: RunnableLike<T_2>, snd: RunnableLike<T_2>, ...tail: readonly RunnableLike<T_2>[]) => RunnableLike<T_2>;
    concatAll: <T_3>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, RunnableLike<T_3>, T_3>;
    create: <T_4>(run: import("../functions.js").SideEffect1<import("../rx.js").SinkLike<T_4>>) => RunnableLike<T_4>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, ArrayBuffer, string>;
    defer: <T_5>(factory: import("../functions.js").Factory<RunnableLike<T_5>>, options?: undefined) => RunnableLike<T_5>;
    distinctUntilChanged: <T_6>(options?: {
        readonly equality?: import("../functions.js").Equality<T_6> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_6, T_6>;
    empty: <T_7>(options?: undefined) => RunnableLike<T_7>;
    everySatisfy: <T_8>(predicate: import("../functions.js").Predicate<T_8>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_8, boolean>;
    first: <T_9>() => import("../functions.js").Function1<RunnableLike<T_9>, import("../functions.js").Optional<T_9>>;
    forEach: <T_10>(effect: import("../functions.js").SideEffect1<T_10>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_10, T_10>;
    fromEnumerable: <T_11>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_11>, RunnableLike<T_11>>;
    fromEnumerableObservable: <T_12>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_12>, RunnableLike<T_12>>;
    fromIterable: <T_13>(options?: undefined) => import("../functions.js").Function1<Iterable<T_13>, RunnableLike<T_13>>;
    fromReadonlyArray: <T_14>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_14[], RunnableLike<T_14>>;
    fromRunnableObservable: <T_15>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").RunnableObservableLike<T_15>, RunnableLike<T_15>>;
    generate: <T_16>(generator: import("../functions.js").Updater<T_16>, initialValue: import("../functions.js").Factory<T_16>, options?: undefined) => RunnableLike<T_16>;
    keep: <T_17>(predicate: import("../functions.js").Predicate<T_17>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_17, T_17>;
    last: <T_18>() => import("../functions.js").Function1<RunnableLike<T_18>, import("../functions.js").Optional<T_18>>;
    map: <TA, TB>(mapper: import("../functions.js").Function1<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA, TB>;
    never: <T_19>(options?: undefined) => RunnableLike<T_19>;
    onRun: <T_20>(f: import("../functions.js").Factory<void | import("../util.js").DisposableOrTeardown>) => (runnable: RunnableLike<T_20>) => RunnableLike<T_20>;
    pairwise: <T_21>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_21, readonly [T_21, T_21]>;
    reduce: <T_22, TAcc>(reducer: import("../functions.js").Reducer<T_22, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_22, TAcc>;
    repeat: (predicate?: number | import("../functions.js").Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    run: <T_23>() => (runnable: RunnableLike<T_23>) => void;
    scan: <T_24, TAcc_1>(scanner: import("../functions.js").Reducer<T_24, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_24, TAcc_1>;
    skipFirst: <T_25>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_25, T_25>;
    someSatisfy: <T_26>(predicate: import("../functions.js").Predicate<T_26>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_26, boolean>;
    takeFirst: <T_27>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_27, T_27>;
    takeLast: <T_28>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_28, T_28>;
    takeWhile: <T_29>(predicate: import("../functions.js").Predicate<T_29>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_29, T_29>;
    throwIfEmpty: <T_30>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_30, T_30>;
    toReadonlyArray: <T_31>(options?: undefined) => import("../functions.js").Function1<RunnableLike<T_31>, import("../containers.js").ReadonlyArrayLike<T_31>>;
    toRunnable: <T_32>(options?: undefined) => import("../functions.js").Function1<RunnableLike<T_32>, RunnableLike<T_32>>;
};
export default Runnable;
