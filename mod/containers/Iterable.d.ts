import { FromReadonlyArray, FromSequence, IterableLike, ToIterable, ToReadonlyArray } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { FromEnumerableObservable, ToEnumerableObservable, ToObservable, ToRunnableObservable } from "../rx.js";
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
export declare const toRunnableObservable: ToRunnableObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
