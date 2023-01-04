import { MAX_SAFE_INTEGER } from "../__internal__/constants";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins";
import {
  catchErrorObservable,
  mergeAllObservable,
  scanAsyncObservable,
  switchAllObservable,
} from "../__internal__/rx/ObservableLike.higher-order";
import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  ContainerOperator,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EverySatisfy,
  ForEach,
  ForkConcat,
  ForkZip,
  FromPromise,
  Generate,
  Keep,
  Map,
  Never,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
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
import { concatMap } from "../containers/ContainerLike";
import { map as mapArray } from "../containers/ReadonlyArrayLike";
import PromiseableLike__toObservable from "../containers/__internal__/PromiseableLike/PromiseableLike.toObservable";
import {
  Factory,
  Function1,
  Function2,
  Predicate,
  SideEffect1,
  Updater,
  getLength,
  none,
  pipe,
} from "../functions";
import { ToEnumerable } from "../ix";
import {
  EnumerableObservableLike,
  ObservableLike,
  ObserverLike,
  RunnableObservableLike,
  ScanAsync,
  SinkLike_notify,
} from "../rx";
import { getScheduler } from "../rx/ObserverLike";
import { notify, sourceFrom } from "../rx/SinkLike";
import { SchedulerLike } from "../scheduling";
import { ToFlowable } from "../streaming";
import { DisposableLike, DisposableOrTeardown } from "../util";
import { addTo, dispose, onComplete } from "../util/DisposableLike";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
import EnumerableObservableLike__create from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import EnumerableObservableLike__never from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.never";
import ObservableLike__allAreEnumerable from "./__internal__/ObservableLike/ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./__internal__/ObservableLike/ObservableLike.allAreRunnable";
import ObservableLike__buffer from "./__internal__/ObservableLike/ObservableLike.buffer";
import ObservableLike__concat from "./__internal__/ObservableLike/ObservableLike.concat";
import ObservableLike__create from "./__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__decodeWithCharset from "./__internal__/ObservableLike/ObservableLike.decodeWithCharset";
import ObservableLike__defer from "./__internal__/ObservableLike/ObservableLike.defer";
import ObservableLike__distinctUntilChanged from "./__internal__/ObservableLike/ObservableLike.distinctUntilChanged";
import ObservableLike__empty from "./__internal__/ObservableLike/ObservableLike.empty";
import ObservableLike__everySatisfy from "./__internal__/ObservableLike/ObservableLike.everySatisfy";
import ObservableLike__forEach from "./__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__forkMerge from "./__internal__/ObservableLike/ObservableLike.forkMerge";
import ObservableLike__generate from "./__internal__/ObservableLike/ObservableLike.generate";
import ObservableLike__isEnumerable from "./__internal__/ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./__internal__/ObservableLike/ObservableLike.isRunnable";
import ObservableLike__keep from "./__internal__/ObservableLike/ObservableLike.keep";
import ObservableLike__map from "./__internal__/ObservableLike/ObservableLike.map";
import ObservableLike__mapT from "./__internal__/ObservableLike/ObservableLike.mapT";
import ObservableLike__merge from "./__internal__/ObservableLike/ObservableLike.merge";
import ObservableLike__multicast from "./__internal__/ObservableLike/ObservableLike.multicast";
import ObservableLike__onSubscribe from "./__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__pairwise from "./__internal__/ObservableLike/ObservableLike.pairwise";
import ObservableLike__reduce from "./__internal__/ObservableLike/ObservableLike.reduce";
import ObservableLike__repeat from "./__internal__/ObservableLike/ObservableLike.repeat";
import ObservableLike__retry from "./__internal__/ObservableLike/ObservableLike.retry";
import ObservableLike__scan from "./__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__share from "./__internal__/ObservableLike/ObservableLike.share";
import ObservableLike__skipFirst from "./__internal__/ObservableLike/ObservableLike.skipFirst";
import ObservableLike__someSatisfy from "./__internal__/ObservableLike/ObservableLike.someSatisfy";
import ObservableLike__subscribe from "./__internal__/ObservableLike/ObservableLike.subscribe";
import ObservableLike__subscribeOn from "./__internal__/ObservableLike/ObservableLike.subscribeOn";
import ObservableLike__takeFirst from "./__internal__/ObservableLike/ObservableLike.takeFirst";
import ObservableLike__takeLast from "./__internal__/ObservableLike/ObservableLike.takeLast";
import ObservableLike__takeUntil from "./__internal__/ObservableLike/ObservableLike.takeUntil";
import ObservableLike__takeWhile from "./__internal__/ObservableLike/ObservableLike.takeWhile";
import ObservableLike__throttle from "./__internal__/ObservableLike/ObservableLike.throttle";
import ObservableLike__throwIfEmpty from "./__internal__/ObservableLike/ObservableLike.throwIfEmpty";
import ObservableLike__timeout from "./__internal__/ObservableLike/ObservableLike.timeout";
import ObservableLike__toEnumerable from "./__internal__/ObservableLike/ObservableLike.toEnumerable";
import ObservableLike__toFlowable from "./__internal__/ObservableLike/ObservableLike.toFlowable";
import ObservableLike__toPromise from "./__internal__/ObservableLike/ObservableLike.toPromise";
import ObservableLike__toReadonlyArray from "./__internal__/ObservableLike/ObservableLike.toReadonlyArray";
import ObservableLike__withLatestFrom from "./__internal__/ObservableLike/ObservableLike.withLatestFrom";
import ObservableLike__zip from "./__internal__/ObservableLike/ObservableLike.zip";
import ObservableLike__zipWithLatestFrom from "./__internal__/ObservableLike/ObservableLike.zipWithLatestFrom";
import ObserverLike__mixin from "./__internal__/ObserverLike/ObserverLike.mixin";
import RunnableObservableLike__create from "./__internal__/RunnableObservableLike/RunnableObservableLike.create";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> =
  ObservableLike__buffer;
