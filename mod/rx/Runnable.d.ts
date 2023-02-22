import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Never, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, FromRunnableObservable, RunnableLike, ToRunnable } from "../rx.js";
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const compute: Compute<RunnableLike>["compute"];
export declare const concat: Concat<RunnableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
export declare const concatMap: ConcatMap<RunnableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<RunnableLike>["concatYieldMap"];
export declare const contains: Contains<RunnableLike>["contains"];
export declare const create: <T>(run: import("../functions.js").SideEffect1<import("../rx.js").SinkLike<T>>) => RunnableLike<T>;
export declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableLike>["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"];
export declare const endWith: EndWith<RunnableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
export declare const first: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
export declare const forEach: ForEach<RunnableLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<RunnableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<RunnableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<RunnableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableLike>["fromReadonlyArray"];
export declare const fromRunnableObservable: FromRunnableObservable<RunnableLike>["fromRunnableObservable"];
export declare const generate: Generate<RunnableLike>["generate"];
export declare const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"];
export declare const keep: Keep<RunnableLike>["keep"];
export declare const keepType: KeepType<RunnableLike>["keepType"];
export declare const last: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
export declare const map: Map<RunnableLike>["map"];
export declare const mapTo: MapTo<RunnableLike>["mapTo"];
export declare const never: Never<RunnableLike>["never"];
export declare const onRun: <T>(f: import("../functions.js").Factory<void | import("../util.js").DisposableOrTeardown>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
export declare const pairwise: Pairwise<RunnableLike>["pairwise"];
export declare const reduce: Reduce<RunnableLike>["reduce"];
export declare const repeat: (predicate?: number | import("../functions.js").Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
export declare const run: <T>() => (runnable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableLike>["scan"];
export declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
export declare const startWith: StartWith<RunnableLike>["startWith"];
export declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableLike>["takeLast"];
export declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
export declare const throws: Throws<RunnableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
/** @ignore */
declare const Runnable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: import("../functions.js").Function1<unknown, void | RunnableLike<T_1>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_1, T_1>;
    compute: <T_2>(factory: import("../functions.js").Factory<T_2>, options?: undefined) => RunnableLike<T_2>;
    concat: <T_3>(fst: RunnableLike<T_3>, snd: RunnableLike<T_3>, ...tail: readonly RunnableLike<T_3>[]) => RunnableLike<T_3>;
    concatAll: <T_4>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, RunnableLike<T_4>, T_4>;
    concatMap: <TA, TB>(mapper: import("../functions.js").Function1<TA, RunnableLike<TB>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA, TB>;
    concatWith: <T_5>(snd: RunnableLike<T_5>, ...tail: readonly RunnableLike<T_5>[]) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_5, T_5>;
    concatYieldMap: <TA_1, TB_1>(mapper: import("../functions.js").Function1<TA_1, Generator<TB_1, any, any>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA_1, TB_1>;
    contains: <T_6>(value: T_6, options?: {
        readonly equality?: import("../functions.js").Equality<T_6> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_6, boolean>;
    create: <T_7>(run: import("../functions.js").SideEffect1<import("../rx.js").SinkLike<T_7>>) => RunnableLike<T_7>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, ArrayBuffer, string>;
    defer: <T_8>(factory: import("../functions.js").Factory<RunnableLike<T_8>>, options?: undefined) => RunnableLike<T_8>;
    distinctUntilChanged: <T_9>(options?: {
        readonly equality?: import("../functions.js").Equality<T_9> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_9, T_9>;
    empty: <T_10>(options?: undefined) => RunnableLike<T_10>;
    encodeUtf8: (options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, string, Uint8Array>;
    endWith: <T_11>(value: T_11, ...values: readonly T_11[]) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_11, T_11>;
    everySatisfy: <T_12>(predicate: import("../functions.js").Predicate<T_12>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_12, boolean>;
    first: <T_13>() => import("../functions.js").Function1<RunnableLike<T_13>, import("../functions.js").Optional<T_13>>;
    forEach: <T_14>(effect: import("../functions.js").SideEffect1<T_14>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_14, T_14>;
    fromEnumerable: <T_15>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_15>, RunnableLike<T_15>>;
    fromEnumerableObservable: <T_16>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_16>, RunnableLike<T_16>>;
    fromIterable: <T_17>(options?: undefined) => import("../functions.js").Function1<Iterable<T_17>, RunnableLike<T_17>>;
    fromReadonlyArray: <T_18>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_18[], RunnableLike<T_18>>;
    fromRunnableObservable: <T_19>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").RunnableObservableLike<T_19>, RunnableLike<T_19>>;
    generate: <T_20>(generator: import("../functions.js").Updater<T_20>, initialValue: import("../functions.js").Factory<T_20>, options?: undefined) => RunnableLike<T_20>;
    ignoreElements: <T_21>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, unknown, T_21>;
    keep: <T_22>(predicate: import("../functions.js").Predicate<T_22>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_22, T_22>;
    keepType: <TA_2, TB_2 extends TA_2>(predicate: import("../functions.js").TypePredicate<TA_2, TB_2>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA_2, TB_2>;
    last: <T_23>() => import("../functions.js").Function1<RunnableLike<T_23>, import("../functions.js").Optional<T_23>>;
    map: <TA_3, TB_3>(mapper: import("../functions.js").Function1<TA_3, TB_3>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA_3, TB_3>;
    mapTo: <TA_4, TB_4>(value: TB_4, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, TA_4, TB_4>;
    never: <T_24>(options?: undefined) => RunnableLike<T_24>;
    onRun: <T_25>(f: import("../functions.js").Factory<void | import("../util.js").DisposableOrTeardown>) => (runnable: RunnableLike<T_25>) => RunnableLike<T_25>;
    pairwise: <T_26>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_26, readonly [T_26, T_26]>;
    reduce: <T_27, TAcc>(reducer: import("../functions.js").Reducer<T_27, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_27, TAcc>;
    repeat: (predicate?: number | import("../functions.js").Predicate<number> | undefined) => (c: RunnableLike<unknown>) => RunnableLike<unknown>;
    run: <T_28>() => (runnable: RunnableLike<T_28>) => void;
    scan: <T_29, TAcc_1>(scanner: import("../functions.js").Reducer<T_29, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_29, TAcc_1>;
    skipFirst: <T_30>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_30, T_30>;
    someSatisfy: <T_31>(predicate: import("../functions.js").Predicate<T_31>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_31, boolean>;
    startWith: <T_32>(value: T_32, ...values: readonly T_32[]) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_32, T_32>;
    takeFirst: <T_33>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_33, T_33>;
    takeLast: <T_34>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_34, T_34>;
    takeWhile: <T_35>(predicate: import("../functions.js").Predicate<T_35>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_35, T_35>;
    throwIfEmpty: <T_36>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableLike<unknown>, T_36, T_36>;
    throws: <T_37>(options?: ({
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } & {
        raise?: import("../functions.js").Factory<unknown> | undefined;
    }) | undefined) => RunnableLike<T_37>;
    toReadonlyArray: <T_38>(options?: undefined) => import("../functions.js").Function1<RunnableLike<T_38>, import("../containers.js").ReadonlyArrayLike<T_38>>;
    toRunnable: <T_39>(options?: undefined) => import("../functions.js").Function1<RunnableLike<T_39>, RunnableLike<T_39>>;
};
export default Runnable;
