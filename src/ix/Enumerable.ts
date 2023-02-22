import {
  Buffer,
  Compute,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ConcatYieldMap,
  DistinctUntilChanged,
  Empty,
  EndWith,
  ForEach,
  FromIterable,
  FromReadonlyArray,
  Generate,
  IgnoreElements,
  Keep,
  KeepType,
  Map,
  MapTo,
  Pairwise,
  Repeat,
  Scan,
  SkipFirst,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  Throws,
  ToIterable,
  ToReadonlyArray,
  Zip,
  ZipWith,
} from "../containers.js";
import Iterable_toEnumerable from "../containers/Iterable/__internal__/Iterable.toEnumerable.js";
import ReadonlyArray_toEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { identity, returns } from "../functions.js";
import { EnumerableLike, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx.js";
import { ToFlowable } from "../streaming.js";
import Enumerable_buffer from "./Enumerable/__internal__/Enumerable.buffer.js";
import Enumerable_compute from "./Enumerable/__internal__/Enumerable.compute.js";
import Enumerable_concat from "./Enumerable/__internal__/Enumerable.concat.js";
import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_concatWith from "./Enumerable/__internal__/Enumerable.concatWith.js";
import Enumerable_concatYieldMap from "./Enumerable/__internal__/Enumerable.concatYieldMap.js";
import Enumerable_distinctUntilChanged from "./Enumerable/__internal__/Enumerable.distinctUntilChanged.js";
import Enumerable_empty from "./Enumerable/__internal__/Enumerable.empty.js";
import Enumerable_endWith from "./Enumerable/__internal__/Enumerable.endWith.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_forEach from "./Enumerable/__internal__/Enumerable.forEach.js";
import Enumerable_generate from "./Enumerable/__internal__/Enumerable.generate.js";
import Enumerable_ignoreElements from "./Enumerable/__internal__/Enumerable.ignoreElements.js";
import Enumerable_keep from "./Enumerable/__internal__/Enumerable.keep.js";
import Enumerable_keepType from "./Enumerable/__internal__/Enumerable.keepType.js";
import Enumerable_map from "./Enumerable/__internal__/Enumerable.map.js";
import Enumerable_mapTo from "./Enumerable/__internal__/Enumerable.mapTo.js";
import Enumerable_pairwise from "./Enumerable/__internal__/Enumerable.pairwise.js";
import Enumerable_repeat from "./Enumerable/__internal__/Enumerable.repeat.js";
import Enumerable_scan from "./Enumerable/__internal__/Enumerable.scan.js";
import Enumerable_skipFirst from "./Enumerable/__internal__/Enumerable.skipFirst.js";
import Enumerable_startWith from "./Enumerable/__internal__/Enumerable.startWith.js";
import Enumerable_takeFirst from "./Enumerable/__internal__/Enumerable.takeFirst.js";
import Enumerable_takeLast from "./Enumerable/__internal__/Enumerable.takeLast.js";
import Enumerable_takeWhile from "./Enumerable/__internal__/Enumerable.takeWhile.js";
import Enumerable_throwIfEmpty from "./Enumerable/__internal__/Enumerable.throwIfEmpty.js";
import Enumerable_throws from "./Enumerable/__internal__/Enumerable.throws.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Enumerable_toEnumerableObservable from "./Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import Enumerable_toFlowable from "./Enumerable/__internal__/Enumerable.toFlowable.js";
import Enumerable_toIterable from "./Enumerable/__internal__/Enumerable.toIterable.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Enumerable_toRunnable from "./Enumerable/__internal__/Enumerable.toRunnable.js";
import Enumerable_toRunnableObservable from "./Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Enumerable_zip from "./Enumerable/__internal__/Enumerable.zip.js";
import Enumerable_zipWith from "./Enumerable/__internal__/Enumerable.zipWith.js";

export const enumerate = Enumerable_enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = Enumerable_buffer;

export const compute: Compute<EnumerableLike>["compute"] = Enumerable_compute;

export const concat: Concat<EnumerableLike>["concat"] = Enumerable_concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: ConcatMap<EnumerableLike>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: ConcatWith<EnumerableLike>["concatWith"] =
  Enumerable_concatWith;

export const concatYieldMap: ConcatYieldMap<EnumerableLike>["concatYieldMap"] =
  Enumerable_concatYieldMap;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Enumerable_distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = Enumerable_empty;

export const endWith: EndWith<EnumerableLike>["endWith"] = Enumerable_endWith;

export const forEach: ForEach<EnumerableLike>["forEach"] = Enumerable_forEach;

export const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"] =
  ReadonlyArray_toEnumerable;

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  Iterable_toEnumerable;

export const generate: Generate<EnumerableLike>["generate"] =
  Enumerable_generate;

export const ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"] =
  Enumerable_ignoreElements;

export const keep: Keep<EnumerableLike>["keep"] = Enumerable_keep;

export const keepType: KeepType<EnumerableLike>["keepType"] =
  Enumerable_keepType;

export const map: Map<EnumerableLike>["map"] = Enumerable_map;

export const mapTo: MapTo<EnumerableLike>["mapTo"] = Enumerable_mapTo;

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  Enumerable_pairwise;

export const repeat: Repeat<EnumerableLike>["repeat"] = Enumerable_repeat;

export const scan: Scan<EnumerableLike>["scan"] = Enumerable_scan;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  Enumerable_skipFirst;

export const startWith: StartWith<EnumerableLike>["startWith"] =
  Enumerable_startWith;

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  Enumerable_takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  Enumerable_takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  Enumerable_takeWhile;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  Enumerable_throwIfEmpty;

export const throws: Throws<EnumerableLike>["throws"] = Enumerable_throws;

export const toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"] =
  Enumerable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] =
  /*@__PURE__*/ returns(
    identity,
  ) as ToEnumerable<EnumerableLike>["toEnumerable"];

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable_toEnumerableObservable;

export const toFlowable: ToFlowable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Enumerable_toFlowable;

export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  Enumerable_toIterable;

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = Enumerable_toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  Enumerable_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = Enumerable_toRunnableObservable;

export const zip: Zip<EnumerableLike>["zip"] = Enumerable_zip;

export const zipWith: ZipWith<EnumerableLike>["zipWith"] = Enumerable_zipWith;
