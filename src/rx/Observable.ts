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
import Promiseable$toObservable from "../containers/__internal__/Promiseable/Promiseable.toObservable";
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
import Flowable$toObservable from "../streaming/__internal__/Flowable/Flowable.toObservable";
import { DisposableLike, DisposableOrTeardown } from "../util";
import Disposable$toObservable from "../util/__internal__/Disposable/Disposable.toObservable";
import EnumerableObservable$never from "./__internal__/EnumerableObservable/EnumerableObservable.never";
import Observable$buffer from "./__internal__/Observable/Observable.buffer";
import Observable$catchError from "./__internal__/Observable/Observable.catchError";
import Observable$combineLatest from "./__internal__/Observable/Observable.combineLatest";
import Observable$concat from "./__internal__/Observable/Observable.concat";
import Observable$concatAll from "./__internal__/Observable/Observable.concatAll";
import Observable$create from "./__internal__/Observable/Observable.create";
import Observable$decodeWithCharset from "./__internal__/Observable/Observable.decodeWithCharset";
import Observable$defer from "./__internal__/Observable/Observable.defer";
import Observable$distinctUntilChanged from "./__internal__/Observable/Observable.distinctUntilChanged";
import Observable$empty from "./__internal__/Observable/Observable.empty";
import Observable$everySatisfy from "./__internal__/Observable/Observable.everySatisfy";
import Observable$forEach from "./__internal__/Observable/Observable.forEach";
import Observable$forkCombineLatest from "./__internal__/Observable/Observable.forkCombineLatest";
import Observable$forkMerge from "./__internal__/Observable/Observable.forkMerge";
import Observable$forkZipLatest from "./__internal__/Observable/Observable.forkZipLatest";
import Observable$fromArray from "./__internal__/Observable/Observable.fromArray";
import Observable$generate from "./__internal__/Observable/Observable.generate";
import Observable$isEnumerable from "./__internal__/Observable/Observable.isEnumerable";
import Observable$isRunnable from "./__internal__/Observable/Observable.isRunnable";
import Observable$keep from "./__internal__/Observable/Observable.keep";
import Observable$map from "./__internal__/Observable/Observable.map";
import Observable$mapAsync from "./__internal__/Observable/Observable.mapAsync";
import Observable$merge from "./__internal__/Observable/Observable.merge";
import Observable$mergeAll from "./__internal__/Observable/Observable.mergeAll";
import Observable$multicast from "./__internal__/Observable/Observable.multicast";
import Observable$onSubscribe from "./__internal__/Observable/Observable.onSubscribe";
import Observable$pairwise from "./__internal__/Observable/Observable.pairwise";
import Observable$reduce from "./__internal__/Observable/Observable.reduce";
import Observable$repeat from "./__internal__/Observable/Observable.repeat";
import Observable$retry from "./__internal__/Observable/Observable.retry";
import Observable$scan from "./__internal__/Observable/Observable.scan";
import Observable$scanAsync from "./__internal__/Observable/Observable.scanAsync";
import Observable$share from "./__internal__/Observable/Observable.share";
import Observable$skipFirst from "./__internal__/Observable/Observable.skipFirst";
import Observable$someSatisfy from "./__internal__/Observable/Observable.someSatisfy";
import Observable$subscribe from "./__internal__/Observable/Observable.subscribe";
import Observable$subscribeOn from "./__internal__/Observable/Observable.subscribeOn";
import Observable$switchAll from "./__internal__/Observable/Observable.switchAll";
import Observable$takeFirst from "./__internal__/Observable/Observable.takeFirst";
import Observable$takeLast from "./__internal__/Observable/Observable.takeLast";
import Observable$takeUntil from "./__internal__/Observable/Observable.takeUntil";
import Observable$takeWhile from "./__internal__/Observable/Observable.takeWhile";
import Observable$throttle from "./__internal__/Observable/Observable.throttle";
import Observable$throwIfEmpty from "./__internal__/Observable/Observable.throwIfEmpty";
import Observable$timeout from "./__internal__/Observable/Observable.timeout";
import Observable$toEnumerable from "./__internal__/Observable/Observable.toEnumerable";
import Observable$toFlowable from "./__internal__/Observable/Observable.toFlowable";
import Observable$toPromise from "./__internal__/Observable/Observable.toPromise";
import Observable$toReadonlyArray from "./__internal__/Observable/Observable.toReadonlyArray";
import Observable$toRunnable from "./__internal__/Observable/Observable.toRunnable";
import Observable$withLatestFrom from "./__internal__/Observable/Observable.withLatestFrom";
import Observable$zip from "./__internal__/Observable/Observable.zip";
import Observable$zipLatest from "./__internal__/Observable/Observable.zipLatest";
import Observable$zipWithLatestFrom from "./__internal__/Observable/Observable.zipWithLatestFrom";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = Observable$buffer;

export const catchError: CatchError<ObservableLike>["catchError"] =
  Observable$catchError;

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
export const combineLatest: Zip<ObservableLike>["zip"] =
  Observable$combineLatest;

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export const concat: Concat<ObservableLike>["concat"] = Observable$concat;

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
>["concatAll"] = Observable$concatAll;

export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  Observable$create;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  Observable$decodeWithCharset;

export const defer: Defer<ObservableLike>["defer"] = Observable$defer;

export const distinctUntilChanged = Observable$distinctUntilChanged;

interface EmptyObservable {
  <T>(): EnumerableObservableLike<T>;
  <T>(options: { delay: number }): RunnableObservableLike<T>;
}
export const empty: EmptyObservable = Observable$empty as EmptyObservable;

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  Observable$everySatisfy;

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

export const forEach = Observable$forEach;

export const forkCombineLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable$forkCombineLatest;

export const forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  Observable$forkMerge;

export const forkZipLatest: ForkZip<ObservableLike>["forkZip"] =
  Observable$forkZipLatest;

export const fromArray = Observable$fromArray;

export const fromDisposable = Disposable$toObservable;

export const fromFlowable =
  Flowable$toObservable as FromFlowable<ObservableLike>["fromFlowable"];

export const fromPromise: FromPromise<ObservableLike>["fromPromise"] =
  Promiseable$toObservable;

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
  Observable$generate as GenerateObservable;

export const isEnumerable: (
  obs: ObservableLike,
) => obs is EnumerableObservableLike = Observable$isEnumerable;

export const isRunnable: (
  obs: ObservableLike,
) => obs is RunnableObservableLike = Observable$isRunnable;

export const keep: Keep<ObservableLike>["keep"] = Observable$keep;

export const map: Map<ObservableLike>["map"] = Observable$map;

export const mapAsync = Observable$mapAsync;

export const merge: Concat<ObservableLike>["concat"] = Observable$merge;

export const mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = Observable$mergeAll;

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast = Observable$multicast;

export const never: Never<EnumerableObservableLike>["never"] =
  EnumerableObservable$never;

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = Observable$onSubscribe;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  Observable$pairwise;

export const reduce: Reduce<ObservableLike>["reduce"] = Observable$reduce;

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
export const repeat: RepeatOperator = Observable$repeat;

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
export const retry: Retry = Observable$retry;

export const scan = Observable$scan;

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"] =
  Observable$scanAsync;

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = Observable$share;

export const skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  Observable$skipFirst;

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  Observable$someSatisfy;

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  Observable$switchAll;

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = Observable$subscribe;

export const subscribeOn = Observable$subscribeOn;

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  Observable$takeFirst;

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  Observable$takeLast;

export const takeUntil = Observable$takeUntil;

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  Observable$takeWhile;

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
export const throttle: Throttle = Observable$throttle;

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  Observable$throwIfEmpty;

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
export const timeout: Timeout = Observable$timeout;

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  Observable$toEnumerable;

export const toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  Observable$toFlowable;

export const toPromise: ToPromiseable<
  ObservableLike,
  SchedulerLike
>["toPromise"] = Observable$toPromise;

export const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =
  Observable$toReadonlyArray;

export const toRunnable = Observable$toRunnable;

export const withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = Observable$withLatestFrom;

export const zip: Zip<ObservableLike>["zip"] = Observable$zip;

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
export const zipLatest: Zip<ObservableLike>["zip"] = Observable$zipLatest;

export const zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = Observable$zipWithLatestFrom;
