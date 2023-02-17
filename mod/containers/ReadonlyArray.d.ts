import { ToFlowable, FlowableLike } from "../streaming.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
import { Empty, ReadonlyArrayLike, ForEach, FromIterable, FromReadonlyArray, FromSequence, Keep, Map, ToIterable, ToReadonlyArray, ToSequence, ContainerOperator, SequenceLike, IterableLike } from "../containers.js";
import { EnumerableObservableLike, RunnableObservableLike, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, ObservableLike, RunnableLike } from "../rx.js";
import { Predicate, Function1, SideEffect1 } from "../functions.js";
declare const empty: Empty<ReadonlyArrayLike>["empty"];
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
declare const fromEnumerableObservable: <T>(options?: undefined) => Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"];
declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
declare const fromRunnableObservable: <T>(options?: undefined) => Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"];
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const map: Map<ReadonlyArrayLike>["map"];
declare const some: <T>(predicate: Predicate<T>) => Function1<ReadonlyArrayLike<T>, boolean>;
declare const toAsyncEnumerable: ToAsyncEnumerable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}>["toAsyncEnumerable"];
declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
declare const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toEnumerableObservable"];
declare const toFlowable: ToFlowable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
declare const toIterable: ToIterable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toIterable"];
declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
declare const toRunnable: ToRunnable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnableObservable"];
declare const toSequence: ToSequence<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toSequence"];
/** @ignore */
declare const ReadonlyArray: {
    empty: <T>(options?: undefined) => ReadonlyArrayLike<T>;
    every: <T_1>(predicate: Predicate<T_1>) => Function1<readonly T_1[], boolean>;
    forEach: <T_2>(effect: SideEffect1<T_2>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, T_2, T_2>;
    fromEnumerable: <T_3>(options?: undefined) => Function1<EnumerableLike<T_3>, ReadonlyArrayLike<T_3>>;
    fromEnumerableObservable: <T_4>(options?: undefined) => Function1<EnumerableObservableLike<T_4>, ReadonlyArrayLike<T_4>>;
    fromIterable: <T_5>(options?: undefined) => Function1<Iterable<T_5>, ReadonlyArrayLike<T_5>>;
    fromReadonlyArray: <T_6>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_6[], ReadonlyArrayLike<T_6>>;
    fromSequence: <T_7>(options?: undefined) => Function1<SequenceLike<T_7>, ReadonlyArrayLike<T_7>>;
    keep: <T_8>(predicate: Predicate<T_8>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, T_8, T_8>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, TA, TB>;
    some: <T_9>(predicate: Predicate<T_9>) => Function1<ReadonlyArrayLike<T_9>, boolean>;
    toAsyncEnumerable: <T_10>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_10>, AsyncEnumerableLike<T_10>>;
    toEnumerable: <T_11>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => Function1<ReadonlyArrayLike<T_11>, EnumerableLike<T_11>>;
    toEnumerableObservable: <T_12>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_12>, EnumerableObservableLike<T_12>>;
    toFlowable: <T_13>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_13>, FlowableLike<T_13>>;
    toIterable: <T_14>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_14>, IterableLike<T_14>>;
    toObservable: <T_15>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_15>, ObservableLike<T_15>>;
    toReadonlyArray: <T_16>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_16>, ReadonlyArrayLike<T_16>>;
    toRunnable: <T_17>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_17>, RunnableLike<T_17>>;
    toRunnableObservable: <T_18>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_18>, RunnableObservableLike<T_18>>;
    toSequence: <T_19>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_19>, SequenceLike<T_19>>;
};
export { ReadonlyArray as default, empty, every, forEach, fromEnumerable, fromEnumerableObservable, fromIterable, fromReadonlyArray, fromRunnableObservable, fromSequence, keep, map, some, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toFlowable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
