import {
  Buffer,
  CatchError,
  Compute,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ConcatYieldMap,
  Contains,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EncodeUtf8,
  EndWith,
  EverySatisfy,
  ForEach,
  FromIterable,
  FromReadonlyArray,
  Generate,
  IgnoreElements,
  Keep,
  KeepType,
  Map,
  MapTo,
  Never,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  SomeSatisfy,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  Throws,
  ToReadonlyArray,
} from "../containers.js";
import Iterable_toRunnable from "../containers/Iterable/__internal__/Iterable.toRunnable.js";
import ReadonlyArray_toRunnable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { identity, returns } from "../functions.js";
import { FromEnumerable } from "../ix.js";
import Enumerable_toRunnable from "../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import {
  FromEnumerableObservable,
  FromRunnableObservable,
  RunnableLike,
  ToRunnable,
} from "../rx.js";
import Runnable_buffer from "./Runnable/__internal__/Runnable.buffer.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_compute from "./Runnable/__internal__/Runnable.compute.js";
import Runnable_concat from "./Runnable/__internal__/Runnable.concat.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_concatWith from "./Runnable/__internal__/Runnable.concatWith.js";
import Runnable_concatYieldMap from "./Runnable/__internal__/Runnable.concatYieldMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_create from "./Runnable/__internal__/Runnable.create.js";
import Runnable_decodeWithCharset from "./Runnable/__internal__/Runnable.decodeWithCharset.js";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer.js";
import Runnable_distinctUntilChanged from "./Runnable/__internal__/Runnable.distinctUntilChanged.js";
import Runnable_empty from "./Runnable/__internal__/Runnable.empty.js";
import Runnable_encodeUtf8 from "./Runnable/__internal__/Runnable.encodeUtf8.js";
import Runnable_endWith from "./Runnable/__internal__/Runnable.endWith.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_forEach from "./Runnable/__internal__/Runnable.forEach.js";
import Runnable_generate from "./Runnable/__internal__/Runnable.generate.js";
import Runnable_ignoreElements from "./Runnable/__internal__/Runnable.ignoreElements.js";
import Runnable_keep from "./Runnable/__internal__/Runnable.keep.js";
import Runnable_keepType from "./Runnable/__internal__/Runnable.keepType.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_map from "./Runnable/__internal__/Runnable.map.js";
import Runnable_mapTo from "./Runnable/__internal__/Runnable.mapTo.js";
import Runnable_never from "./Runnable/__internal__/Runnable.never.js";
import Runnable_onRun from "./Runnable/__internal__/Runnable.onRun.js";
import Runnable_pairwise from "./Runnable/__internal__/Runnable.pairwise.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_repeat from "./Runnable/__internal__/Runnable.repeat.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_scan from "./Runnable/__internal__/Runnable.scan.js";
import Runnable_skipFirst from "./Runnable/__internal__/Runnable.skipFirst.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_startWith from "./Runnable/__internal__/Runnable.startWith.js";
import Runnable_takeFirst from "./Runnable/__internal__/Runnable.takeFirst.js";
import Runnable_takeLast from "./Runnable/__internal__/Runnable.takeLast.js";
import Runnable_takeWhile from "./Runnable/__internal__/Runnable.takeWhile.js";
import Runnable_throwIfEmpty from "./Runnable/__internal__/Runnable.throwIfEmpty.js";
import Runnable_throws from "./Runnable/__internal__/Runnable.throws.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";

export const buffer: Buffer<RunnableLike>["buffer"] = Runnable_buffer;

export const catchError: CatchError<RunnableLike>["catchError"] =
  Runnable_catchError;

export const compute: Compute<RunnableLike>["compute"] = Runnable_compute;

export const concat: Concat<RunnableLike>["concat"] = Runnable_concat;

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  Runnable_concatAll;

export const concatMap: ConcatMap<RunnableLike>["concatMap"] =
  Runnable_concatMap;

export const concatWith: ConcatWith<RunnableLike>["concatWith"] =
  Runnable_concatWith;

export const concatYieldMap: ConcatYieldMap<RunnableLike>["concatYieldMap"] =
  Runnable_concatYieldMap;

export const contains: Contains<RunnableLike>["contains"] = Runnable_contains;

export const create = Runnable_create;

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  Runnable_decodeWithCharset;

export const defer: Defer<RunnableLike>["defer"] = Runnable_defer;

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  Runnable_distinctUntilChanged;

export const empty: Empty<RunnableLike>["empty"] = Runnable_empty;

export const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"] =
  Runnable_encodeUtf8;

export const endWith: EndWith<RunnableLike>["endWith"] = Runnable_endWith;

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  Runnable_everySatisfy;

export const first = Runnable_first;

export const forEach: ForEach<RunnableLike>["forEach"] = Runnable_forEach;

export const fromEnumerable: FromEnumerable<RunnableLike>["fromEnumerable"] =
  Enumerable_toRunnable;

export const fromEnumerableObservable: FromEnumerableObservable<RunnableLike>["fromEnumerableObservable"] =
  RunnableObservable_toRunnable;

export const fromIterable: FromIterable<RunnableLike>["fromIterable"] =
  Iterable_toRunnable;

export const fromReadonlyArray: FromReadonlyArray<RunnableLike>["fromReadonlyArray"] =
  ReadonlyArray_toRunnable;

export const fromRunnableObservable: FromRunnableObservable<RunnableLike>["fromRunnableObservable"] =
  RunnableObservable_toRunnable;

export const generate: Generate<RunnableLike>["generate"] = Runnable_generate;

export const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"] =
  Runnable_ignoreElements;

export const keep: Keep<RunnableLike>["keep"] = Runnable_keep;

export const keepType: KeepType<RunnableLike>["keepType"] = Runnable_keepType;

export const last = Runnable_last;

export const map: Map<RunnableLike>["map"] = Runnable_map;

export const mapTo: MapTo<RunnableLike>["mapTo"] = Runnable_mapTo;

export const never: Never<RunnableLike>["never"] = Runnable_never;

export const onRun = Runnable_onRun;

export const pairwise: Pairwise<RunnableLike>["pairwise"] = Runnable_pairwise;

export const reduce: Reduce<RunnableLike>["reduce"] = Runnable_reduce;

export const repeat = Runnable_repeat;

export const run = Runnable_run;

export const scan: Scan<RunnableLike>["scan"] = Runnable_scan;

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  Runnable_skipFirst;

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: StartWith<RunnableLike>["startWith"] =
  Runnable_startWith;

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  Runnable_takeFirst;

export const takeLast: TakeLast<RunnableLike>["takeLast"] = Runnable_takeLast;

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  Runnable_takeWhile;

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  Runnable_throwIfEmpty;

export const throws: Throws<
  RunnableLike,
  { delay?: number; delayStart?: boolean }
>["throws"] = Runnable_throws;

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  /*@__PURE__*/ returns(identity);
