import { FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray } from "../containers.js";
import { EnumerableAsyncEnumerableLike, FromEnumerable } from "../ix.js";
import { FromEnumerableObservable } from "../rx.js";
export declare const fromEnumerable: FromEnumerable<EnumerableAsyncEnumerableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<EnumerableAsyncEnumerableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<EnumerableAsyncEnumerableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableAsyncEnumerableLike, {
    readonly start?: number;
    readonly count?: number;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<EnumerableAsyncEnumerableLike>["fromSequence"];
export declare const generate: Generate<EnumerableAsyncEnumerableLike>["generate"];
export declare const keep: Keep<EnumerableAsyncEnumerableLike>["keep"];
export declare const map: Map<EnumerableAsyncEnumerableLike>["map"];
export declare const scan: Scan<EnumerableAsyncEnumerableLike>["scan"];
export declare const takeWhile: TakeWhile<EnumerableAsyncEnumerableLike>["takeWhile"];
export declare const toReadonlyArray: ToReadonlyArray<EnumerableAsyncEnumerableLike>["toReadonlyArray"];
