import { EnumerableObservableLike, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { VirtualTimeSchedulerLike } from "../scheduling.js";
import { Predicate, Function1, Factory } from "../functions.js";
import { Empty, ReadonlyArrayLike, ForEach, FromArray, FromSequence, Keep, Map, ToReadonlyArray, ToSequence } from "../containers.js";
import { FromAsyncEnumerable, FromEnumerable, ToEnumerable } from "../ix.js";
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
export { empty, every, forEach, fromArray, fromAsyncEnumerable, fromEnumerable, fromEnumerableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
