import {
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ContainerOperator,
  DistinctUntilChanged,
  EndWith,
  EnumeratorLike,
  FlatMapIterable,
  ForEach,
  ForkConcat,
  ForkZip,
  FromAsyncIterable,
  Identity,
  IgnoreElements,
  Keep,
  KeepType,
  Map,
  MapTo,
  Pairwise,
  Pick,
  Repeat,
  Scan,
  SkipFirst,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  Zip,
  ZipWith,
} from "../containers.js";
import * as Containers from "../containers.js";
import AsyncIterable_toObservable from "../containers/AsyncIterable/__internal__/AsyncIterable.toObservable.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toObservable from "../containers/Iterable/__internal__/Iterable.toObservable.js";
import Optional_toObservable from "../containers/Optional/__internal__/Optional.toObservable.js";
import {
  Factory,
  Function1,
  Optional,
  SideEffect1,
  Updater,
} from "../functions.js";
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
  ForkCombineLatest,
  ForkMerge,
  ForkZipLatest,
  LastAsync,
  Merge,
  MergeAll,
  MergeMap,
  MergeWith,
  Multicast,
  Never,
  ObservableContainerLike,
  ObservableLike,
  ObserverLike,
  Retry,
  ScanLast,
  ScanMany,
  Share,
  SwitchAll,
  SwitchMap,
  TakeUntil,
  Throttle,
  ThrowIfEmpty,
  Timeout,
  ToEnumerable,
  ToObservable,
  ToRunnable,
  WithCurrentTime,
  WithLatestFrom,
  ZipLatest,
  ZipWithLatestFrom,
} from "../rx.js";
import type * as Rx from "../rx.js";
import {
  DisposableLike,
  DisposableOrTeardown,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../util.js";
import Observable_animate from "./Observable/__internal__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Observable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatAll from "./Observable/__internal__/Observable.concatAll.js";
import Observable_concatMap from "./Observable/__internal__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__internal__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__internal__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkCombineLatest from "./Observable/__internal__/Observable.forkCombineLatest.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__internal__/Observable.mergeAll.js";
import Observable_mergeMap from "./Observable/__internal__/Observable.mergeMap.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_scanLast from "./Observable/__internal__/Observable.scanLast.js";
import Observable_share from "./Observable/__internal__/Observable.share.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__internal__/Observable.switchAll.js";
import Observable_switchMap from "./Observable/__internal__/Observable.switchMap.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_toEnumerable from "./Observable/__internal__/Observable.toEnumerable.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_toRunnable from "./Observable/__internal__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";

export const animate: Animate<ObservableContainerLike>["animate"] =
  Observable_animate;

export const backpressureStrategy: BackpressureStrategy<ObservableContainerLike>["backpressureStrategy"] =
  Observable_backpressureStrategy;

/**
 * @category Operator
 */
export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableContainerLike>;
  readonly count?: number;
}) => ContainerOperator<ObservableContainerLike, T, readonly T[]> =
  Observable_buffer;

export const catchError: CatchError<ObservableContainerLike>["catchError"] =
  Observable_catchError;

