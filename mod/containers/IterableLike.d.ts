import { IterableLike, ToIterable } from "../containers.mjs";
import { Function1 } from "../functions.mjs";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.mjs";
import { ToObservable, EnumerableObservableLike, RunnableObservableLike } from "../rx.mjs";
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
interface IterableToObservable {
    <T>(): Function1<IterableLike<T>, EnumerableObservableLike<T>>;
    <T>(options: {
        delay: number;
        delayStart?: boolean;
    }): Function1<IterableLike<T>, RunnableObservableLike<T>>;
}
declare const toObservable: IterableToObservable;
declare const toObservableT: ToObservable<IterableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT };
