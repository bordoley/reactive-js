import {
  CatchError,
  Concat,
  ConcatAll,
  ContainerOperator,
  DecodeWithCharset,
  Defer,
  EverySatisfy,
  ForkConcat,
  ForkZip,
  FromPromise,
  Keep,
  Map,
  Never,
  Pairwise,
  Reduce,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToPromiseable,
  ToReadonlyArray,
  Zip,
} from "../containers";
import Promiseable_toObservable from "../containers/__internal__/Promiseable/Promiseable.toObservable";
import {
  Factory,
  Function1,
  Function2,
  Predicate,
  SideEffect1,
  Updater,
} from "../functions";
import { ToEnumerable } from "../ix";
import {
  EnumerableObservableLike,
  ObservableLike,
  ObserverLike,
  RunnableObservableLike,
  ScanAsync,
} from "../rx";
import { SchedulerLike } from "../scheduling";
import { FromFlowable, ToFlowable } from "../streaming";
import Flowable_toObservable from "../streaming/__internal__/Flowable/Flowable.toObservable";
import { DisposableLike, DisposableOrTeardown } from "../util";
import Disposable_toObservable from "../util/__internal__/Disposable/Disposable.toObservable";
import EnumerableObservable_never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
import Observable_buffer from "./__internal__/Observable/Observable.buffer";
import Observable_catchError from "./__internal__/Observable/Observable.catchError";
import Observable_combineLatest from "./__internal__/Observable/Observable.combineLatest";
import Observable_concat from "./__internal__/Observable/Observable.concat";
import Observable_concatAll from "./__internal__/Observable/Observable.concatAll";
import Observable_create from "./__internal__/Observable/Observable.create";
import Observable_decodeWithCharset from "./__internal__/Observable/Observable.decodeWithCharset";
import Observable_defer from "./__internal__/Observable/Observable.defer";
import Observable_distinctUntilChanged from "./__internal__/Observable/Observable.distinctUntilChanged";
import Observable_empty from "./__internal__/Observable/Observable.empty";
import Observable_everySatisfy from "./__internal__/Observable/Observable.everySatisfy";
import Observable_forEach from "./__internal__/Observable/Observable.forEach";
import Observable_forkCombineLatest from "./__internal__/Observable/Observable.forkCombineLatest";
import Observable_forkMerge from "./__internal__/Observable/Observable.forkMerge";
import Observable_forkZipLatest from "./__internal__/Observable/Observable.forkZipLatest";
import Observable_fromArray from "./__internal__/Observable/Observable.fromArray";
import Observable_generate from "./__internal__/Observable/Observable.generate";
import Observable_isEnumerable from "./__internal__/Observable/Observable.isEnumerable";
import Observable_isRunnable from "./__internal__/Observable/Observable.isRunnable";
import Observable_keep from "./__internal__/Observable/Observable.keep";
import Observable_map from "./__internal__/Observable/Observable.map";
import Observable_mapAsync from "./__internal__/Observable/Observable.mapAsync";
import Observable_merge from "./__internal__/Observable/Observable.merge";
import Observable_mergeAll from "./__internal__/Observable/Observable.mergeAll";
import Observable_multicast from "./__internal__/Observable/Observable.multicast";
import Observable_onSubscribe from "./__internal__/Observable/Observable.onSubscribe";
import Observable_pairwise from "./__internal__/Observable/Observable.pairwise";
import Observable_reduce from "./__internal__/Observable/Observable.reduce";
import Observable_repeat from "./__internal__/Observable/Observable.repeat";
import Observable_retry from "./__internal__/Observable/Observable.retry";
import Observable_scan from "./__internal__/Observable/Observable.scan";
import Observable_scanAsync from "./__internal__/Observable/Observable.scanAsync";
import Observable_share from "./__internal__/Observable/Observable.share";
import Observable_skipFirst from "./__internal__/Observable/Observable.skipFirst";
import Observable_someSatisfy from "./__internal__/Observable/Observable.someSatisfy";
import Observable_subscribe from "./__internal__/Observable/Observable.subscribe";
import Observable_subscribeOn from "./__internal__/Observable/Observable.subscribeOn";
import Observable_switchAll from "./__internal__/Observable/Observable.switchAll";
import Observable_takeFirst from "./__internal__/Observable/Observable.takeFirst";
import Observable_takeLast from "./__internal__/Observable/Observable.takeLast";
import Observable_takeUntil from "./__internal__/Observable/Observable.takeUntil";
import Observable_takeWhile from "./__internal__/Observable/Observable.takeWhile";
import Observable_throttle from "./__internal__/Observable/Observable.throttle";
import Observable_throwIfEmpty from "./__internal__/Observable/Observable.throwIfEmpty";
import Observable_timeout from "./__internal__/Observable/Observable.timeout";
import Observable_toEnumerable from "./__internal__/Observable/Observable.toEnumerable";
import Observable_toFlowable from "./__internal__/Observable/Observable.toFlowable";
import Observable_toPromise from "./__internal__/Observable/Observable.toPromise";
import Observable_toReadonlyArray from "./__internal__/Observable/Observable.toReadonlyArray";
import Observable_toRunnable from "./__internal__/Observable/Observable.toRunnable";
import Observable_withLatestFrom from "./__internal__/Observable/Observable.withLatestFrom";
import Observable_zip from "./__internal__/Observable/Observable.zip";
import Observable_zipLatest from "./__internal__/Observable/Observable.zipLatest";
import Observable_zipWithLatestFrom from "./__internal__/Observable/Observable.zipWithLatestFrom";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = Observable_buffer;

export const catchError: CatchError<ObservableLike>["catchError"] =
  Observable_catchError;

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
export const combineLatest: Zip<ObservableLike>["zip"] =
  Observable_combineLatest;

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export const concat: Concat<ObservableLike>["concat"] = Observable_concat;

/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
export const concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = Observable_concatAll;

export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable_create;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: Defer<ObservableLike>["defer"] = Observable_defer;

export const distinctUntilChanged = Observable_distinctUntilChanged;

interface EmptyObservable {
  <T>(): EnumerableObservableLike<T>;
  <T>(options: { delay: number }): RunnableObservableLike<T>;
}
export const empty: EmptyObservable = Observable_empty as EmptyObservable;

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  Observable_everySatisfy;

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
export const exhaust: ConcatAll<ObservableLike>["concatAll"] = <T>() =>
  mergeAll<T>({
    maxBufferSize: 1,
    maxConcurrency: 1,
  });

export const forEach = Observable_forEach;

export const forkCombineLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable_forkCombineLatest;

export const forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  Observable_forkMerge;

export const forkZipLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable_forkZipLatest;

export const fromArray = Observable_fromArray;

export const fromDisposable = Disposable_toObservable;

export const fromFlowable =
  Flowable_toObservable as FromFlowable<ObservableLike>["fromFlowable"];

export const fromPromise: FromPromise<ObservableLike>["fromPromise"] =
  Promiseable_toObservable;

interface GenerateObservable {
  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumerableObservableLike<T>;

  <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options: {
      readonly delay: number;
      readonly delayStart?: boolean;
    },
  ): RunnableObservableLike<T>;
}
export const generate: GenerateObservable =
  Observable_generate as GenerateObservable;

export const isEnumerable: (
  obs: ObservableLike,
) => obs is EnumerableObservableLike = Observable_isEnumerable;

export const isRunnable: (
  obs: ObservableLike,
) => obs is RunnableObservableLike = Observable_isRunnable;

export const keep: Keep<ObservableLike>["keep"] = Observable_keep;

export const map: Map<ObservableLike>["map"] = Observable_map;

export const mapAsync = Observable_mapAsync;

export const merge: Concat<ObservableLike>["concat"] = Observable_merge;

export const mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = Observable_mergeAll;

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast = Observable_multicast;

export const never: Never<EnumerableObservableLike>["never"] =
  EnumerableObservable_never;

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = Observable_onSubscribe;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  Observable_pairwise;

export const reduce: Reduce<ObservableLike>["reduce"] = Observable_reduce;

interface RepeatOperator {
  /**
   * Returns an `ObservableLike` that applies the predicate function each time the source
   * completes to determine if the subscription should be renewed.
   *
   * @param predicate The predicate function to apply.
   */
  <T>(predicate: Predicate<number>): ContainerOperator<ObservableLike, T, T>;

  /**
   * Returns an `ObservableLike` that repeats the source count times.
   * @param count
   */
  <T>(count: number): ContainerOperator<ObservableLike, T, T>;

  /**
   * Returns an `ObservableLike` that continually repeats the source.
   */
  <T>(): ContainerOperator<ObservableLike, T, T>;
}
export const repeat: RepeatOperator = Observable_repeat;

interface Retry {
  /**
   * Returns an `ObservableLike` that mirrors the source, re-subscribing
   * if the source completes with an error.
   */
  <T>(): ContainerOperator<ObservableLike, T, T>;

  /**
   * Returns an `ObservableLike` that mirrors the source, resubscrbing
   * if the source completes with an error which satisfies the predicate function.
   *
   * @param predicate
   */
  <T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
}
export const retry: Retry = Observable_retry;

export const scan = Observable_scan;

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"] =
  Observable_scanAsync;

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = Observable_share;

export const skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  Observable_someSatisfy;

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  Observable_switchAll;

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = Observable_subscribe;

export const subscribeOn = Observable_subscribeOn;

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  Observable_takeLast;

export const takeUntil = Observable_takeUntil;

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  Observable_takeWhile;

interface Throttle {
  /**
   * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
   *
   * @param duration Function function that is used to determine the silence duration in between emitted values.
   * @param mode The throttle mode.
   */
  <T>(
    duration: Function1<T, ObservableLike>,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): ContainerOperator<ObservableLike, T, T>;

  /**
   * Returns an `ObservableLike` which emits a value from the source,
   * then ignores subsequent source values for `duration` milliseconds.
   *
   * @param duration Time to wait before emitting another value after
   * emitting the last value, measured in milliseconds.
   * @param mode The throttle mode.
   */
  <T>(
    duration: number,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): ContainerOperator<ObservableLike, T, T>;
}
export const throttle: Throttle = Observable_throttle;

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Timeout {
  /**
   * Returns an `ObservableLike` that completes with an error if the source
   * does not emit a value in given time span.
   *
   * @param duration Time in ms within which the source must emit values.
   */
  <T>(duration: number): ContainerOperator<ObservableLike, T, T>;

  /**
   *
   * @param duration
   */
  <T>(duration: ObservableLike<unknown>): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
}
export const timeout: Timeout = Observable_timeout;

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  Observable_toEnumerable;

export const toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  Observable_toFlowable;

export const toPromise: ToPromiseable<
  ObservableLike,
  SchedulerLike
>["toPromise"] = Observable_toPromise;

export const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =
  Observable_toReadonlyArray;

export const toRunnable = Observable_toRunnable;

export const withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = Observable_withLatestFrom;

export const zip: Zip<ObservableLike>["zip"] = Observable_zip;

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
export const zipLatest: Zip<ObservableLike>["zip"] = Observable_zipLatest;

export const zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = Observable_zipWithLatestFrom;

/** @ignore */
const Observable = {
  buffer,
  catchError,
  combineLatest,
  concat,
  concatAll,
  decodeWithCharset,
  defer,
  distinctUntilChanged,
  empty,
  everySatisfy,
  forEach,
  fromArray,
  fromFlowable,
  fromPromise,
  generate,
  keep,
  map,
  never,
  onSubscribe,
  pairwise,
  reduce,
  repeat,
  retry,
  scan,
  scanAsync,
  share,
  skipFirst,
  someSatisfy,
  subscribe,
  takeFirst,
  takeLast,
  takeUntil,
  takeWhile,
  throttle,
  throwIfEmpty,
  timeout,
  toEnumerable,
  toFlowable,
  toPromise,
  toReadonlyArray,
  toRunnable,
  withLatestFrom,
  zip,
  zipLatest,
  zipWithLatestFrom,
};

export default Observable;
