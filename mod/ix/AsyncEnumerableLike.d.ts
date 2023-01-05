import { FromArray, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray } from "../containers.mjs";
import { AsyncEnumerableLike, ToAsyncEnumerable, EnumerableLike } from "../ix.mjs";
import { ScanAsync, ObservableLike, ToObservable } from "../rx.mjs";
declare const fromArray: FromArray<AsyncEnumerableLike>["fromArray"];
declare const fromArrayT: FromArray<AsyncEnumerableLike>;
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
declare const generateT: Generate<AsyncEnumerableLike, {
    delay: number;
}>;
declare const keep: Keep<AsyncEnumerableLike>["keep"];
declare const keepT: Keep<AsyncEnumerableLike>;
declare const map: Map<AsyncEnumerableLike>["map"];
declare const mapT: Map<AsyncEnumerableLike>;
declare const scan: Scan<AsyncEnumerableLike>["scan"];
declare const scanT: Scan<AsyncEnumerableLike>;
declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
declare const scanAsyncT: ScanAsync<AsyncEnumerableLike, ObservableLike>;
declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<AsyncEnumerableLike>;
declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
declare const toObservableT: ToObservable<AsyncEnumerableLike>;
declare const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<AsyncEnumerableLike>;
export { fromArray, fromArrayT, fromEnumerable, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };
