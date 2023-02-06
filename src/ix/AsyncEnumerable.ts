import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import ReadonlyArray_toAsyncEnumerable from "../containers/__internal__/ReadonlyArray/ReadonlyArray.toAsyncEnumerable";
import { AsyncEnumerableLike, EnumerableLike, ToAsyncEnumerable } from "../ix";
import { ObservableLike, ScanAsync, ToObservable } from "../rx";
import AsyncEnumerable_generate from "./__internal__/AsyncEnumerable/AsyncEnumerable.generate";
import AsyncEnumerable_keep from "./__internal__/AsyncEnumerable/AsyncEnumerable.keep";
import AsyncEnumerable_map from "./__internal__/AsyncEnumerable/AsyncEnumerable.map";
import AsyncEnumerable_scan from "./__internal__/AsyncEnumerable/AsyncEnumerable.scan";
import AsyncEnumerable_scanAsync from "./__internal__/AsyncEnumerable/AsyncEnumerable.scanAsync";
import AsyncEnumerable_takeWhile from "./__internal__/AsyncEnumerable/AsyncEnumerable.takeWhile";
import AsyncEnumerable_toObservable from "./__internal__/AsyncEnumerable/AsyncEnumerable.toObservable";
import AsyncEnumerable_toReadonlyArray from "./__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray";
import Enumerable_toAsyncEnumerable from "./__internal__/Enumerable/Enumerable.toAsyncEnumerable";

export const fromArray: FromArray<AsyncEnumerableLike>["fromArray"] =
  ReadonlyArray_toAsyncEnumerable;

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  Enumerable_toAsyncEnumerable;

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate: Generate<
  AsyncEnumerableLike,
  { delay: number }
>["generate"] = AsyncEnumerable_generate;

export const keep: Keep<AsyncEnumerableLike>["keep"] = AsyncEnumerable_keep;

export const map: Map<AsyncEnumerableLike>["map"] = AsyncEnumerable_map;

export const scan: Scan<AsyncEnumerableLike>["scan"] = AsyncEnumerable_scan;

export const scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = AsyncEnumerable_scanAsync;

export const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerable_takeWhile;

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  AsyncEnumerable_toObservable;

export const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =
  AsyncEnumerable_toReadonlyArray;

const AsyncEnumerable: FromArray<AsyncEnumerableLike> &
  Generate<AsyncEnumerableLike> &
  Keep<AsyncEnumerableLike> &
  Map<AsyncEnumerableLike> &
  Scan<AsyncEnumerableLike> &
  ScanAsync<AsyncEnumerableLike, ObservableLike> &
  TakeWhile<AsyncEnumerableLike> &
  ToReadonlyArray<AsyncEnumerableLike> = {
  fromArray,
  generate,
  keep,
  map,
  scan,
  scanAsync,
  takeWhile,
  toReadonlyArray,
};

export default AsyncEnumerable;
