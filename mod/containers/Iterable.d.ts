import { IterableLike, ToIterable } from "../containers.js";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnableObservable } from "../rx.js";
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"];
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"];
declare const toObservable: ToObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toObservable"];
declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    delay: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
export { toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
