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
