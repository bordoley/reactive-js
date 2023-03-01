import { FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray } from "../containers.js";
import { FromEnumerable, RunnableAsyncEnumerableLike } from "../ix.js";
import { FromEnumerableObservable } from "../rx.js";
export declare const fromEnumerable: FromEnumerable<RunnableAsyncEnumerableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<RunnableAsyncEnumerableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<RunnableAsyncEnumerableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableAsyncEnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<RunnableAsyncEnumerableLike>["fromSequence"];
export declare const generate: Generate<RunnableAsyncEnumerableLike>["generate"];
export declare const keep: Keep<RunnableAsyncEnumerableLike>["keep"];
export declare const map: Map<RunnableAsyncEnumerableLike>["map"];
export declare const scan: Scan<RunnableAsyncEnumerableLike>["scan"];
export declare const takeWhile: TakeWhile<RunnableAsyncEnumerableLike>["takeWhile"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableAsyncEnumerableLike>["toReadonlyArray"];
