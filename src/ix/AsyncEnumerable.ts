import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import ReadonlyArray_toAsyncEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable";
import { AsyncEnumerableLike, EnumerableLike, ToAsyncEnumerable } from "../ix";
import { ObservableLike, ScanAsync, ToObservable } from "../rx";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan";
import AsyncEnumerable_scanAsync from "./AsyncEnumerable/__internal__/AsyncEnumerable.scanAsync";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile";
import AsyncEnumerable_toObservable from "./AsyncEnumerable/__internal__/AsyncEnumerable.toObservable";
import AsyncEnumerable_toReadonlyArray from "./AsyncEnumerable/__internal__/AsyncEnumerable.toReadonlyArray";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable";

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

/** @ignore */
const AsyncEnumerable = {
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
