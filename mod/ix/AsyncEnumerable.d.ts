import { FromAsyncIterable, FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile } from "../containers.js";
import { AsyncEnumerableLike, FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, ObservableLike, ScanAsync, ToObservable } from "../rx.js";
export declare const fromAsyncIterable: FromAsyncIterable<AsyncEnumerableLike>["fromAsyncIterable"];
export declare const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<AsyncEnumerableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<AsyncEnumerableLike>["fromSequence"];
export declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
export declare const isEnumerable: import("../functions.js").TypePredicate<AsyncEnumerableLike<unknown>, import("../ix.js").EnumerableAsyncEnumerableLike<unknown>>;
export declare const isRunnable: import("../functions.js").TypePredicate<AsyncEnumerableLike<unknown>, import("../ix.js").RunnableAsyncEnumerableLike<unknown>>;
export declare const keep: Keep<AsyncEnumerableLike>["keep"];
export declare const map: Map<AsyncEnumerableLike>["map"];
export declare const scan: Scan<AsyncEnumerableLike>["scan"];
export declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
export declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
export declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
