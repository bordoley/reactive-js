/// <reference types="./RunnableAsyncEnumerable.d.ts" />

import Iterable_toAsyncEnumerable from "../containers/Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import ReadonlyArray_toAsyncEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import Sequence_toAsyncEnumerable from "../containers/Sequence/__internal__/Sequence.toAsyncEnumerable.js";
import EnumerableObservable_toAsyncEnumerable from "../rx/EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate.js";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep.js";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map.js";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan.js";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import RunnableAsyncEnumerable_toReadonlyArray from "./RunnableAsyncEnumerable/__internal__/RunnableAsyncEnumerable.toReadonlyArray.js";
export const fromEnumerable = Enumerable_toAsyncEnumerable;
export const fromEnumerableObservable = EnumerableObservable_toAsyncEnumerable;
export const fromIterable = Iterable_toAsyncEnumerable;
export const fromReadonlyArray = ReadonlyArray_toAsyncEnumerable;
export const fromSequence = Sequence_toAsyncEnumerable;
export const generate = AsyncEnumerable_generate;
export const keep = AsyncEnumerable_keep;
export const map = AsyncEnumerable_map;
export const scan = AsyncEnumerable_scan;
/*
export const scanAsync: ScanAsync<
  EnumerableAsyncEnumerableLike,
  EnumerableObservableLike
>["scanAsync"] = AsyncEnumerable_scanAsync;*/
export const takeWhile = AsyncEnumerable_takeWhile;
/*
export const toObservable: ToObservable<RunnableAsyncEnumerableLike>["toObservable"] =
  AsyncEnumerable_toObservable;
  */
export const toReadonlyArray = RunnableAsyncEnumerable_toReadonlyArray;
