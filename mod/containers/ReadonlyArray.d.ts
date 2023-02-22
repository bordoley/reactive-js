import { Empty, ForEach, FromIterable, FromReadonlyArray, FromSequence, Keep, KeepType, Map, ReadonlyArrayLike, ToIterable, ToReadonlyArray, ToSequence } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { FromEnumerableObservable, FromRunnableObservable, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const empty: Empty<ReadonlyArrayLike>["empty"];
export declare const every: <T>(predicate: import("../functions.js").Predicate<T>) => import("../functions.js").Function1<readonly T[], boolean>;
export declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<ReadonlyArrayLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
export declare const fromRunnableObservable: FromRunnableObservable<ReadonlyArrayLike>["fromRunnableObservable"];
export declare const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"];
export declare const keep: Keep<ReadonlyArrayLike>["keep"];
export declare const keepType: KeepType<ReadonlyArrayLike>["keepType"];
export declare const map: Map<ReadonlyArrayLike>["map"];
export declare const some: <T>(predicate: import("../functions.js").Predicate<T>) => import("../functions.js").Function1<ReadonlyArrayLike<T>, boolean>;
export declare const toAsyncEnumerable: ToAsyncEnumerable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export declare const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toEnumerableObservable"];
export declare const toFlowable: ToFlowable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toIterable"];
export declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnableObservable"];
export declare const toSequence: ToSequence<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toSequence"];
/** @ignore */
declare const ReadonlyArray: {
    empty: <T>(options?: undefined) => ReadonlyArrayLike<T>;
    every: <T_1>(predicate: import("../functions.js").Predicate<T_1>) => import("../functions.js").Function1<readonly T_1[], boolean>;
    forEach: <T_2>(effect: import("../functions.js").SideEffect1<T_2>, options?: undefined) => import("../containers.js").ContainerOperator<ReadonlyArrayLike<unknown>, T_2, T_2>;
    fromEnumerable: <T_3>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_3>, ReadonlyArrayLike<T_3>>;
    fromEnumerableObservable: <T_4>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_4>, ReadonlyArrayLike<T_4>>;
    fromIterable: <T_5>(options?: undefined) => import("../functions.js").Function1<Iterable<T_5>, ReadonlyArrayLike<T_5>>;
    fromReadonlyArray: <T_6>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_6[], ReadonlyArrayLike<T_6>>;
    fromSequence: <T_7>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_7>, ReadonlyArrayLike<T_7>>;
    keep: <T_8>(predicate: import("../functions.js").Predicate<T_8>, options?: undefined) => import("../containers.js").ContainerOperator<ReadonlyArrayLike<unknown>, T_8, T_8>;
    keepType: <TA, TB extends TA>(predicate: import("../functions.js").TypePredicate<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<ReadonlyArrayLike<unknown>, TA, TB>;
    map: <TA_1, TB_1>(mapper: import("../functions.js").Function1<TA_1, TB_1>, options?: undefined) => import("../containers.js").ContainerOperator<ReadonlyArrayLike<unknown>, TA_1, TB_1>;
    some: <T_9>(predicate: import("../functions.js").Predicate<T_9>) => import("../functions.js").Function1<ReadonlyArrayLike<T_9>, boolean>;
    toAsyncEnumerable: <T_10>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_10>, import("../ix.js").AsyncEnumerableLike<T_10>>;
    toEnumerable: <T_11>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_11>, import("../ix.js").EnumerableLike<T_11>>;
    toEnumerableObservable: <T_12>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_12>, import("../rx.js").EnumerableObservableLike<T_12>>;
    toFlowable: <T_13>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_13>, import("../streaming.js").FlowableLike<T_13>>;
    toIterable: <T_14>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_14>, import("../containers.js").IterableLike<T_14>>;
    toObservable: <T_15>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_15>, import("../rx.js").ObservableLike<T_15>>;
    toReadonlyArray: <T_16>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_16>, ReadonlyArrayLike<T_16>>;
    toRunnable: <T_17>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_17>, import("../rx.js").RunnableLike<T_17>>;
    toRunnableObservable: <T_18>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_18>, import("../rx.js").RunnableObservableLike<T_18>>;
    toSequence: <T_19>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => import("../functions.js").Function1<ReadonlyArrayLike<T_19>, import("../containers.js").SequenceLike<T_19>>;
};
export default ReadonlyArray;