export const combineLatest: CombineLatest<ObservableContainerLike>["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
export const compute = Observable_compute;

export const concat: Concat<ObservableContainerLike>["concat"] =
  Observable_concat;

export const concatAll: ConcatAll<ObservableContainerLike>["concatAll"] =
  Observable_concatAll;

export const concatMap: ConcatMap<ObservableContainerLike>["concatMap"] =
  Observable_concatMap;

export const concatWith: ConcatWith<ObservableContainerLike>["concatWith"] =
  Observable_concatWith as ConcatWith<ObservableContainerLike>["concatWith"];

/**
 * @category Constructor
 */
export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable_create;

export const currentTime: CurrentTime<ObservableContainerLike>["currentTime"] =
  Observable_currentTime;

export const decodeWithCharset: DecodeWithCharset<ObservableContainerLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<ObservableContainerLike>["defer"] = Observable_defer;

export const dispatchTo: DispatchTo<ObservableContainerLike>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: DistinctUntilChanged<ObservableContainerLike>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

interface Empty extends Containers.Empty<ObservableContainerLike> {
  /**
   * Return an ContainerLike that emits no items.
   *
   * @category Constructor
   */
  empty<T>(options?: { delay?: number }): ObservableLike<T>;
}
export const empty: Empty["empty"] = Observable_empty;

export const encodeUtf8: EncodeUtf8<ObservableContainerLike>["encodeUtf8"] =
  Observable_encodeUtf8;

export const enqueue: Enqueue<ObservableContainerLike>["enqueue"] =
  Observable_enqueue;

export const endWith: EndWith<ObservableContainerLike>["endWith"] =
  Observable_endWith;

export const exhaust: Exhaust<ObservableContainerLike>["exhaust"] =
  Observable_exhaust;

export const exhaustMap: ExhaustMap<ObservableContainerLike>["exhaustMap"] =
  Observable_exhaustMap;

export const firstAsync: FirstAsync<ObservableContainerLike>["firstAsync"] =
  Observable_firstAsync;

/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;

export const flatMapIterable: FlatMapIterable<ObservableContainerLike>["flatMapIterable"] =
  Observable_flatMapIterable;

export const forEach: ForEach<ObservableContainerLike>["forEach"] =
  Observable_forEach;

export const forkCombineLatest: ForkCombineLatest<ObservableContainerLike>["forkCombineLatest"] =
  Observable_forkCombineLatest;

export const forkConcat: ForkConcat<ObservableContainerLike>["forkConcat"] =
  Observable_forkConcat;

export const forkMerge: ForkMerge<ObservableContainerLike>["forkMerge"] =
  Observable_forkMerge;

export const forkZip: ForkZip<ObservableContainerLike>["forkZip"] =
  Observable_forkZip;

export const forkZipLatest: ForkZipLatest<ObservableContainerLike>["forkZipLatest"] =
  Observable_forkZipLatest;

/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;

export const fromAsyncIterable: FromAsyncIterable<ObservableContainerLike>["fromAsyncIterable"] =
  AsyncIterable_toObservable;

interface FromEnumeratorFactory
  extends Containers.FromEnumeratorFactory<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): ObservableLike<T>;
}
export const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

interface FromFactory extends Containers.FromFactory<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  fromFactory<T>(
    factory: Factory<T>,
    options?: {
      readonly delay?: number;
    },
  ): ObservableLike<T>;
}
export const fromFactory: FromFactory["fromFactory"] = Observable_fromFactory;

interface FromIterable
  extends Containers.FromIterable<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  fromIterable<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, ObservableLike<T>>;
}
export const fromIterable: FromIterable["fromIterable"] = Iterable_toObservable;

interface FromOptional
  extends Containers.FromOptional<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  fromOptional<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, ObservableLike<T>>;
}
export const fromOptional: FromOptional["fromOptional"] = Optional_toObservable;

interface FromReadonlyArray
  extends Containers.FromReadonlyArray<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }): Function1<readonly T[], ObservableLike<T>>;
}
export const fromReadonlyArray: FromReadonlyArray["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

interface Generate extends Containers.Generate<ObservableContainerLike> {
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
  ): ObservableLike<T>;
}
export const generate: Generate["generate"] = Observable_generate;

export const identity: Identity<ObservableContainerLike>["identity"] =
  Container_identity;

export const ignoreElements: IgnoreElements<ObservableContainerLike>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Keep<ObservableContainerLike>["keep"] = Observable_keep;

export const keepType: KeepType<ObservableContainerLike>["keepType"] =
  Observable_keepType as KeepType<ObservableContainerLike>["keepType"];

export const lastAsync: LastAsync<ObservableContainerLike>["lastAsync"] =
  Observable_lastAsync;

export const map: Map<ObservableContainerLike>["map"] = Observable_map;

export const mapTo: MapTo<ObservableContainerLike>["mapTo"] = Observable_mapTo;

