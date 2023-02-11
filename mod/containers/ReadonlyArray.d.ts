import { FromAsyncEnumerable, FromEnumerable, ToEnumerable, AsyncEnumerableLike, EnumerableLike } from "../ix.js";
import { Empty, ReadonlyArrayLike, ForEach, FromArray, FromSequence, Keep, Map, ToReadonlyArray, ToSequence, ContainerOperator, SequenceLike } from "../containers.js";
import { EnumerableObservableLike, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, ObservableLike, RunnableLike, RunnableObservableLike } from "../rx.js";
import { VirtualTimeSchedulerLike } from "../scheduling.js";
import { Predicate, Function1, Factory, SideEffect1 } from "../functions.js";
declare const empty: Empty<ReadonlyArrayLike>["empty"];
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
declare const fromArray: FromArray<ReadonlyArrayLike>["fromArray"];
declare const fromAsyncEnumerable: FromAsyncEnumerable<ReadonlyArrayLike>["fromAsyncEnumerable"];
declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
declare const fromEnumerableObservable: <T>(options?: {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
} | undefined) => Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
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
declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
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
    fromArray: <T_3>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_3[], ReadonlyArrayLike<T_3>>;
    fromAsyncEnumerable: <T_4>(options?: undefined) => Function1<AsyncEnumerableLike<T_4>, ReadonlyArrayLike<T_4>>;
    fromEnumerable: <T_5>(options?: undefined) => Function1<EnumerableLike<T_5>, ReadonlyArrayLike<T_5>>;
    fromEnumerableObservable: <T_6>(options?: {
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    } | undefined) => Function1<EnumerableObservableLike<T_6>, ReadonlyArrayLike<T_6>>;
    fromSequence: <T_7>(options?: undefined) => Function1<SequenceLike<T_7>, ReadonlyArrayLike<T_7>>;
    keep: <T_8>(predicate: Predicate<T_8>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, T_8, T_8>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<ReadonlyArrayLike<unknown>, TA, TB>;
    some: <T_9>(predicate: Predicate<T_9>) => Function1<ReadonlyArrayLike<T_9>, boolean>;
    toEnumerable: <T_10>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => Function1<ReadonlyArrayLike<T_10>, EnumerableLike<T_10>>;
    toEnumerableObservable: <T_11>(options?: {
        readonly count?: number | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_11>, EnumerableObservableLike<T_11>>;
    toObservable: <T_12>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_12>, ObservableLike<T_12>>;
    toReadonlyArray: <T_13>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => Function1<ReadonlyArrayLike<T_13>, ReadonlyArrayLike<T_13>>;
    toRunnable: <T_14>(options?: undefined) => Function1<ReadonlyArrayLike<T_14>, RunnableLike<T_14>>;
    toRunnableObservable: <T_15>(options?: {
        readonly count?: number | undefined;
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
    } | undefined) => Function1<ReadonlyArrayLike<T_15>, RunnableObservableLike<T_15>>;
    toSequence: <T_16>(options?: undefined) => Function1<ReadonlyArrayLike<T_16>, SequenceLike<T_16>>;
};
export { ReadonlyArray as default, empty, every, forEach, fromArray, fromAsyncEnumerable, fromEnumerable, fromEnumerableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
