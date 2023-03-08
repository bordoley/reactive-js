import {
  Buffer,
  CatchError,
  Compute,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  Contains,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EncodeUtf8,
  EndWith,
  Enumerate,
  EverySatisfy,
  First,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  FromSequence,
  Generate,
  IgnoreElements,
  Keep,
  KeepType,
  Last,
  Map,
  MapTo,
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
  Zip,
  ZipWith,
} from "../containers.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Sequence_toObservable from "../containers/Sequence/__internal__/Sequence.toObservable.js";
import { identity, returns } from "../functions.js";
import {
  EnumerableEnumeratorLike,
  EnumerableLike,
  Retry,
  ScanAsync,
  ToEnumerable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import Enumerable_catchError from "../rx/Enumerable/__internal__/Enumerable.catchError.js";
import Enumerable_concatAll from "../rx/Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "../rx/Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_defer from "../rx/Enumerable/__internal__/Enumerable.defer.js";
import Enumerable_encodeUtf8 from "../rx/Enumerable/__internal__/Enumerable.encodeUtf8.js";
import Enumerable_flatMapIterable from "../rx/Enumerable/__internal__/Enumerable.flatMapIterable.js";
import Enumerable_scanAsync from "../rx/Enumerable/__internal__/Enumerable.scanAsync.js";
import Observable_buffer from "../rx/Observable/__internal__/Observable.buffer.js";
import Observable_compute from "../rx/Observable/__internal__/Observable.compute.js";
import Observable_concat from "../rx/Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "../rx/Observable/__internal__/Observable.concatWith.js";
import Observable_contains from "../rx/Observable/__internal__/Observable.contains.js";
import Observable_decodeWithCharset from "../rx/Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "../rx/Observable/__internal__/Observable.empty.js";
import Observable_endWith from "../rx/Observable/__internal__/Observable.endWith.js";
import Observable_everySatisfy from "../rx/Observable/__internal__/Observable.everySatisfy.js";
import Observable_forEach from "../rx/Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "../rx/Observable/__internal__/Observable.forkConcat.js";
import Observable_forkZip from "../rx/Observable/__internal__/Observable.forkZip.js";
import Observable_generate from "../rx/Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "../rx/Observable/__internal__/Observable.keep.js";
import Observable_keepType from "../rx/Observable/__internal__/Observable.keepType.js";
import Observable_map from "../rx/Observable/__internal__/Observable.map.js";
import Observable_mapTo from "../rx/Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "../rx/Observable/__internal__/Observable.reduce.js";
import Observable_retry from "../rx/Observable/__internal__/Observable.retry.js";
import Observable_scan from "../rx/Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "../rx/Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "../rx/Observable/__internal__/Observable.someSatisfy.js";
import Observable_startWith from "../rx/Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "../rx/Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "../rx/Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "../rx/Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "../rx/Observable/__internal__/Observable.throws.js";
import Observable_zip from "../rx/Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "../rx/Observable/__internal__/Observable.zipWith.js";
import Runnable_toFlowable from "../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";

export const buffer: Buffer<EnumerableLike>["buffer"] = Observable_buffer;

export const catchError: CatchError<EnumerableLike>["catchError"] =
  Enumerable_catchError;

export const compute: Compute<EnumerableLike>["compute"] =
  Observable_compute as Compute<EnumerableLike>["compute"];

export const concat: Concat<EnumerableLike>["concat"] =
  Observable_concat as Concat<EnumerableLike>["concat"];

export const concatAll: ConcatAll<
  EnumerableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = Enumerable_concatAll;

export const concatMap: ConcatMap<EnumerableLike>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: ConcatWith<EnumerableLike>["concatWith"] =
  Observable_concatWith as ConcatWith<EnumerableLike>["concatWith"];

export const contains: Contains<EnumerableLike>["contains"] =
  Observable_contains as Contains<EnumerableLike>["contains"];

export const decodeWithCharset: DecodeWithCharset<EnumerableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset as DecodeWithCharset<EnumerableLike>["decodeWithCharset"];

export const defer: Defer<EnumerableLike>["defer"] = Enumerable_defer;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged as DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];

