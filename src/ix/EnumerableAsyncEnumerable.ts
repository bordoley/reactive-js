import {
  FromIterable,
  FromReadonlyArray,
  FromSequence,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  ToReadonlyArray,
} from "../containers.js";
import Iterable_toAsyncEnumerable from "../containers/Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import ReadonlyArray_toAsyncEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import Sequence_toAsyncEnumerable from "../containers/Sequence/__internal__/Sequence.toAsyncEnumerable.js";
import { EnumerableAsyncEnumerableLike, FromEnumerable } from "../ix.js";
import { FromEnumerableObservable } from "../rx.js";
import EnumerableObservable_toAsyncEnumerable from "../rx/EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate.js";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep.js";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map.js";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan.js";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import RunnableAsyncEnumerable_toReadonlyArray from "./RunnableAsyncEnumerable/__internal__/RunnableAsyncEnumerable.toReadonlyArray.js";

export const fromEnumerable: FromEnumerable<EnumerableAsyncEnumerableLike>["fromEnumerable"] =
  Enumerable_toAsyncEnumerable as FromEnumerable<EnumerableAsyncEnumerableLike>["fromEnumerable"];

export const fromEnumerableObservable: FromEnumerableObservable<EnumerableAsyncEnumerableLike>["fromEnumerableObservable"] =
  EnumerableObservable_toAsyncEnumerable as FromEnumerableObservable<EnumerableAsyncEnumerableLike>["fromEnumerableObservable"];

export const fromIterable: FromIterable<EnumerableAsyncEnumerableLike>["fromIterable"] =
  Iterable_toAsyncEnumerable as FromIterable<EnumerableAsyncEnumerableLike>["fromIterable"];

export const fromReadonlyArray: FromReadonlyArray<
  EnumerableAsyncEnumerableLike,
  {
    readonly start?: number;
    readonly count?: number;
  }
>["fromReadonlyArray"] =
  ReadonlyArray_toAsyncEnumerable as FromReadonlyArray<EnumerableAsyncEnumerableLike>["fromReadonlyArray"];

export const fromSequence: FromSequence<EnumerableAsyncEnumerableLike>["fromSequence"] =
  Sequence_toAsyncEnumerable as FromSequence<EnumerableAsyncEnumerableLike>["fromSequence"];

export const generate: Generate<EnumerableAsyncEnumerableLike>["generate"] =
  AsyncEnumerable_generate as Generate<EnumerableAsyncEnumerableLike>["generate"];

export const keep: Keep<EnumerableAsyncEnumerableLike>["keep"] =
  AsyncEnumerable_keep as Keep<EnumerableAsyncEnumerableLike>["keep"];

export const map: Map<EnumerableAsyncEnumerableLike>["map"] =
  AsyncEnumerable_map as Map<EnumerableAsyncEnumerableLike>["map"];

export const scan: Scan<EnumerableAsyncEnumerableLike>["scan"] =
  AsyncEnumerable_scan as Scan<EnumerableAsyncEnumerableLike>["scan"];

/*
export const scanAsync: ScanAsync<
  EnumerableAsyncEnumerableLike,
  EnumerableObservableLike
>["scanAsync"] = AsyncEnumerable_scanAsync;*/

export const takeWhile: TakeWhile<EnumerableAsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerable_takeWhile as TakeWhile<EnumerableAsyncEnumerableLike>["takeWhile"];

/*
export const toObservable: ToObservable<EnumerableAsyncEnumerableLike>["toObservable"] =
  AsyncEnumerable_toObservable;
  */

export const toReadonlyArray: ToReadonlyArray<EnumerableAsyncEnumerableLike>["toReadonlyArray"] =
  RunnableAsyncEnumerable_toReadonlyArray;
