import { ToEnumerableObservable, ToObservable, ToRunnableObservable, EnumerableObservableLike, ObservableLike, RunnableObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
import { IterableLike, ToIterable } from "../containers.js";
declare const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"];
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
    fromEnumerable: <T>(options?: undefined) => Function1<EnumerableLike<T>, IterableLike<T>>;
    toAsyncEnumerable: <T_1>(options?: undefined) => Function1<IterableLike<T_1>, AsyncEnumerableLike<T_1>>;
    toEnumerable: <T_2>(options?: undefined) => Function1<IterableLike<T_2>, EnumerableLike<T_2>>;
    toIterable: <T_3>(options?: undefined) => Function1<IterableLike<T_3>, IterableLike<T_3>>;
    toEnumerableObservable: <T_4>(options?: undefined) => Function1<IterableLike<T_4>, EnumerableObservableLike<T_4>>;
    toObservable: <T_5>(options?: {
        delay: number;
        delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_5>, ObservableLike<T_5>>;
    toRunnableObservable: <T_6>(options?: {
        delay: number;
        delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_6>, RunnableObservableLike<T_6>>;
};
export { Iterable as default, fromEnumerable, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
