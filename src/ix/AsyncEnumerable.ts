import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import ReadonlyArray$toAsyncEnumerable from "../containers/__internal__/ReadonlyArray/ReadonlyArray.toAsyncEnumerable";
import { AsyncEnumerableLike, EnumerableLike, ToAsyncEnumerable } from "../ix";
import { ObservableLike, ScanAsync, ToObservable } from "../rx";
import AsyncEnumerable$generate from "./__internal__/AsyncEnumerable/AsyncEnumerable.generate";
import AsyncEnumerable$keep from "./__internal__/AsyncEnumerable/AsyncEnumerable.keep";
import AsyncEnumerable$map from "./__internal__/AsyncEnumerable/AsyncEnumerable.map";
import AsyncEnumerable$scan from "./__internal__/AsyncEnumerable/AsyncEnumerable.scan";
import AsyncEnumerable$scanAsync from "./__internal__/AsyncEnumerable/AsyncEnumerable.scanAsync";
import AsyncEnumerable$takeWhile from "./__internal__/AsyncEnumerable/AsyncEnumerable.takeWhile";
import AsyncEnumerable$toObservable from "./__internal__/AsyncEnumerable/AsyncEnumerable.toObservable";
import AsyncEnumerable$toReadonlyArray from "./__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray";
import Enumerable$toAsyncEnumerable from "./__internal__/Enumerable/Enumerable.toAsyncEnumerable";

export const fromArray: FromArray<AsyncEnumerableLike>["fromArray"] =
  ReadonlyArray$toAsyncEnumerable;

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  Enumerable$toAsyncEnumerable;

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
>["generate"] = AsyncEnumerable$generate;

export const keep: Keep<AsyncEnumerableLike>["keep"] = AsyncEnumerable$keep;

export const map: Map<AsyncEnumerableLike>["map"] = AsyncEnumerable$map;

export const scan: Scan<AsyncEnumerableLike>["scan"] = AsyncEnumerable$scan;

export const scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = AsyncEnumerable$scanAsync;

export const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerable$takeWhile;

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  AsyncEnumerable$toObservable;

export const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =
  AsyncEnumerable$toReadonlyArray;
