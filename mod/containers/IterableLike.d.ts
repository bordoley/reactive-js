import { IterableLike, ToIterable } from "../containers.js";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnableObservable } from "../rx.js";
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"];
declare const toAsyncEnumerableT: ToAsyncEnumerable<IterableLike>;
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<IterableLike>;
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toIterableT: ToIterable<IterableLike>;
declare const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"];
declare const toEnumerableObservableT: ToEnumerableObservable<IterableLike>;
declare const toObservable: ToObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toObservable"];
declare const toObservableT: ToObservable<IterableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
declare const toRunnableObservableT: ToRunnableObservable<IterableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toRunnableObservable, toRunnableObservableT };
