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
import { FromEnumerable, RunnableAsyncEnumerableLike } from "../ix.js";
import { FromEnumerableObservable } from "../rx.js";
import EnumerableObservable_toAsyncEnumerable from "../rx/EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate.js";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep.js";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map.js";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan.js";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import RunnableAsyncEnumerable_toReadonlyArray from "./RunnableAsyncEnumerable/__internal__/RunnableAsyncEnumerable.toReadonlyArray.js";

export const fromEnumerable: FromEnumerable<RunnableAsyncEnumerableLike>["fromEnumerable"] =
  Enumerable_toAsyncEnumerable as FromEnumerable<RunnableAsyncEnumerableLike>["fromEnumerable"];

export const fromEnumerableObservable: FromEnumerableObservable<RunnableAsyncEnumerableLike>["fromEnumerableObservable"] =
  EnumerableObservable_toAsyncEnumerable as FromEnumerableObservable<RunnableAsyncEnumerableLike>["fromEnumerableObservable"];

export const fromIterable: FromIterable<RunnableAsyncEnumerableLike>["fromIterable"] =
  Iterable_toAsyncEnumerable as FromIterable<RunnableAsyncEnumerableLike>["fromIterable"];

export const fromReadonlyArray: FromReadonlyArray<
  RunnableAsyncEnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
  }
>["fromReadonlyArray"] =
  ReadonlyArray_toAsyncEnumerable as FromReadonlyArray<RunnableAsyncEnumerableLike>["fromReadonlyArray"];

export const fromSequence: FromSequence<RunnableAsyncEnumerableLike>["fromSequence"] =
  Sequence_toAsyncEnumerable as FromSequence<RunnableAsyncEnumerableLike>["fromSequence"];

export const generate: Generate<RunnableAsyncEnumerableLike>["generate"] =
  AsyncEnumerable_generate as Generate<RunnableAsyncEnumerableLike>["generate"];

export const keep: Keep<RunnableAsyncEnumerableLike>["keep"] =
  AsyncEnumerable_keep as Keep<RunnableAsyncEnumerableLike>["keep"];

export const map: Map<RunnableAsyncEnumerableLike>["map"] =
  AsyncEnumerable_map as Map<RunnableAsyncEnumerableLike>["map"];

export const scan: Scan<RunnableAsyncEnumerableLike>["scan"] =
  AsyncEnumerable_scan as Scan<RunnableAsyncEnumerableLike>["scan"];

/*
export const scanAsync: ScanAsync<
  EnumerableAsyncEnumerableLike,
  EnumerableObservableLike
>["scanAsync"] = AsyncEnumerable_scanAsync;*/

export const takeWhile: TakeWhile<RunnableAsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerable_takeWhile as TakeWhile<RunnableAsyncEnumerableLike>["takeWhile"];

/*
export const toObservable: ToObservable<RunnableAsyncEnumerableLike>["toObservable"] =
  AsyncEnumerable_toObservable;
  */

export const toReadonlyArray: ToReadonlyArray<RunnableAsyncEnumerableLike>["toReadonlyArray"] =
  RunnableAsyncEnumerable_toReadonlyArray;