export const merge: Merge<ObservableContainerLike>["merge"] = Observable_merge;

export const mergeAll: MergeAll<ObservableContainerLike>["mergeAll"] =
  Observable_mergeAll;

export const mergeMap: MergeMap<ObservableContainerLike>["mergeMap"] =
  Observable_mergeMap;

export const mergeWith: MergeWith<ObservableContainerLike>["mergeWith"] =
  Observable_mergeWith as MergeWith<ObservableContainerLike>["mergeWith"];

export const multicast: Multicast<ObservableContainerLike>["multicast"] =
  Observable_multicast;

export const never: Never<ObservableContainerLike>["never"] = Observable_never;

/**
 * @category Operator
 */
export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableContainerLike, T, T> = Observable_onSubscribe;

export const pairwise: Pairwise<ObservableContainerLike>["pairwise"] =
  Observable_pairwise;

export const pick: Pick<ObservableContainerLike>["pick"] = Observable_pick;

export const repeat: Repeat<ObservableContainerLike>["repeat"] =
  Observable_repeat;

export const retry: Retry<ObservableContainerLike>["retry"] = Observable_retry;

export const scan: Scan<ObservableContainerLike>["scan"] = Observable_scan;

export const scanLast: ScanLast<ObservableContainerLike>["scanLast"] =
  Observable_scanLast;

export const scanMany: ScanMany<ObservableContainerLike>["scanMany"] =
  Observable_scanLast;

export const share: Share<ObservableContainerLike>["share"] = Observable_share;

export const skipFirst: SkipFirst<ObservableContainerLike>["skipFirst"] =
  Observable_skipFirst;

export const startWith: StartWith<ObservableContainerLike>["startWith"] =
  Observable_startWith;

export const switchAll: SwitchAll<ObservableContainerLike>["switchAll"] =
  Observable_switchAll;

export const switchMap: SwitchMap<ObservableContainerLike>["switchMap"] =
  Observable_switchMap;

export const subscribe: <T>(
  scheduler: SchedulerLike,
  options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  },
) => Function1<ObservableLike<T>, DisposableLike> = Observable_subscribe;

/**
 * @category Operator
 */
export const subscribeOn = Observable_subscribeOn;

export const takeFirst: TakeFirst<ObservableContainerLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<ObservableContainerLike>["takeLast"] =
  Observable_takeLast;

export const takeUntil: TakeUntil<ObservableContainerLike>["takeUntil"] =
  Observable_takeUntil;

export const takeWhile: TakeWhile<ObservableContainerLike>["takeWhile"] =
  Observable_takeWhile;

export const throttle: Throttle<ObservableContainerLike>["throttle"] =
  Observable_throttle;

export const throwIfEmpty: ThrowIfEmpty<ObservableContainerLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends Rx.Throws<ObservableContainerLike> {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): ObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

export const timeout: Timeout<ObservableContainerLike>["timeout"] =
  Observable_timeout;

export const toEnumerable: ToEnumerable<ObservableContainerLike>["toEnumerable"] =
  Observable_toEnumerable;

/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;

export const toObservable: ToObservable<ObservableContainerLike>["toObservable"] =
  identity;

export const toRunnable: ToRunnable<ObservableContainerLike>["toRunnable"] =
  Observable_toRunnable;

export const withCurrentTime: WithCurrentTime<ObservableContainerLike>["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: WithLatestFrom<ObservableContainerLike>["withLatestFrom"] =
  Observable_withLatestFrom as WithLatestFrom<ObservableContainerLike>["withLatestFrom"];

export const zip: Zip<ObservableContainerLike>["zip"] = Observable_zip;

export const zipLatest: ZipLatest<ObservableContainerLike>["zipLatest"] =
  Observable_zipLatest;

export const zipWith: ZipWith<ObservableContainerLike>["zipWith"] =
  Observable_zipWith;

export const zipWithLatestFrom: ZipWithLatestFrom<ObservableContainerLike>["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;
