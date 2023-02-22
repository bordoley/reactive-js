import { FromReadonlyArray, FromSequence, IterableLike, ToIterable, ToReadonlyArray } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { FromEnumerableObservable, ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<IterableLike>["fromEnumerableObservable"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<IterableLike>["fromSequence"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
export declare const toIterable: ToIterable<IterableLike>["toIterable"];
export declare const toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"];
export declare const toFlowable: ToFlowable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toObservable: ToObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<IterableLike>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
/** @ignore */
declare const Iterable: {
    fromEnumerable: <T>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T>, IterableLike<T>>;
    fromEnumerableObservable: <T_1>(options?: undefined) => import("../functions.js").Function1<import("../rx.js").EnumerableObservableLike<T_1>, IterableLike<T_1>>;
    fromReadonlyArray: <T_2>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_2[], IterableLike<T_2>>;
    fromSequence: <T_3>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_3>, IterableLike<T_3>>;
    toAsyncEnumerable: <T_4>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_4>, import("../ix.js").AsyncEnumerableLike<T_4>>;
    toEnumerable: <T_5>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_5>, import("../ix.js").EnumerableLike<T_5>>;
    toEnumerableObservable: <T_6>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_6>, import("../rx.js").EnumerableObservableLike<T_6>>;
    toFlowable: <T_7>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<IterableLike<T_7>, import("../streaming.js").FlowableLike<T_7>>;
    toIterable: <T_8>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_8>, IterableLike<T_8>>;
    toObservable: <T_9>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<IterableLike<T_9>, import("../rx.js").ObservableLike<T_9>>;
    toReadonlyArray: <T_10>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_10>, import("../containers.js").ReadonlyArrayLike<T_10>>;
    toRunnable: <T_11>(options?: undefined) => import("../functions.js").Function1<IterableLike<T_11>, import("../rx.js").RunnableLike<T_11>>;
    toRunnableObservable: <T_12>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<IterableLike<T_12>, import("../rx.js").RunnableObservableLike<T_12>>;
};
export default Iterable;
