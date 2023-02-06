import { FromArray, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray } from "../containers.js";
import { AsyncEnumerableLike, ToAsyncEnumerable, EnumerableLike } from "../ix.js";
import { ScanAsync, ObservableLike, ToObservable } from "../rx.js";
declare const fromArray: FromArray<AsyncEnumerableLike>["fromArray"];
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
declare const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"];
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
declare const keep: Keep<AsyncEnumerableLike>["keep"];
declare const map: Map<AsyncEnumerableLike>["map"];
declare const scan: Scan<AsyncEnumerableLike>["scan"];
declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"];
declare const AsyncEnumerable: FromArray<AsyncEnumerableLike> & Generate<AsyncEnumerableLike> & Keep<AsyncEnumerableLike> & Map<AsyncEnumerableLike> & Scan<AsyncEnumerableLike> & ScanAsync<AsyncEnumerableLike, ObservableLike> & TakeWhile<AsyncEnumerableLike> & ToReadonlyArray<AsyncEnumerableLike>;
export { AsyncEnumerable as default, fromArray, fromEnumerable, generate, keep, map, scan, scanAsync, takeWhile, toObservable, toReadonlyArray };
