import { ContainerOperator, FromArrayOptions, Generate, Keep, Map, Scan, TakeWhile, ToReadonlyArray } from "../containers.mjs";
import { Function1 } from "../functions.mjs";
import { AsyncEnumeratorLike, AsyncEnumerableLike, ToAsyncEnumerable, EnumerableLike } from "../ix.mjs";
import { ObservableLike, ScanAsync, ToObservable } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
declare const createAsyncEnumerator: <T>(op: ContainerOperator<ObservableLike<unknown>, void, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => AsyncEnumeratorLike<T>;
declare const fromArray: <T>(_?: Partial<FromArrayOptions>) => Function1<readonly T[], AsyncEnumerableLike<T>>;
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
export { createAsyncEnumerator, fromArray, fromEnumerable, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT };
