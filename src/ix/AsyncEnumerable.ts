import {
  FromAsyncIterable,
  FromIterable,
  FromReadonlyArray,
  FromSequence,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
} from "../containers.js";
import AsyncIterable_toAsyncEnumerable from "../containers/AsyncIterable/__internal__/AsyncIterable.toAsyncEnumerable.js";
import Iterable_toAsyncEnumerable from "../containers/Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import ReadonlyArray_toAsyncEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import Sequence_toAsyncEnumerable from "../containers/Sequence/__internal__/Sequence.toAsyncEnumerable.js";
import { AsyncEnumerableLike, FromEnumerable } from "../ix.js";
import {
  FromEnumerableObservable,
  ObservableLike,
  ScanAsync,
  ToObservable,
} from "../rx.js";
import EnumerableObservable_toAsyncEnumerable from "../rx/EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate.js";
import AsyncEnumerable_isEnumerable from "./AsyncEnumerable/__internal__/AsyncEnumerable.isEnumerable.js";
import AsyncEnumerable_isRunnable from "./AsyncEnumerable/__internal__/AsyncEnumerable.isRunnable.js";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep.js";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map.js";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan.js";
import AsyncEnumerable_scanAsync from "./AsyncEnumerable/__internal__/AsyncEnumerable.scanAsync.js";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.js";
import AsyncEnumerable_toObservable from "./AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";

export const fromAsyncIterable: FromAsyncIterable<AsyncEnumerableLike>["fromAsyncIterable"] =
  AsyncIterable_toAsyncEnumerable;

export const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"] =
  Enumerable_toAsyncEnumerable;

export const fromEnumerableObservable: FromEnumerableObservable<AsyncEnumerableLike>["fromEnumerableObservable"] =
  EnumerableObservable_toAsyncEnumerable;

export const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"] =
  Iterable_toAsyncEnumerable;

export const fromReadonlyArray: FromReadonlyArray<
  AsyncEnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["fromReadonlyArray"] = ReadonlyArray_toAsyncEnumerable;

export const fromSequence: FromSequence<AsyncEnumerableLike>["fromSequence"] =
  Sequence_toAsyncEnumerable;

export const generate: Generate<
  AsyncEnumerableLike,
  { delay: number }
>["generate"] = AsyncEnumerable_generate;

export const isEnumerable = AsyncEnumerable_isEnumerable;

export const isRunnable = AsyncEnumerable_isRunnable;

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
