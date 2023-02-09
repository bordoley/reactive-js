import { ToEnumerableObservable, ToObservable, ToRunnableObservable, EnumerableObservableLike, ObservableLike, RunnableObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { ToAsyncEnumerable, ToEnumerable, AsyncEnumerableLike, EnumerableLike } from "../ix.js";
import { IterableLike, ToIterable } from "../containers.js";
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
/** @ignore */
declare const Iterable: {
    toAsyncEnumerable: <T>(options?: undefined) => Function1<IterableLike<T>, AsyncEnumerableLike<T>>;
    toEnumerable: <T_1>(options?: undefined) => Function1<IterableLike<T_1>, EnumerableLike<T_1>>;
    toIterable: <T_2>(options?: undefined) => Function1<IterableLike<T_2>, IterableLike<T_2>>;
    toEnumerableObservable: <T_3>(options?: undefined) => Function1<IterableLike<T_3>, EnumerableObservableLike<T_3>>;
    toObservable: <T_4>(options?: {
        delay: number;
        delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_4>, ObservableLike<T_4>>;
    toRunnableObservable: <T_5>(options?: {
        delay: number;
        delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_5>, RunnableObservableLike<T_5>>;
};
export { Iterable as default, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