export const bufferT: Buffer<ObservableLike> = {
  buffer,
};

export const catchError: CatchError<ObservableLike>["catchError"] =
  catchErrorObservable;

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
export const combineLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> =>
  latest(observables, LatestMode.Combine);
export const combineLatestT: Zip<ObservableLike> = {
  zip: combineLatest,
};

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export const concat: Concat<ObservableLike>["concat"] = ObservableLike__concat;
export const concatT: Concat<ObservableLike> = {
  concat,
};

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
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export const concatAllT: ConcatAll<
  ObservableLike,
  { readonly maxBufferSize: number }
> = {
  concatAll,
};

export const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T> =
  ObservableLike__create;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  ObservableLike__decodeWithCharset;
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

export const defer: Defer<ObservableLike>["defer"] = ObservableLike__defer;
export const deferT: Defer<ObservableLike> = {
  defer,
};

export const distinctUntilChanged = ObservableLike__distinctUntilChanged;
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface EmptyObservable {
  <T>(): EnumerableObservableLike<T>;
  <T>(options: { delay: number }): RunnableObservableLike<T>;
}
export const empty: EmptyObservable = ObservableLike__empty as EmptyObservable;
export const emptyT: Empty<ObservableLike, { delay: number }> = {
  empty,
};

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  ObservableLike__everySatisfy;
export const everySatisfyT: EverySatisfy<ObservableLike> = { everySatisfy };

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
export const exhaustT: ConcatAll<ObservableLike> = { concatAll: exhaust };

export const forEach = ObservableLike__forEach;
export const forEachT: ForEach<ObservableLike> = { forEach };

export const forkCombineLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly unknown[]> =>
  (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        mapArray(op => pipe(obs, op)),
      ),
      LatestMode.Combine,
    )) as ForkZip<ObservableLike>["forkZip"];

export const forkMerge: ForkConcat<ObservableLike>["forkConcat"] =
  ObservableLike__forkMerge;

export const forkZipLatest: ForkZip<ObservableLike>["forkZip"] = (<T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly any[]> =>
  (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        mapArray(op => pipe(obs, op)),
      ),
      LatestMode.Zip,
    )) as ForkZip<ObservableLike>["forkZip"];

export const fromPromise: FromPromise<ObservableLike>["fromPromise"] =
  PromiseableLike__toObservable;
export const fromPromiseT: FromPromise<ObservableLike> = { fromPromise };

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
  ObservableLike__generate as GenerateObservable;

export const generateT: Generate<
  ObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
> = { generate };

export const isEnumerable: (
  obs: ObservableLike,
) => obs is EnumerableObservableLike = ObservableLike__isEnumerable;

export const isRunnable: (
  obs: ObservableLike,
) => obs is RunnableObservableLike = ObservableLike__isRunnable;

export const keep: Keep<ObservableLike>["keep"] = ObservableLike__keep;
export const keepT: Keep<ObservableLike> = { keep };

