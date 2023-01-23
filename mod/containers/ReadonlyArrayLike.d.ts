import { Predicate, Function1 } from "../functions.js";
import { Empty, ReadonlyArrayLike, ForEach, Keep, Map, ToReadonlyArray, ToSequence } from "../containers.js";
import { ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
declare const empty: Empty<ReadonlyArrayLike>["empty"];
declare const emptyT: Empty<ReadonlyArrayLike>;
declare const every: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
declare const forEachT: ForEach<ReadonlyArrayLike>;
declare const keep: Keep<ReadonlyArrayLike>["keep"];
declare const keepT: Keep<ReadonlyArrayLike>;
declare const map: Map<ReadonlyArrayLike>["map"];
declare const mapT: Map<ReadonlyArrayLike>;
declare const some: <T>(predicate: Predicate<T>) => Function1<ReadonlyArrayLike<T>, boolean>;
declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>;
declare const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toEnumerableObservable"];
declare const toEnumerableObservableT: ToEnumerableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>;
declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
declare const toObservableT: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>;
declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>;
declare const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"];
declare const toRunnableT: ToRunnable<ReadonlyArrayLike>;
declare const toRunnableObservable: ToRunnableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnableObservable"];
declare const toRunnableObservableT: ToRunnableObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>;
declare const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"];
declare const toSequenceT: ToSequence<ReadonlyArrayLike>;
export { empty, emptyT, every, forEach, forEachT, keep, keepT, map, mapT, some, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, toSequence, toSequenceT };
