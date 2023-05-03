import { Container, EnumeratorLike } from "../containers.js";
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
  RunnableContainer,
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

export const animate: Animate<RunnableContainer>["animate"] =
  Observable_animate;

export const backpressureStrategy: BackpressureStrategy<RunnableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Container.Buffer<RunnableContainer>["buffer"] =
  Observable_buffer;

export const catchError: CatchError<RunnableContainer>["catchError"] =
  Runnable_catchError;

export const combineLatest: CombineLatest<RunnableContainer>["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Runnable_compute;

export const concat: Container.Concat<RunnableContainer>["concat"] =
  Observable_concat;

export const concatAll: Container.ConcatAll<RunnableContainer>["concatAll"] =
  Runnable_concatAll;

export const concatMap: Container.ConcatMap<RunnableContainer>["concatMap"] =
  Runnable_concatMap;

export const concatWith: Container.ConcatWith<RunnableContainer>["concatWith"] =
  Observable_concatWith as Container.ConcatWith<RunnableContainer>["concatWith"];

export const contains: Container.Contains<RunnableContainer>["contains"] =
  Runnable_contains;

export const currentTime: CurrentTime<RunnableContainer>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: DecodeWithCharset<RunnableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<RunnableContainer>["defer"] = Runnable_defer;

export const dispatchTo: DispatchTo<RunnableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Container.DistinctUntilChanged<RunnableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

interface Empty extends Container.Empty<RunnableContainer> {
  /**
   * @category Constructor
   */
  empty<T>(options?: { delay?: number }): RunnableLike<T>;
}
export const empty: Empty["empty"] = Observable_empty;

export const encodeUtf8: EncodeUtf8<RunnableContainer>["encodeUtf8"] =
  Runnable_encodeUtf8;

export const enqueue: Enqueue<RunnableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: Container.EndWith<RunnableContainer>["endWith"] =
  Observable_endWith;

export const everySatisfy: Container.EverySatisfy<RunnableContainer>["everySatisfy"] =
  Runnable_everySatisfy;

export const exhaust: Exhaust<RunnableContainer>["exhaust"] = Runnable_exhaust;

export const exhaustMap: ExhaustMap<RunnableContainer>["exhaustMap"] =
  Runnable_exhaustMap;

export const first: Container.First<RunnableContainer>["first"] =
  Runnable_first;

export const firstAsync: FirstAsync<RunnableContainer>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: Container.FlatMapIterable<RunnableContainer>["flatMapIterable"] =
  Runnable_flatMapIterable;

export const flow: Flow<RunnableContainer>["flow"] = Runnable_flow;

export const forEach: Container.ForEach<RunnableContainer>["forEach"] =
  Observable_forEach;

export const forkConcat: Container.ForkConcat<RunnableContainer>["forkConcat"] =
  Observable_forkConcat as Container.ForkConcat<RunnableContainer>["forkConcat"];

export const forkMerge: ForkMerge<RunnableContainer>["forkMerge"] =
  Observable_forkMerge as ForkMerge<RunnableContainer>["forkMerge"];

export const forkZip: Container.ForkZip<RunnableContainer>["forkZip"] =
  Observable_forkZip as Container.ForkZip<RunnableContainer>["forkZip"];

export const forkZipLatest: ForkZipLatest<RunnableContainer>["forkZipLatest"] =
  Observable_forkZipLatest as ForkZipLatest<RunnableContainer>["forkZipLatest"];

interface FromEnumeratorFactory
  extends Container.FromEnumeratorFactory<RunnableContainer> {
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

interface FromFactory extends Container.FromFactory<RunnableContainer> {
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

interface FromIterable extends Container.FromIterable<RunnableContainer> {
  /**
   * @category Constructor
   */
  fromIterable<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;
}
export const fromIterable: FromIterable["fromIterable"] = Iterable_toObservable;

interface FromOptional extends Container.FromOptional<RunnableContainer> {
  /**
   * @category Constructor
   */
  fromOptional<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
}
export const fromOptional: FromOptional["fromOptional"] = Optional_toObservable;

interface FromReadonlyArray
  extends Container.FromReadonlyArray<RunnableContainer> {
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

interface Generate extends Container.Generate<RunnableContainer> {
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

export const identity: Container.Identity<RunnableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Container.IgnoreElements<RunnableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Container.Keep<RunnableContainer>["keep"] = Observable_keep;

export const keepType: Container.KeepType<RunnableContainer>["keepType"] =
  Observable_keepType as Container.KeepType<RunnableContainer>["keepType"];

export const last: Container.Last<RunnableContainer>["last"] = Runnable_last;

export const lastAsync: LastAsync<RunnableContainer>["lastAsync"] =
  Observable_lastAsync;

export const noneSatisfy: Container.NoneSatisfy<RunnableContainer>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const map: Container.Map<RunnableContainer>["map"] = Observable_map;

export const mapTo: Container.MapTo<RunnableContainer>["mapTo"] =
  Observable_mapTo;

export const merge: Merge<RunnableContainer>["merge"] = Observable_merge;

export const mergeAll: MergeAll<RunnableContainer>["mergeAll"] =
  Runnable_mergeAll;

export const mergeMap: MergeMap<RunnableContainer>["mergeMap"] =
  Runnable_mergeMap;

export const mergeWith: MergeWith<RunnableContainer>["mergeWith"] =
  Observable_mergeWith as MergeWith<RunnableContainer>["mergeWith"];

export const pairwise: Container.Pairwise<RunnableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Container.Pick<RunnableContainer>["pick"] = Observable_pick;

export const reduce: Container.Reduce<RunnableContainer>["reduce"] =
  Runnable_reduce;

export const repeat: Container.Repeat<RunnableContainer>["repeat"] =
  Observable_repeat;

export const retry: Retry<RunnableContainer>["retry"] = Observable_retry;

export const run = Runnable_run;

export const scan: Container.Scan<RunnableContainer>["scan"] = Observable_scan;

export const scanLast: ScanLast<RunnableContainer>["scanLast"] =
  Runnable_scanLast;

export const scanMany: ScanMany<RunnableContainer>["scanMany"] =
  Runnable_scanMany;

export const skipFirst: Container.SkipFirst<RunnableContainer>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: Container.SomeSatisfy<RunnableContainer>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: Container.StartWith<RunnableContainer>["startWith"] =
  Observable_startWith;

export const switchAll: SwitchAll<RunnableContainer>["switchAll"] =
  Runnable_switchAll;

export const switchMap: SwitchMap<RunnableContainer>["switchMap"] =
  Runnable_switchMap;

export const takeFirst: Container.TakeFirst<RunnableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Container.TakeLast<RunnableContainer>["takeLast"] =
  Observable_takeLast;

export const takeUntil: TakeUntil<RunnableContainer>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: Container.TakeWhile<RunnableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throttle: Throttle<RunnableContainer>["throttle"] =
  Runnable_throttle;

export const throwIfEmpty: ThrowIfEmpty<RunnableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends Rx.Throws<RunnableContainer> {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: Timeout<RunnableContainer>["timeout"] =
  Observable_timeout;

export const toEnumerable: ToEnumerable<RunnableContainer>["toEnumerable"] =
  Observable_toEnumerable;

export const toReadonlyArray: Container.ToReadonlyArray<RunnableContainer>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const withCurrentTime: WithCurrentTime<RunnableContainer>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: WithLatestFrom<RunnableContainer>["withLatestFrom"] =
  Observable_withLatestFrom as WithLatestFrom<RunnableContainer>["withLatestFrom"];

export const zip: Container.Zip<RunnableContainer>["zip"] =
  Observable_zip as Container.Zip<RunnableContainer>["zip"];

export const zipLatest: ZipLatest<RunnableContainer>["zipLatest"] =
  Observable_zipLatest as ZipLatest<RunnableContainer>["zipLatest"];

export const zipWith: Container.ZipWith<RunnableContainer>["zipWith"] =
  Observable_zipWith as Container.ZipWith<RunnableContainer>["zipWith"];

export const zipWithLatestFrom: ZipWithLatestFrom<RunnableContainer>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as ZipWithLatestFrom<RunnableContainer>["zipWithLatestFrom"];
