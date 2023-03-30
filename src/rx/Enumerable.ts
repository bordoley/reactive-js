import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ContainerLike_T,
  ContainerLike_type,
  Contains,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EncodeUtf8,
  EndWith,
  Enumerate,
  EnumeratorLike,
  EverySatisfy,
  First,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
  FromFactory,
  FromIterable,
  FromOptional,
  FromReadonlyArray,
  Generate,
  Identity,
  IgnoreElements,
  Keep,
  KeepType,
  Last,
  Map,
  MapTo,
  Pairwise,
  Pick,
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
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  BackpressureStrategy,
  EnumerableLike,
  Retry,
  ScanLast,
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
import Enumerable_scanLast from "../rx/Enumerable/__internal__/Enumerable.scanLast.js";
import Observable_buffer from "../rx/Observable/__internal__/Observable.buffer.js";
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
import Observable_fromFactory from "../rx/Observable/__internal__/Observable.fromFactory.js";
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
import { DisposableLike } from "../util.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";

export const backpressureStrategy: BackpressureStrategy<EnumerableLike>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Buffer<EnumerableLike>["buffer"] = Observable_buffer;

export const catchError: CatchError<EnumerableLike>["catchError"] =
  Enumerable_catchError;

export const concat: Concat<EnumerableLike>["concat"] = Observable_concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: ConcatMap<EnumerableLike>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: ConcatWith<EnumerableLike>["concatWith"] =
  Observable_concatWith as ConcatWith<EnumerableLike>["concatWith"];

export const contains: Contains<EnumerableLike>["contains"] =
  Observable_contains;

export const decodeWithCharset: DecodeWithCharset<EnumerableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<EnumerableLike>["defer"] = Enumerable_defer;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = Observable_empty;

export const encodeUtf8: EncodeUtf8<EnumerableLike>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const endWith: EndWith<EnumerableLike>["endWith"] = Observable_endWith;

interface EnumerableEnumerator<T = unknown> extends EnumeratorLike<T> {
  readonly [ContainerLike_type]?: EnumeratorLike<this[typeof ContainerLike_T]> &
    DisposableLike;
}
export const enumerate: Enumerate<
  EnumerableLike,
  EnumerableEnumerator
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

export const fromFactory: FromFactory<EnumerableLike>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: FromOptional<EnumerableLike>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: Generate<EnumerableLike>["generate"] =
  Observable_generate;

export const identity: Identity<EnumerableLike>["identity"] =
  Container_identity;

export const ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<EnumerableLike>["keep"] = Observable_keep;

export const keepType: KeepType<EnumerableLike>["keepType"] =
  Observable_keepType as KeepType<EnumerableLike>["keepType"];

export const last: Last<EnumerableLike>["last"] = Runnable_last;

export const map: Map<EnumerableLike>["map"] = Observable_map;

export const mapTo: MapTo<EnumerableLike>["mapTo"] = Observable_mapTo;

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  Observable_pairwise;

export const pick: Pick<EnumerableLike>["pick"] = Observable_pick;

export const reduce: Reduce<EnumerableLike>["reduce"] = Observable_reduce;

export const retry: Retry<EnumerableLike>["retry"] = Observable_retry;

export const scan: Scan<EnumerableLike>["scan"] = Observable_scan;

export const scanLast: ScanLast<EnumerableLike, EnumerableLike>["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<EnumerableLike>["someSatisfy"] =
  Observable_someSatisfy;

export const startWith: StartWith<EnumerableLike>["startWith"] =
  Observable_startWith;

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  Observable_takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  Observable_takeWhile;

export const throws: Throws<EnumerableLike>["throws"] = Observable_throws;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toAsyncEnumerable: ToAsyncEnumerable<
  EnumerableLike,
  { delay?: number }
>["toAsyncEnumerable"] = Enumerable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] =
  identity;

export const toFlowable: ToFlowable<EnumerableLike>["toFlowable"] =
  Runnable_toFlowable;

export const toObservable: ToObservable<EnumerableLike>["toObservable"] =
  identity;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] = identity;

export const zip: Zip<EnumerableLike>["zip"] =
  Observable_zip as Zip<EnumerableLike>["zip"];

export const zipWith: ZipWith<EnumerableLike>["zipWith"] =
  Observable_zipWith as ZipWith<EnumerableLike>["zipWith"];
