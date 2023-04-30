import {
  Buffer,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  Contains,
  DistinctUntilChanged,
  EndWith,
  EnumeratorLike,
  EverySatisfy,
  First,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
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
import * as Containers from "../containers.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import { Factory, Function1, Optional, Updater } from "../functions.js";
import ReadonlyArray_toObservable from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  Animate,
  BackpressureStrategy,
  CatchError,
  CombineLatest,
  CurrentTime,
  DecodeWithCharset,
  Defer,
  DispatchTo,
  EncodeUtf8,
  Enqueue,
  Exhaust,
  ExhaustMap,
  FirstAsync,
  Flow,
  ForkMerge,
  ForkZipLatest,
  LastAsync,
  Merge,
  MergeAll,
  MergeMap,
  MergeWith,
  Retry,
  RunnableContainerLike,
  RunnableLike,
  ScanLast,
  ScanMany,
  SwitchAll,
  SwitchMap,
  TakeUntil,
  Throttle,
  ThrowIfEmpty,
  Timeout,
  ToEnumerable,
  WithCurrentTime,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx.js";
import type * as Rx from "../rx.js";
import Observable_animate from "./Observable/__internal__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
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
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer.js";
import Runnable_encodeUtf8 from "./Runnable/__internal__/Runnable.encodeUtf8.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flatMapIterable from "./Runnable/__internal__/Runnable.flatMapIterable.js";
import Runnable_flow from "./Runnable/__internal__/Runnable.flow.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_mergeMap from "./Runnable/__internal__/Runnable.mergeMap.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_scanLast from "./Runnable/__internal__/Runnable.scanLast.js";
import Runnable_scanMany from "./Runnable/__internal__/Runnable.scanMany.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import Runnable_throttle from "./Runnable/__internal__/Runnable.throttle.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";

export const animate: Animate<RunnableContainerLike>["animate"] =
  Observable_animate;

export const backpressureStrategy: BackpressureStrategy<RunnableContainerLike>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Buffer<RunnableContainerLike>["buffer"] =
  Observable_buffer;

export const catchError: CatchError<RunnableContainerLike>["catchError"] =
  Runnable_catchError;

export const combineLatest: CombineLatest<RunnableContainerLike>["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Runnable_compute;

export const concat: Concat<RunnableContainerLike>["concat"] =
  Observable_concat;

export const concatAll: ConcatAll<RunnableContainerLike>["concatAll"] =
  Runnable_concatAll;

export const concatMap: ConcatMap<RunnableContainerLike>["concatMap"] =
  Runnable_concatMap;

export const concatWith: ConcatWith<RunnableContainerLike>["concatWith"] =
  Observable_concatWith as ConcatWith<RunnableContainerLike>["concatWith"];

export const contains: Contains<RunnableContainerLike>["contains"] =
  Runnable_contains;

export const currentTime: CurrentTime<RunnableContainerLike>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: DecodeWithCharset<RunnableContainerLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<RunnableContainerLike>["defer"] = Runnable_defer;

export const dispatchTo: DispatchTo<RunnableContainerLike>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: DistinctUntilChanged<RunnableContainerLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

interface Empty extends Containers.Empty<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  empty<T>(options?: { delay?: number }): RunnableLike<T>;
}
export const empty: Empty["empty"] = Observable_empty;

export const encodeUtf8: EncodeUtf8<RunnableContainerLike>["encodeUtf8"] =
  Runnable_encodeUtf8;

export const enqueue: Enqueue<RunnableContainerLike>["enqueue"] =
  Observable_enqueue;

export const endWith: EndWith<RunnableContainerLike>["endWith"] =
  Observable_endWith;

export const everySatisfy: EverySatisfy<RunnableContainerLike>["everySatisfy"] =
  Runnable_everySatisfy;

export const exhaust: Exhaust<RunnableContainerLike>["exhaust"] =
  Runnable_exhaust;

export const exhaustMap: ExhaustMap<RunnableContainerLike>["exhaustMap"] =
  Runnable_exhaustMap;

export const first: First<RunnableContainerLike>["first"] = Runnable_first;

export const firstAsync: FirstAsync<RunnableContainerLike>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: FlatMapIterable<RunnableContainerLike>["flatMapIterable"] =
  Runnable_flatMapIterable;

export const flow: Flow<RunnableContainerLike>["flow"] = Runnable_flow;

export const forEach: ForEach<RunnableContainerLike>["forEach"] =
  Observable_forEach;

export const forkConcat: ForkConcat<RunnableContainerLike>["forkConcat"] =
  Observable_forkConcat as ForkConcat<RunnableContainerLike>["forkConcat"];

export const forkMerge: ForkMerge<RunnableContainerLike>["forkMerge"] =
  Observable_forkMerge as ForkMerge<RunnableContainerLike>["forkMerge"];

export const forkZip: ForkZip<RunnableContainerLike>["forkZip"] =
  Observable_forkZip as ForkZip<RunnableContainerLike>["forkZip"];

export const forkZipLatest: ForkZipLatest<RunnableContainerLike>["forkZipLatest"] =
  Observable_forkZipLatest as ForkZipLatest<RunnableContainerLike>["forkZipLatest"];

interface FromEnumeratorFactory
  extends Containers.FromEnumeratorFactory<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): RunnableLike<T>;
}
export const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