export const empty: Empty<EnumerableLike>["empty"] =
  Observable_empty as Empty<EnumerableLike>["empty"];

export const encodeUtf8: EncodeUtf8<EnumerableLike>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const endWith: EndWith<EnumerableLike>["endWith"] =
  Observable_endWith as EndWith<EnumerableLike>["endWith"];

export const enumerate: Enumerate<
  EnumerableLike,
  EnumerableEnumeratorLike
>["enumerate"] = Enumerable_enumerate;

export const everySatisfy: EverySatisfy<EnumerableLike>["everySatisfy"] =
  Observable_everySatisfy;

export const first: First<EnumerableLike>["first"] = Runnable_first;

export const flatMapIterable: FlatMapIterable<EnumerableLike>["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const forEach: ForEach<EnumerableLike>["forEach"] = Observable_forEach;

export const forkConcat: ForkConcat<EnumerableLike>["forkConcat"] =
  Observable_forkConcat as ForkConcat<EnumerableLike>["forkConcat"];

export const forkZip: ForkZip<EnumerableLike>["forkZip"] =
  Observable_forkZip as ForkZip<EnumerableLike>["forkZip"];

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: FromOptional<EnumerableLike>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const fromSequence: FromSequence<EnumerableLike>["fromSequence"] =
  Sequence_toObservable;

export const generate: Generate<EnumerableLike>["generate"] =
  Observable_generate as Generate<EnumerableLike>["generate"];

export const ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"] =
  Observable_ignoreElements as IgnoreElements<EnumerableLike>["ignoreElements"];

export const keep: Keep<EnumerableLike>["keep"] =
  Observable_keep as Keep<EnumerableLike>["keep"];

export const keepType: KeepType<EnumerableLike>["keepType"] =
  Observable_keepType as KeepType<EnumerableLike>["keepType"];

export const last: Last<EnumerableLike>["last"] = Runnable_last;

export const map: Map<EnumerableLike>["map"] = Observable_map;

export const mapTo: MapTo<EnumerableLike>["mapTo"] =
  Observable_mapTo as MapTo<EnumerableLike>["mapTo"];

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  Observable_pairwise;

export const reduce: Reduce<EnumerableLike>["reduce"] = Observable_reduce;

export const retry: Retry<EnumerableLike>["retry"] =
  Observable_retry as Retry<EnumerableLike>["retry"];

export const scan: Scan<EnumerableLike>["scan"] = Observable_scan;

export const scanAsync: ScanAsync<EnumerableLike, EnumerableLike>["scanAsync"] =
  Enumerable_scanAsync;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<EnumerableLike>["someSatisfy"] =
  Observable_someSatisfy as SomeSatisfy<EnumerableLike>["someSatisfy"];

export const startWith: StartWith<EnumerableLike>["startWith"] =
  Observable_startWith as StartWith<EnumerableLike>["startWith"];

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  Observable_takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  Observable_takeWhile as TakeWhile<EnumerableLike>["takeWhile"];

export const throws: Throws<EnumerableLike>["throws"] = Observable_throws;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty as ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];

export const toAsyncEnumerable: ToAsyncEnumerable<
  EnumerableLike,
  { delay?: number }
>["toAsyncEnumerable"] = Enumerable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] =
  /*@__PURE__*/ returns(identity);

export const toFlowable: ToFlowable<EnumerableLike>["toFlowable"] =
  Runnable_toFlowable;

export const toObservable: ToObservable<EnumerableLike>["toObservable"] =
  /*@__PURE__*/ returns(identity);

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ returns(identity);

export const zip: Zip<EnumerableLike>["zip"] =
  Observable_zip as Zip<EnumerableLike>["zip"];

export const zipWith: ZipWith<EnumerableLike>["zipWith"] =
  Observable_zipWith as ZipWith<EnumerableLike>["zipWith"];