const enum LatestMode {
  Combine = 1,
  Zip = 2,
}
const latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = ObserverLike__mixin();
  type LatestCtx = {
    delegate: ObserverLike<readonly unknown[]>;
    mode: LatestMode;
    completedCount: number;
    observers: TProperties[];
  };

  const add = (instance: LatestCtx, observer: TProperties): void => {
    instance.observers.push(observer);
  };

  const onNotify = (instance: LatestCtx) => {
    const { mode, observers } = instance;

    const isReady = observers.every(x => x.ready);

    if (isReady) {
      const result = pipe(
        observers,
        mapArray(observer => observer.latest),
      );
      pipe(instance.delegate, notify(result));

      if (mode === LatestMode.Zip) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
      }
    }
  };

  const onCompleted = (instance: LatestCtx) => {
    instance.completedCount++;

    if (instance.completedCount === getLength(instance.observers)) {
      pipe(instance.delegate, dispose());
    }
  };

  type TProperties = {
    ready: boolean;
    latest: unknown;
    readonly ctx: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, DisposableLike__mixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ): ObserverLike & TProperties {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, scheduler);

        instance.ctx = ctx;

        return instance;
      },
      props<TProperties>({
        ready: false,
        latest: none,
        ctx: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: unknown) {
          const { ctx } = this;
          this.latest = next;
          this.ready = true;

          onNotify(ctx);
        },
      },
    ),
  );

  return (
    observables: readonly ObservableLike<any>[],
    mode: LatestMode,
  ): ObservableLike<readonly unknown[]> => {
    const onSink = (delegate: ObserverLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        completedCount: 0,
        observers: [],
        delegate,
        mode,
      };

      const onCompleteCb = () => {
        onCompleted(ctx);
      };

      const scheduler = getScheduler(delegate);

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(scheduler, ctx),
          addTo(delegate),
          onComplete(onCompleteCb),
          sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const isEnumerable = ObservableLike__allAreEnumerable(observables);
    const isRunnable = ObservableLike__allAreRunnable(observables);

    return isEnumerable
      ? EnumerableObservableLike__create(onSink)
      : isRunnable
      ? RunnableObservableLike__create(onSink)
      : ObservableLike__create(onSink);
  };
})();

export const map: Map<ObservableLike>["map"] = ObservableLike__map;
export const mapT: Map<ObservableLike> = ObservableLike__mapT;

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => pipe(a, f, fromPromise()));

export const merge: Concat<ObservableLike>["concat"] = ObservableLike__merge;
export const mergeT: Concat<ObservableLike> = { concat: merge };

export const mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = mergeAllObservable;
export const mergeAllT: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
> = { concatAll: mergeAll };

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast = ObservableLike__multicast;

export const never: Never<EnumerableObservableLike>["never"] =
  EnumerableObservableLike__never;
export const neverT: Never<ObservableLike> = { never };

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = ObservableLike__onSubscribe;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  ObservableLike__pairwise;
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

export const reduce: Reduce<ObservableLike>["reduce"] = ObservableLike__reduce;
export const reduceT: Reduce<ObservableLike> = { reduce };

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
export const repeat: RepeatOperator = ObservableLike__repeat;
export const repeatT: Repeat<ObservableLike> = {
  repeat,
};

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
export const retry: Retry = ObservableLike__retry;

export const scan = ObservableLike__scan;
export const scanT: Scan<ObservableLike> = { scan };

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"] =
  scanAsyncObservable;
export const scanAsyncT: ScanAsync<ObservableLike, ObservableLike> = {
  scanAsync,
};

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share = ObservableLike__share;

export const skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  ObservableLike__skipFirst;
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  ObservableLike__someSatisfy;
export const someSatisfyT: SomeSatisfy<ObservableLike> = { someSatisfy };

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  switchAllObservable;
export const switchAllT: ConcatAll<ObservableLike> = {
  concatAll: switchAll,
};

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = ObservableLike__subscribe;

export const subscribeOn = ObservableLike__subscribeOn;

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  ObservableLike__takeFirst;
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  ObservableLike__takeLast;
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

export const takeUntil = ObservableLike__takeUntil;

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  ObservableLike__takeWhile;
export const takeWhileT: TakeWhile<ObservableLike> = { takeWhile };

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
export const throttle: Throttle = ObservableLike__throttle;

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  ObservableLike__throwIfEmpty;
export const throwIfEmptyT: ThrowIfEmpty<ObservableLike> = {
  throwIfEmpty,
};

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
export const timeout: Timeout = ObservableLike__timeout;

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  ObservableLike__toEnumerable;
export const toEnumerableT: ToEnumerable<ObservableLike> = { toEnumerable };

export const toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  ObservableLike__toFlowable;
export const toFlowableT: ToFlowable<ObservableLike> = { toFlowable };

export const toPromise: ToPromiseable<
  ObservableLike,
  SchedulerLike
>["toPromise"] = ObservableLike__toPromise;
export const toPromiseT: ToPromiseable<ObservableLike, SchedulerLike> = {
  toPromise,
};

export const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =
  ObservableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<ObservableLike> = {
  toReadonlyArray,
};

export const withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = ObservableLike__withLatestFrom;

export const zip: Zip<ObservableLike>["zip"] = ObservableLike__zip;
export const zipT: Zip<ObservableLike> = {
  zip: zip,
};

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
export const zipLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => latest(observables, LatestMode.Zip);
export const zipLatestT: Zip<ObservableLike> = {
  zip: zipLatest,
};

export const zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> =
  ObservableLike__zipWithLatestFrom;