interface FromFactory extends Containers.FromFactory<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  fromFactory<T>(
    factory: Factory<T>,
    options?: {
      readonly delay?: number;
    },
  ): RunnableLike<T>;
}
export const fromFactory: FromFactory["fromFactory"] = Observable_fromFactory;

interface FromIterable extends Containers.FromIterable<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  fromIterable<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;
}
export const fromIterable: FromIterable["fromIterable"] = Iterable_toObservable;

interface FromOptional extends Containers.FromOptional<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  fromOptional<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
}
export const fromOptional: FromOptional["fromOptional"] = Optional_toObservable;

interface FromReadonlyArray
  extends Containers.FromReadonlyArray<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }): Function1<readonly T[], RunnableLike<T>>;
}
export const fromReadonlyArray: FromReadonlyArray["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

interface Generate extends Containers.Generate<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): RunnableLike<T>;
}

export const generate: Generate["generate"] = Observable_generate;

export const identity: Identity<RunnableContainerLike>["identity"] =
  Container_identity;

export const ignoreElements: IgnoreElements<RunnableContainerLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<RunnableContainerLike>["keep"] = Observable_keep;

export const keepType: KeepType<RunnableContainerLike>["keepType"] =
  Observable_keepType as KeepType<RunnableContainerLike>["keepType"];

export const last: Last<RunnableContainerLike>["last"] = Runnable_last;

export const lastAsync: LastAsync<RunnableContainerLike>["lastAsync"] =
  Observable_lastAsync;

export const noneSatisfy: NoneSatisfy<RunnableContainerLike>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const map: Map<RunnableContainerLike>["map"] = Observable_map;

export const mapTo: MapTo<RunnableContainerLike>["mapTo"] = Observable_mapTo;

export const merge: Merge<RunnableContainerLike>["merge"] = Observable_merge;

export const mergeAll: MergeAll<RunnableContainerLike>["mergeAll"] =
  Runnable_mergeAll;

export const mergeMap: MergeMap<RunnableContainerLike>["mergeMap"] =
  Runnable_mergeMap;

export const mergeWith: MergeWith<RunnableContainerLike>["mergeWith"] =
  Observable_mergeWith as MergeWith<RunnableContainerLike>["mergeWith"];

export const pairwise: Pairwise<RunnableContainerLike>["pairwise"] =
  Observable_pairwise;

export const pick: Pick<RunnableContainerLike>["pick"] = Observable_pick;

export const reduce: Reduce<RunnableContainerLike>["reduce"] = Runnable_reduce;

export const repeat: Repeat<RunnableContainerLike>["repeat"] =
  Observable_repeat;

export const retry: Retry<RunnableContainerLike>["retry"] = Observable_retry;

export const run = Runnable_run;

export const scan: Scan<RunnableContainerLike>["scan"] = Observable_scan;

export const scanLast: ScanLast<RunnableContainerLike>["scanLast"] =
  Runnable_scanLast;

export const scanMany: ScanMany<RunnableContainerLike>["scanMany"] =
  Runnable_scanMany;

export const skipFirst: SkipFirst<RunnableContainerLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<RunnableContainerLike>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: StartWith<RunnableContainerLike>["startWith"] =
  Observable_startWith;

export const switchAll: SwitchAll<RunnableContainerLike>["switchAll"] =
  Runnable_switchAll;

export const switchMap: SwitchMap<RunnableContainerLike>["switchMap"] =
  Runnable_switchMap;

export const takeFirst: TakeFirst<RunnableContainerLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<RunnableContainerLike>["takeLast"] =
  Observable_takeLast;

export const takeUntil: TakeUntil<RunnableContainerLike>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: TakeWhile<RunnableContainerLike>["takeWhile"] =
  Observable_takeWhile;

export const throttle: Throttle<RunnableContainerLike>["throttle"] =
  Runnable_throttle;

export const throwIfEmpty: ThrowIfEmpty<RunnableContainerLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends Rx.Throws<RunnableContainerLike> {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: Timeout<RunnableContainerLike>["timeout"] =
  Observable_timeout;

export const toEnumerable: ToEnumerable<RunnableContainerLike>["toEnumerable"] =
  Observable_toEnumerable;

export const toReadonlyArray: ToReadonlyArray<RunnableContainerLike>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const withCurrentTime: WithCurrentTime<RunnableContainerLike>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: WithLatestFrom<RunnableContainerLike>["withLatestFrom"] =
  Observable_withLatestFrom as WithLatestFrom<RunnableContainerLike>["withLatestFrom"];

export const zip: Zip<RunnableContainerLike>["zip"] =
  Observable_zip as Zip<RunnableContainerLike>["zip"];

export const zipLatest: ZipLatest<RunnableContainerLike>["zipLatest"] =
  Observable_zipLatest as ZipLatest<RunnableContainerLike>["zipLatest"];

export const zipWith: ZipWith<RunnableContainerLike>["zipWith"] =
  Observable_zipWith as ZipWith<RunnableContainerLike>["zipWith"];

export const zipWithLatestFrom: ZipWithLatestFrom<RunnableContainerLike>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as ZipWithLatestFrom<RunnableContainerLike>["zipWithLatestFrom"];
