import { FromEnumerable, ToEnumerable, EnumerableLike } from "../ix.js";
import { Empty, ReadonlyArrayLike, ForEach, FromReadonlyArray, FromSequence, Keep, Map, ToIterable, ToReadonlyArray, ToSequence, ContainerOperator, SequenceLike, IterableLike } from "../containers.js";
import { EnumerableObservableLike, RunnableObservableLike, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, ObservableLike, RunnableLike } from "../rx.js";
import { Predicate, Function1, SideEffect1 } from "../functions.js";
declare const empty: Empty<ReadonlyArrayLike>["empty"];
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
declare const fromEnumerableObservable: <T>(options?: undefined) => Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
declare const fromRunnableObservable: <T>(options?: undefined) => Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"];
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const map: Map<ReadonlyArrayLike>["map"];
declare const some: <T>(predicate: Predicate<T>) => Function1<ReadonlyArrayLike<T>, boolean>;
declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
declare const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toEnumerableObservable"];
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
declare const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnableObservable"];
declare const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"];
/** @ignore */
declare const ReadonlyArray: {
    empty: <T>(options?: undefined) => ReadonlyArrayLike<T>;
    every: <T_1>(predicate: Predicate<T_1>) => Function1<readonly T_1[], boolean>;
    forEach: <T_2>(effect: SideEffect1<T_2>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, T_2, T_2>;
    fromEnumerable: <T_3>(options?: undefined) => Function1<EnumerableLike<T_3>, ReadonlyArrayLike<T_3>>;
    fromEnumerableObservable: <T_4>(options?: undefined) => Function1<EnumerableObservableLike<T_4>, ReadonlyArrayLike<T_4>>;
    fromReadonlyArray: <T_5>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_5[], ReadonlyArrayLike<T_5>>;
    fromSequence: <T_6>(options?: undefined) => Function1<SequenceLike<T_6>, ReadonlyArrayLike<T_6>>;
    keep: <T_7>(predicate: Predicate<T_7>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, T_7, T_7>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, TA, TB>;
    some: <T_8>(predicate: Predicate<T_8>) => Function1<ReadonlyArrayLike<T_8>, boolean>;
    toEnumerable: <T_9>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => Function1<ReadonlyArrayLike<T_9>, EnumerableLike<T_9>>;
    toEnumerableObservable: <T_10>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_10>, EnumerableObservableLike<T_10>>;
    toIterable: <T_11>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_11>, IterableLike<T_11>>;
    toObservable: <T_12>(options?: ({
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } & {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    }) | undefined) => Function1<ReadonlyArrayLike<T_12>, ObservableLike<T_12>>;
    toReadonlyArray: <T_13>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_13>, ReadonlyArrayLike<T_13>>;
    toRunnable: <T_14>(options?: undefined) => Function1<ReadonlyArrayLike<T_14>, RunnableLike<T_14>>;
    toRunnableObservable: <T_15>(options?: ({
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } & {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    }) | undefined) => Function1<ReadonlyArrayLike<T_15>, RunnableObservableLike<T_15>>;
    toSequence: <T_16>(options?: undefined) => Function1<ReadonlyArrayLike<T_16>, SequenceLike<T_16>>;
};
export { ReadonlyArray as default, empty, every, forEach, fromEnumerable, fromEnumerableObservable, fromReadonlyArray, fromRunnableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
