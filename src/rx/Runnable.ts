import {
  Buffer,
  CatchError,
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
  CombineLatest,
  CurrentTime,
  Enqueue,
  Exhaust,
  ExhaustMap,
  ForkMerge,
  ForkZipLatest,
  Merge,
  MergeAll,
  MergeWith,
  Retry,
  RunnableLike,
  ScanLast,
  ScanMany,
  Spring,
  SwitchAll,
  SwitchMap,
  TakeUntil,
  Throttle,
  Timeout,
  ToEnumerable,
  ToObservable,
  ToRunnable,
  Tween,
  WithBackpressureStrategy,
  WithCurrentTime,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx.js";
import { ToFlowable } from "../streaming.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_contains from "./Observable/__internal__/Observable.contains.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
import Observable_spring from "./Observable/__internal__/Observable.spring.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_tween from "./Observable/__internal__/Observable.tween.js";
import Observable_withBackpressureStrategy from "./Observable/__internal__/Observable.withBackpressureStrategy.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer.js";
import Runnable_encodeUtf8 from "./Runnable/__internal__/Runnable.encodeUtf8.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flatMapIterable from "./Runnable/__internal__/Runnable.flatMapIterable.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_scanLast from "./Runnable/__internal__/Runnable.scanLast.js";
import Runnable_scanMany from "./Runnable/__internal__/Runnable.scanMany.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import Runnable_throttle from "./Runnable/__internal__/Runnable.throttle.js";
import Runnable_toFlowable from "./Runnable/__internal__/Runnable.toFlowable.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";

export const buffer: Buffer<RunnableLike>["buffer"] = Observable_buffer;

export const catchError: CatchError<RunnableLike>["catchError"] =
  Runnable_catchError;

export const combineLatest: CombineLatest<RunnableLike>["combineLatest"] =
  Observable_combineLatest;

export const concat: Concat<RunnableLike>["concat"] = Observable_concat;

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  Runnable_concatAll;

export const concatMap: ConcatMap<RunnableLike>["concatMap"] =
  Runnable_concatMap;

export const concatWith: ConcatWith<RunnableLike>["concatWith"] =
  Observable_concatWith as ConcatWith<RunnableLike>["concatWith"];

export const contains: Contains<RunnableLike>["contains"] = Observable_contains;

export const currentTime: CurrentTime<RunnableLike>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<RunnableLike>["defer"] = Runnable_defer;

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Empty<RunnableLike, { delay?: number }>["empty"] =
  Observable_empty;

export const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"] =
  Runnable_encodeUtf8;

export const enqueue: Enqueue<RunnableLike>["enqueue"] = Observable_enqueue;

export const endWith: EndWith<RunnableLike>["endWith"] = Observable_endWith;

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  Observable_everySatisfy;

export const exhaust: Exhaust<RunnableLike>["exhaust"] = Runnable_exhaust;

export const exhaustMap: ExhaustMap<RunnableLike>["exhaustMap"] =
  Runnable_exhaustMap;

export const first: First<RunnableLike>["first"] = Runnable_first;

export const flatMapIterable: FlatMapIterable<RunnableLike>["flatMapIterable"] =
  Runnable_flatMapIterable;

export const forEach: ForEach<RunnableLike>["forEach"] = Observable_forEach;

export const forkConcat: ForkConcat<RunnableLike>["forkConcat"] =
  Observable_forkConcat as ForkConcat<RunnableLike>["forkConcat"];

export const forkMerge: ForkMerge<RunnableLike>["forkMerge"] =
  Observable_forkMerge as ForkMerge<RunnableLike>["forkMerge"];

export const forkZip: ForkZip<RunnableLike>["forkZip"] =
  Observable_forkZip as ForkZip<RunnableLike>["forkZip"];

export const forkZipLatest: ForkZipLatest<RunnableLike>["forkZipLatest"] =
  Observable_forkZipLatest as ForkZipLatest<RunnableLike>["forkZipLatest"];

export const fromFactory: FromFactory<
  RunnableLike,
  { delay: number }
>["fromFactory"] = Observable_fromFactory;

export const fromIterable: FromIterable<
  RunnableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromIterable"] = Iterable_toObservable;

export const fromOptional: FromOptional<
  RunnableLike,
  { delay?: number }
>["fromOptional"] = Optional_toObservable;

export const fromReadonlyArray: FromReadonlyArray<
  RunnableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = ReadonlyArray_toObservable;

export const generate: Generate<
  RunnableLike,
  { readonly delay?: number; readonly delayStart?: boolean }
>["generate"] = Observable_generate;

export const identity: Identity<RunnableLike>["identity"] = Container_identity;

export const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<RunnableLike>["keep"] = Observable_keep;

export const keepType: KeepType<RunnableLike>["keepType"] =
  Observable_keepType as KeepType<RunnableLike>["keepType"];

export const last: Last<RunnableLike>["last"] = Runnable_last;

export const map: Map<RunnableLike>["map"] = Observable_map;

export const mapTo: MapTo<RunnableLike>["mapTo"] = Observable_mapTo;

export const merge: Merge<RunnableLike>["merge"] = Observable_merge;

export const mergeAll: MergeAll<
  RunnableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["mergeAll"] = Runnable_mergeAll;

export const mergeWith: MergeWith<RunnableLike>["mergeWith"] =
  Observable_mergeWith as MergeWith<RunnableLike>["mergeWith"];

export const pairwise: Pairwise<RunnableLike>["pairwise"] = Observable_pairwise;

export const pick: Pick<RunnableLike>["pick"] = Observable_pick;

export const reduce: Reduce<RunnableLike>["reduce"] = Observable_reduce;

export const retry: Retry<RunnableLike>["retry"] = Observable_retry;

export const run = Runnable_run;

export const scan: Scan<RunnableLike>["scan"] = Observable_scan;

export const scanLast: ScanLast<RunnableLike, RunnableLike>["scanLast"] =
  Runnable_scanLast;

export const scanMany: ScanMany<RunnableLike, RunnableLike>["scanMany"] =
  Runnable_scanMany;

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  Observable_someSatisfy;

/**
 * @category Constructor
 */
export const spring: Spring<RunnableLike>["spring"] = Observable_spring;

export const startWith: StartWith<RunnableLike>["startWith"] =
  Observable_startWith;

export const switchAll: SwitchAll<RunnableLike>["switchAll"] =
  Runnable_switchAll;

export const switchMap: SwitchMap<RunnableLike>["switchMap"] =
  Runnable_switchMap;

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<RunnableLike>["takeLast"] = Observable_takeLast;

export const takeUntil: TakeUntil<RunnableLike>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  Observable_takeWhile;

export const throttle: Throttle<RunnableLike>["throttle"] = Runnable_throttle;

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const throws: Throws<RunnableLike, { delay?: number }>["throws"] =
  Observable_throws;

export const timeout: Timeout<RunnableLike>["timeout"] = Observable_timeout;

export const toEnumerable: ToEnumerable<RunnableLike>["toEnumerable"] =
  Observable_toEnumerable;

export const toFlowable: ToFlowable<RunnableLike>["toFlowable"] =
  Runnable_toFlowable;

export const toObservable: ToObservable<RunnableLike>["toObservable"] =
  Container_identity as ToObservable<RunnableLike>["toObservable"];

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  Container_identity as ToRunnable<RunnableLike>["toRunnable"];

/**
 * @category Constructor
 */
export const tween: Tween<RunnableLike>["tween"] = Observable_tween;

export const withBackpressureStrategy: WithBackpressureStrategy<RunnableLike>["withBackpressureStrategy"] =
  Observable_withBackpressureStrategy;

export const withCurrentTime: WithCurrentTime<RunnableLike>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: WithLatestFrom<RunnableLike>["withLatestFrom"] =
  Observable_withLatestFrom as WithLatestFrom<RunnableLike>["withLatestFrom"];

export const zip: Zip<RunnableLike>["zip"] =
  Observable_zip as Zip<RunnableLike>["zip"];

export const zipLatest: ZipLatest<RunnableLike>["zipLatest"] =
  Observable_zipLatest as ZipLatest<RunnableLike>["zipLatest"];

export const zipWith: ZipWith<RunnableLike>["zipWith"] =
  Observable_zipWith as ZipWith<RunnableLike>["zipWith"];

export const zipWithLatestFrom: ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"];
