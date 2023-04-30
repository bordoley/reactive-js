import {
  Buffer,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  Contains,
  DistinctUntilChanged,
  Empty,
  EndWith,
  Enumerate,
  EnumeratorLike,
  EverySatisfy,
  First,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
  FromEnumeratorFactory,
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
  NoneSatisfy,
  Pairwise,
  Pick,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToReadonlyArray,
  Zip,
  ZipWith,
} from "../containers.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  BackpressureStrategy,
  CatchError,
  DecodeWithCharset,
  Defer,
  DispatchTo,
  EncodeUtf8,
  Enqueue,
  EnumerableContainerLike,
  FirstAsync,
  Flow,
  LastAsync,
  Retry,
  ScanLast,
  ThrowIfEmpty,
  Throws,
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
import Observable_decodeWithCharset from "../rx/Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "../rx/Observable/__internal__/Observable.empty.js";
import Observable_endWith from "../rx/Observable/__internal__/Observable.endWith.js";
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
import Observable_retry from "../rx/Observable/__internal__/Observable.retry.js";
import Observable_scan from "../rx/Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "../rx/Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "../rx/Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "../rx/Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "../rx/Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "../rx/Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "../rx/Observable/__internal__/Observable.throws.js";
import Observable_zip from "../rx/Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "../rx/Observable/__internal__/Observable.zipWith.js";
import Runnable_flow from "../rx/Runnable/__internal__/Runnable.flow.js";
import { DisposableLike } from "../util.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import { Enumerable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";

export const backpressureStrategy: BackpressureStrategy<EnumerableContainerLike>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Buffer<EnumerableContainerLike>["buffer"] =
  Observable_buffer;

export const catchError: CatchError<EnumerableContainerLike>["catchError"] =
  Enumerable_catchError;

/**
 * @category Constructor
 */
export const compute = Enumerable_compute;

export const concat: Concat<EnumerableContainerLike>["concat"] =
  Observable_concat;

export const concatAll: ConcatAll<EnumerableContainerLike>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: ConcatMap<EnumerableContainerLike>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: ConcatWith<EnumerableContainerLike>["concatWith"] =
  Observable_concatWith as ConcatWith<EnumerableContainerLike>["concatWith"];

export const contains: Contains<EnumerableContainerLike>["contains"] =
  Runnable_contains;

export const decodeWithCharset: DecodeWithCharset<EnumerableContainerLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<EnumerableContainerLike>["defer"] = Enumerable_defer;

export const dispatchTo: DispatchTo<EnumerableContainerLike>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableContainerLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Empty<EnumerableContainerLike>["empty"] = Observable_empty;

export const encodeUtf8: EncodeUtf8<EnumerableContainerLike>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const enqueue: Enqueue<EnumerableContainerLike>["enqueue"] =
  Observable_enqueue;

export const endWith: EndWith<EnumerableContainerLike>["endWith"] =
  Observable_endWith;

interface EnumerableEnumeratorContainerLike<T = unknown>
  extends EnumeratorLike<T>,
    DisposableLike,
    ContainerLike {
  readonly [ContainerLike_type]?: EnumeratorLike<this[typeof ContainerLike_T]> &
    DisposableLike;
}
export const enumerate: Enumerate<
  EnumerableContainerLike,
  EnumerableEnumeratorContainerLike
>["enumerate"] = Enumerable_enumerate;

export const everySatisfy: EverySatisfy<EnumerableContainerLike>["everySatisfy"] =
  Runnable_everySatisfy;

export const first: First<EnumerableContainerLike>["first"] = Runnable_first;

export const firstAsync: FirstAsync<EnumerableContainerLike>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: FlatMapIterable<EnumerableContainerLike>["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const flow: Flow<EnumerableContainerLike>["flow"] = Runnable_flow;

export const forEach: ForEach<EnumerableContainerLike>["forEach"] =
  Observable_forEach;

export const forkConcat: ForkConcat<EnumerableContainerLike>["forkConcat"] =
  Observable_forkConcat as ForkConcat<EnumerableContainerLike>["forkConcat"];

export const forkZip: ForkZip<EnumerableContainerLike>["forkZip"] =
  Observable_forkZip as ForkZip<EnumerableContainerLike>["forkZip"];

export const fromEnumeratorFactory: FromEnumeratorFactory<EnumerableContainerLike>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: FromFactory<EnumerableContainerLike>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: FromIterable<EnumerableContainerLike>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: FromOptional<EnumerableContainerLike>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: FromReadonlyArray<EnumerableContainerLike>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: Generate<EnumerableContainerLike>["generate"] =
  Observable_generate;

export const identity: Identity<EnumerableContainerLike>["identity"] =
  Container_identity;

export const ignoreElements: IgnoreElements<EnumerableContainerLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<EnumerableContainerLike>["keep"] = Observable_keep;

export const keepType: KeepType<EnumerableContainerLike>["keepType"] =
  Observable_keepType as KeepType<EnumerableContainerLike>["keepType"];

export const last: Last<EnumerableContainerLike>["last"] = Runnable_last;

export const lastAsync: LastAsync<EnumerableContainerLike>["lastAsync"] =
  Observable_lastAsync;

export const map: Map<EnumerableContainerLike>["map"] = Observable_map;

export const mapTo: MapTo<EnumerableContainerLike>["mapTo"] = Observable_mapTo;

export const noneSatisfy: NoneSatisfy<EnumerableContainerLike>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const pairwise: Pairwise<EnumerableContainerLike>["pairwise"] =
  Observable_pairwise;

export const pick: Pick<EnumerableContainerLike>["pick"] = Observable_pick;

export const reduce: Reduce<EnumerableContainerLike>["reduce"] =
  Runnable_reduce;

export const repeat: Repeat<EnumerableContainerLike>["repeat"] =
  Observable_repeat;

export const retry: Retry<EnumerableContainerLike>["retry"] = Observable_retry;

export const scan: Scan<EnumerableContainerLike>["scan"] = Observable_scan;

export const scanLast: ScanLast<EnumerableContainerLike>["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: SkipFirst<EnumerableContainerLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<EnumerableContainerLike>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: StartWith<EnumerableContainerLike>["startWith"] =
  Observable_startWith;

export const takeFirst: TakeFirst<EnumerableContainerLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<EnumerableContainerLike>["takeLast"] =
  Observable_takeLast;

export const takeWhile: TakeWhile<EnumerableContainerLike>["takeWhile"] =
  Observable_takeWhile;

export const throws: Throws<EnumerableContainerLike>["throws"] =
  Observable_throws;

export const throwIfEmpty: ThrowIfEmpty<EnumerableContainerLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toReadonlyArray: ToReadonlyArray<EnumerableContainerLike>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const zip: Zip<EnumerableContainerLike>["zip"] =
  Observable_zip as Zip<EnumerableContainerLike>["zip"];

export const zipWith: ZipWith<EnumerableContainerLike>["zipWith"] =
  Observable_zipWith as ZipWith<EnumerableContainerLike>["zipWith"];
