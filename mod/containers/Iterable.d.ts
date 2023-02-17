import { ToFlowable, FlowableLike } from "../streaming.js";
import { IterableLike, FromReadonlyArray, FromSequence, ToIterable, ToReadonlyArray, SequenceLike, ReadonlyArrayLike } from "../containers.js";
import { FromEnumerableObservable, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, EnumerableObservableLike, ObservableLike, RunnableLike, RunnableObservableLike } from "../rx.js";
import { Function1 } from "../functions.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
declare const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"];
declare const fromEnumerableObservable: FromEnumerableObservable<IterableLike>["fromEnumerableObservable"];
declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
declare const fromSequence: FromSequence<IterableLike>["fromSequence"];
declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"];
declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
declare const toIterable: ToIterable<IterableLike>["toIterable"];
declare const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"];
declare const toFlowable: ToFlowable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
declare const toObservable: ToObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"];
declare const toRunnable: ToRunnable<IterableLike>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
/** @ignore */
declare const Iterable: {
    fromEnumerable: <T>(options?: undefined) => Function1<EnumerableLike<T>, IterableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => Function1<EnumerableObservableLike<T_1>, IterableLike<T_1>>;
    fromReadonlyArray: <T_2>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_2[], IterableLike<T_2>>;
    fromSequence: <T_3>(options?: undefined) => Function1<SequenceLike<T_3>, IterableLike<T_3>>;
    toAsyncEnumerable: <T_4>(options?: undefined) => Function1<IterableLike<T_4>, AsyncEnumerableLike<T_4>>;
    toEnumerable: <T_5>(options?: undefined) => Function1<IterableLike<T_5>, EnumerableLike<T_5>>;
    toEnumerableObservable: <T_6>(options?: undefined) => Function1<IterableLike<T_6>, EnumerableObservableLike<T_6>>;
    toFlowable: <T_7>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_7>, FlowableLike<T_7>>;
    toIterable: <T_8>(options?: undefined) => Function1<IterableLike<T_8>, IterableLike<T_8>>;
    toObservable: <T_9>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_9>, ObservableLike<T_9>>;
    toReadonlyArray: <T_10>(options?: undefined) => Function1<IterableLike<T_10>, ReadonlyArrayLike<T_10>>;
    toRunnable: <T_11>(options?: undefined) => Function1<IterableLike<T_11>, RunnableLike<T_11>>;
    toRunnableObservable: <T_12>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<IterableLike<T_12>, RunnableObservableLike<T_12>>;
};
export { Iterable as default, fromEnumerable, fromEnumerableObservable, fromReadonlyArray, fromSequence, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toFlowable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable };
