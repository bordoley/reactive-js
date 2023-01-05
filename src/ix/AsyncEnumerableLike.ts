import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers";
import ReadonlyArrayLike__toAsyncEnumerable from "../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toAsyncEnumerable";
import { AsyncEnumerableLike, EnumerableLike, ToAsyncEnumerable } from "../ix";
import { ObservableLike, ScanAsync, ToObservable } from "../rx";
import AsyncEnumerableLike__generate from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.generate";
import AsyncEnumerableLike__keep from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.keep";
import AsyncEnumerableLike__map from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.map";
import AsyncEnumerableLike__scan from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.scan";
import AsyncEnumerableLike__scanAsync from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.scanAsync";
import AsyncEnumerableLike__takeWhile from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.takeWhile";
import AsyncEnumerableLike__toObservable from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toObservable";
import AsyncEnumerableLike__toReadonlyArray from "./__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray";
import EnumerableLike__toAsyncEnumerable from "./__internal__/EnumerableLike/EnumerableLike.toAsyncEnumerable";

export const fromArray: FromArray<AsyncEnumerableLike>["fromArray"] =
  ReadonlyArrayLike__toAsyncEnumerable;
export const fromArrayT: FromArray<AsyncEnumerableLike> = { fromArray };

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  EnumerableLike__toAsyncEnumerable;

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
>["generate"] = AsyncEnumerableLike__generate;
export const generateT: Generate<AsyncEnumerableLike, { delay: number }> = {
  generate,
};

export const keep: Keep<AsyncEnumerableLike>["keep"] =
  AsyncEnumerableLike__keep;
export const keepT: Keep<AsyncEnumerableLike> = {
  keep,
};

export const map: Map<AsyncEnumerableLike>["map"] = AsyncEnumerableLike__map;
export const mapT: Map<AsyncEnumerableLike> = {
  map,
};

export const scan: Scan<AsyncEnumerableLike>["scan"] =
  AsyncEnumerableLike__scan;
export const scanT: Scan<AsyncEnumerableLike> = {
  scan,
};

export const scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = AsyncEnumerableLike__scanAsync;
export const scanAsyncT: ScanAsync<AsyncEnumerableLike, ObservableLike> = {
  scanAsync,
};

export const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerableLike__takeWhile;

export const takeWhileT: TakeWhile<AsyncEnumerableLike> = {
  takeWhile,
};

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  AsyncEnumerableLike__toObservable;
export const toObservableT: ToObservable<AsyncEnumerableLike> = {
  toObservable,
};

export const toReadonlyArray: ToReadonlyArray<AsyncEnumerableLike>["toReadonlyArray"] =
  AsyncEnumerableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<AsyncEnumerableLike> = {
  toReadonlyArray,
};
