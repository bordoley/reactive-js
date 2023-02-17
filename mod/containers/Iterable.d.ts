import { ToEnumerableObservable, ToObservable, ToRunnableObservable, EnumerableObservableLike, ObservableLike, RunnableObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
import { FromReadonlyArray, IterableLike, ToIterable } from "../containers.js";
declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
declare const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"];
declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"];
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"];
declare const toObservable: ToObservable<IterableLike>["toObservable"];
declare const toRunnableObservable: ToRunnableObservable<IterableLike>["toRunnableObservable"];
/** @ignore */
declare const Iterable: {
    fromEnumerable: <T>(options?: undefined) => Function1<EnumerableLike<T>, IterableLike<T>>;
    fromReadonlyArray: <T_1>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_1[], IterableLike<T_1>>;
    toAsyncEnumerable: <T_2>(options?: undefined) => Function1<IterableLike<T_2>, AsyncEnumerableLike<T_2>>;
    toEnumerable: <T_3>(options?: undefined) => Function1<IterableLike<T_3>, EnumerableLike<T_3>>;
    toIterable: <T_4>(options?: undefined) => Function1<IterableLike<T_4>, IterableLike<T_4>>;
    toEnumerableObservable: <T_5>(options?: undefined) => Function1<IterableLike<T_5>, EnumerableObservableLike<T_5>>;
    toObservable: <T_6>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_6>, ObservableLike<T_6>>;
    toRunnableObservable: <T_7>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_7>, RunnableObservableLike<T_7>>;
};
export { Iterable as default, fromEnumerable, fromReadonlyArray, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
