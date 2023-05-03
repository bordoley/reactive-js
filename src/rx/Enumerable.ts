import {
  Container,
  Container_T,
  Container_type,
  EnumeratorLike,
} from "../containers.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  BackpressureStrategy,
  CatchError,
  DecodeWithCharset,
  Defer,
  DispatchTo,
  EncodeUtf8,
  Enqueue,
  EnumerableContainer,
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

export const backpressureStrategy: BackpressureStrategy<EnumerableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Container.Buffer<EnumerableContainer>["buffer"] =
  Observable_buffer;

export const catchError: CatchError<EnumerableContainer>["catchError"] =
  Enumerable_catchError;

/**
 * @category Constructor
 */
export const compute = Enumerable_compute;

export const concat: Container.Concat<EnumerableContainer>["concat"] =
  Observable_concat;

export const concatAll: Container.ConcatAll<EnumerableContainer>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: Container.ConcatMap<EnumerableContainer>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: Container.ConcatWith<EnumerableContainer>["concatWith"] =
  Observable_concatWith as Container.ConcatWith<EnumerableContainer>["concatWith"];

export const contains: Container.Contains<EnumerableContainer>["contains"] =
  Runnable_contains;

export const decodeWithCharset: DecodeWithCharset<EnumerableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<EnumerableContainer>["defer"] = Enumerable_defer;

export const dispatchTo: DispatchTo<EnumerableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Container.DistinctUntilChanged<EnumerableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Container.Empty<EnumerableContainer>["empty"] =
  Observable_empty;

export const encodeUtf8: EncodeUtf8<EnumerableContainer>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const enqueue: Enqueue<EnumerableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: Container.EndWith<EnumerableContainer>["endWith"] =
  Observable_endWith;

interface EnumerableEnumeratorContainer extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
    DisposableLike;
}
export const enumerate: Container.Enumerate<
  EnumerableContainer,
  EnumerableEnumeratorContainer
>["enumerate"] = Enumerable_enumerate;

export const everySatisfy: Container.EverySatisfy<EnumerableContainer>["everySatisfy"] =
  Runnable_everySatisfy;

export const first: Container.First<EnumerableContainer>["first"] =
  Runnable_first;

export const firstAsync: FirstAsync<EnumerableContainer>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: Container.FlatMapIterable<EnumerableContainer>["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const flow: Flow<EnumerableContainer>["flow"] = Runnable_flow;

export const forEach: Container.ForEach<EnumerableContainer>["forEach"] =
  Observable_forEach;

export const forkConcat: Container.ForkConcat<EnumerableContainer>["forkConcat"] =
  Observable_forkConcat as Container.ForkConcat<EnumerableContainer>["forkConcat"];

export const forkZip: Container.ForkZip<EnumerableContainer>["forkZip"] =
  Observable_forkZip as Container.ForkZip<EnumerableContainer>["forkZip"];

export const fromEnumeratorFactory: Container.FromEnumeratorFactory<EnumerableContainer>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: Container.FromFactory<EnumerableContainer>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: Container.FromIterable<EnumerableContainer>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: Container.FromOptional<EnumerableContainer>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: Container.FromReadonlyArray<EnumerableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: Container.Generate<EnumerableContainer>["generate"] =
  Observable_generate;

export const identity: Container.Identity<EnumerableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Container.IgnoreElements<EnumerableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Container.Keep<EnumerableContainer>["keep"] =
  Observable_keep;

export const keepType: Container.KeepType<EnumerableContainer>["keepType"] =
  Observable_keepType as Container.KeepType<EnumerableContainer>["keepType"];

export const last: Container.Last<EnumerableContainer>["last"] = Runnable_last;

export const lastAsync: LastAsync<EnumerableContainer>["lastAsync"] =
  Observable_lastAsync;

export const map: Container.Map<EnumerableContainer>["map"] = Observable_map;

export const mapTo: Container.MapTo<EnumerableContainer>["mapTo"] =
  Observable_mapTo;

export const noneSatisfy: Container.NoneSatisfy<EnumerableContainer>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const pairwise: Container.Pairwise<EnumerableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Container.Pick<EnumerableContainer>["pick"] =
  Observable_pick;

export const reduce: Container.Reduce<EnumerableContainer>["reduce"] =
  Runnable_reduce;

export const repeat: Container.Repeat<EnumerableContainer>["repeat"] =
  Observable_repeat;

export const retry: Retry<EnumerableContainer>["retry"] = Observable_retry;

export const scan: Container.Scan<EnumerableContainer>["scan"] =
  Observable_scan;

export const scanLast: ScanLast<EnumerableContainer>["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: Container.SkipFirst<EnumerableContainer>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: Container.SomeSatisfy<EnumerableContainer>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: Container.StartWith<EnumerableContainer>["startWith"] =
  Observable_startWith;

export const takeFirst: Container.TakeFirst<EnumerableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Container.TakeLast<EnumerableContainer>["takeLast"] =
  Observable_takeLast;

export const takeWhile: Container.TakeWhile<EnumerableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throws: Throws<EnumerableContainer>["throws"] = Observable_throws;

export const throwIfEmpty: ThrowIfEmpty<EnumerableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toReadonlyArray: Container.ToReadonlyArray<EnumerableContainer>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const zip: Container.Zip<EnumerableContainer>["zip"] =
  Observable_zip as Container.Zip<EnumerableContainer>["zip"];

export const zipWith: Container.ZipWith<EnumerableContainer>["zipWith"] =
  Observable_zipWith as Container.ZipWith<EnumerableContainer>["zipWith"];
