import {
  FromAsyncIterable,
  Keep,
  Map,
  Scan,
  TakeWhile,
} from "../containers.js";
import AsyncIterable_toAsyncEnumerable from "../containers/AsyncIterable/__internal__/AsyncIterable.toAsyncEnumerable.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toAsyncEnumerable from "../containers/Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import Optional_toAsyncEnumerable from "../containers/Optional/__internal__/Optional.toAsyncEnumerable.js";
import ReadonlyArray_toAsyncEnumerable from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import {
  FromEnumerable,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  Generate,
  GenerateLast,
  ObservableLike,
  ScanLast,
  ToEnumerable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import Enumerable_toAsyncEnumerable from "../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import { AsyncEnumerableLike } from "../streaming.js";
import AsyncEnumerable_generate from "./AsyncEnumerable/__internal__/AsyncEnumerable.generate.js";
import AsyncEnumerable_generateLast from "./AsyncEnumerable/__internal__/AsyncEnumerable.generateLast.js";
import AsyncEnumerable_keep from "./AsyncEnumerable/__internal__/AsyncEnumerable.keep.js";
import AsyncEnumerable_map from "./AsyncEnumerable/__internal__/AsyncEnumerable.map.js";
import AsyncEnumerable_scan from "./AsyncEnumerable/__internal__/AsyncEnumerable.scan.js";
import AsyncEnumerable_scanLast from "./AsyncEnumerable/__internal__/AsyncEnumerable.scanLast.js";
import AsyncEnumerable_takeWhile from "./AsyncEnumerable/__internal__/AsyncEnumerable.takeWhile.js";
import AsyncEnumerable_toEnumerable from "./AsyncEnumerable/__internal__/AsyncEnumerable.toEnumerable.js";
import AsyncEnumerable_toRunnable from "./AsyncEnumerable/__internal__/AsyncEnumerable.toRunnable.js";

export const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"] =
  Iterable_toAsyncEnumerable;

export const fromAsyncIterable: FromAsyncIterable<AsyncEnumerableLike>["fromAsyncIterable"] =
  AsyncIterable_toAsyncEnumerable;

export const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"] =
  Enumerable_toAsyncEnumerable;

export const fromOptional: FromOptional<AsyncEnumerableLike>["fromOptional"] =
  Optional_toAsyncEnumerable;

export const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike>["fromReadonlyArray"] =
  ReadonlyArray_toAsyncEnumerable;

export const generate: Generate<AsyncEnumerableLike>["generate"] =
  AsyncEnumerable_generate;

export const generateLast: GenerateLast<
  AsyncEnumerableLike,
  ObservableLike
>["generateLast"] = AsyncEnumerable_generateLast;

export const keep: Keep<AsyncEnumerableLike>["keep"] = AsyncEnumerable_keep;

export const map: Map<AsyncEnumerableLike>["map"] = AsyncEnumerable_map;

export const scan: Scan<AsyncEnumerableLike>["scan"] = AsyncEnumerable_scan;

export const scanLast: ScanLast<
  AsyncEnumerableLike,
  ObservableLike
>["scanLast"] = AsyncEnumerable_scanLast;

export const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  AsyncEnumerable_takeWhile;

export const toEnumerable: ToEnumerable<AsyncEnumerableLike>["toEnumerable"] =
  AsyncEnumerable_toEnumerable;

export const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"] =
  Container_identity as ToObservable<AsyncEnumerableLike>["toObservable"];

export const toRunnable: ToRunnable<AsyncEnumerableLike>["toRunnable"] =
  AsyncEnumerable_toRunnable;
