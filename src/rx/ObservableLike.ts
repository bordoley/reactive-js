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
import { hasDelay } from "../__internal__/scheduling/SchedulerLike.options";
import {
  DisposableRefLike,
  createDisposableRef,
  disposableRefMixin,
} from "../__internal__/util/DisposableRefLike";
import {
  MutableRefLike,
  MutableRefLike_current,
  getCurrentRef,
  setCurrentRef,
} from "../__internal__/util/MutableRefLike";
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
import { concatMap, keepType, throws } from "../containers/ContainerLike";
import {
  toObservable as arrayToObservable,
  every,
  forEach as forEachArray,
  keepT as keepArrayT,
  map as mapArray,
  some,
} from "../containers/ReadonlyArrayLike";
import PromiseableLike__toObservable from "../containers/__internal__/PromiseableLike/PromiseableLike.toObservable";
import {
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  SideEffect,
  SideEffect1,
  Updater,
  compose,
  getLength,
  getOrRaise,
  isNone,
  isNumber,
  isSome,
  isTrue,
  newInstance,
  none,
  partial,
  pipe,
  pipeLazy,
  returns,
  unsafeCast,
} from "../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike,
  SourceLike_move,
  ToEnumerable,
} from "../ix";
import {
  toObservable as enumerableToObservable,
  zip as enumerableZip,
  enumerate,
} from "../ix/EnumerableLike";
import { getCurrent, hasCurrent, move } from "../ix/EnumeratorLike";
import EnumerableLike__create from "../ix/__internal__/EnumerableLike/EnumerableLike.create";
import EnumerableLike__empty from "../ix/__internal__/EnumerableLike/EnumerableLike.empty";
import MutableEnumeratorLike__mixin from "../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix/__internal__/ix.internal";
import {
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_dispatcher,
  RunnableObservableLike,
  ScanAsync,
  SinkLike,
  SinkLike_notify,
} from "../rx";
import { getScheduler, schedule } from "../rx/ObserverLike";
import { notify, notifySink, sourceFrom } from "../rx/SinkLike";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { run, yield_ } from "../scheduling/ContinuationLike";
import { dispatchTo } from "../scheduling/DispatcherLike";
import {
  isInContinuation,
  toPausableScheduler,
} from "../scheduling/SchedulerLike";
import { FlowMode, ToFlowable } from "../streaming";
import FlowableLike__createLifted from "../streaming/__internal__/FlowableLike/FlowableLike.createLifted";
import { DisposableLike, DisposableOrTeardown, Exception } from "../util";
import {
  add,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  toObservable as disposableToObservable,
  dispose,
  disposed,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getObserverCount } from "./MulticastObservableLike";
import { sinkInto } from "./ReactiveContainerLike";
import EnumerableObservableLike__create from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import EnumerableObservableLike__never from "./__internal__/EnumerableObservableLike/EnumerableObservableLike.never";
import EnumeratorSinkLike__create from "./__internal__/EnumeratorSinkLike/EnumeratorSinkLike.create";
import ObservableLike__allAreEnumerable from "./__internal__/ObservableLike/ObservableLike.allAreEnumerable";
import ObservableLike__allAreRunnable from "./__internal__/ObservableLike/ObservableLike.allAreRunnable";
import ObservableLike__buffer from "./__internal__/ObservableLike/ObservableLike.buffer";
import ObservableLike__concat from "./__internal__/ObservableLike/ObservableLike.concat";
import ObservableLike__create from "./__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__decodeWithCharset from "./__internal__/ObservableLike/ObservableLike.decodeWithCharset";
import ObservableLike__defer from "./__internal__/ObservableLike/ObservableLike.defer";
import ObservableLike__distinctUntilChanged from "./__internal__/ObservableLike/ObservableLike.distinctUntilChanged";
import ObservableLike__everySatisfy from "./__internal__/ObservableLike/ObservableLike.everySatisfy";
import ObservableLike__forEach from "./__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__isEnumerable from "./__internal__/ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./__internal__/ObservableLike/ObservableLike.isRunnable";
import ObservableLike__keep from "./__internal__/ObservableLike/ObservableLike.keep";
import ObservableLike__lift from "./__internal__/ObservableLike/ObservableLike.lift";
import ObservableLike__map from "./__internal__/ObservableLike/ObservableLike.map";
import ObservableLike__merge from "./__internal__/ObservableLike/ObservableLike.merge";
import ObservableLike__mergeObservables from "./__internal__/ObservableLike/ObservableLike.mergeObservables";
import ObservableLike__multicast from "./__internal__/ObservableLike/ObservableLike.multicast";
import ObservableLike__onSubscribe from "./__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__pairwise from "./__internal__/ObservableLike/ObservableLike.pairwise";
import ObservableLike__reduce from "./__internal__/ObservableLike/ObservableLike.reduce";
import ObservableLike__scan from "./__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__skipFirst from "./__internal__/ObservableLike/ObservableLike.skipFirst";
import ObservableLike__someSatisfy from "./__internal__/ObservableLike/ObservableLike.someSatisfy";
import ObservableLike__subscribe from "./__internal__/ObservableLike/ObservableLike.subscribe";
import ObservableLike__takeFirst from "./__internal__/ObservableLike/ObservableLike.takeFirst";
import ObservableLike__takeLast from "./__internal__/ObservableLike/ObservableLike.takeLast";
import ObservableLike__takeWhile from "./__internal__/ObservableLike/ObservableLike.takeWhile";
import ObservableLike__throwIfEmpty from "./__internal__/ObservableLike/ObservableLike.throwIfEmpty";
import ObservableLike__toReadonlyArray from "./__internal__/ObservableLike/ObservableLike.toReadonlyArray";
import ObservableLike__zipWithLatestFrom from "./__internal__/ObservableLike/ObservableLike.zipWithLatestFrom";
import ObserverLike__createWithDelegate from "./__internal__/ObserverLike/ObserverLike.createWithDelegate";
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
export const empty: EmptyObservable = (<T>(options?: { delay: number }) =>
  hasDelay(options)
    ? RunnableObservableLike__create<T>(observer => {
        pipe(observer, schedule(pipeLazy(observer, dispose()), options));
      })
    : EnumerableObservableLike__create<T>(sink => {
        pipe(sink, dispose());
      })) as EmptyObservable;

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
  <TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      mapArray(op => op(obs)),
      ObservableLike__mergeObservables,
    );

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

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export const generate: GenerateObservable = (<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        yield_(options);
      }
    };

    pipe(observer, schedule(continuation, delayStart ? options : none));
  };

  return hasDelay(options)
    ? RunnableObservableLike__create(onSink)
    : EnumerableObservableLike__create(onSink);
}) as GenerateObservable;

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
export const mapT: Map<ObservableLike> = { map };

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

const repeatImpl: <T>(
  shouldRepeat: (count: number, error?: Exception) => boolean,
) => ContainerOperator<ObservableLike, T, T> = /*@__PURE__*/ (() => {
  const createRepeatObserver = <T>(
    delegate: ObserverLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: Exception) => boolean,
  ) => {
    let count = 1;

    const doOnDispose = (e?: Exception) => {
      let shouldComplete = false;
      try {
        shouldComplete = !shouldRepeat(count, e);
      } catch (cause) {
        shouldComplete = true;
        e = { cause, parent: e } as Exception;
      }

      if (shouldComplete) {
        pipe(delegate, dispose(e));
      } else {
        count++;

        pipe(
          observable,
          forEach(notifySink(delegate)),
          subscribe(getScheduler(delegate)),
          addToIgnoringChildErrors(delegate),
          onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      ObserverLike__createWithDelegate(delegate),
      addToIgnoringChildErrors(delegate),
      onDisposed(doOnDispose),
    );
  };

  return <T>(shouldRepeat: (count: number, error?: Exception) => boolean) =>
    (observable: ObservableLike<T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(observable, ObservableLike__lift(true, true)(operator));
    };
})();

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
export const repeat: RepeatOperator = /*@__PURE__*/ (() => {
  const defaultRepeatPredicate = (_: number, e?: Exception): boolean =>
    isNone(e);

  return (predicate?: Predicate<number> | number) => {
    const repeatPredicate = isNone(predicate)
      ? defaultRepeatPredicate
      : isNumber(predicate)
      ? (count: number, e?: Exception) => isNone(e) && count < predicate
      : (count: number, e?: Exception) => isNone(e) && predicate(count);

    return repeatImpl(repeatPredicate);
  };
})();
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

export const retry: Retry = /*@__PURE__*/ (() => {
  const defaultRetryPredicate = (_: number, error?: Exception): boolean =>
    isSome(error);

  return (predicate?: (count: number, error: unknown) => boolean) => {
    const retryPredicate = isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Exception) =>
          isSome(error) && predicate(count, error.cause);

    return repeatImpl(retryPredicate);
  };
})();

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
export const share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return ObservableLike__create<T>(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(source, multicast(scheduler, options));
      }

      pipe(
        observer,
        sourceFrom(multicasted),
        onDisposed(() => {
          if (isSome(multicasted) && getObserverCount(multicasted) === 0) {
            pipe(multicasted, dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

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

export const subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    ObservableLike__create<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        forEach<T>(dispatchTo(dispatcher)),
        subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  ObservableLike__takeFirst;
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  ObservableLike__takeLast;
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

export const takeUntil = <T>(
  notifier: ObservableLike,
): Function1<ObservableLike<T>, ObservableLike<T>> => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      ObserverLike__createWithDelegate(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );
  return pipe(
    operator,
    ObservableLike__lift(isEnumerable(notifier), isRunnable(notifier)),
  );
};

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
export const throttle: Throttle = /*@__PURE__*/ (() => {
  type ThrottleMode = "first" | "last" | "interval";

  const createThrottleObserver: <T>(
    delegate: ObserverLike<T>,
    durationFunction: Function1<T, ObservableLike>,
    mode: ThrottleMode,
  ) => ObserverLike<T> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<T>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      value: Optional<T>;
      hasValue: boolean;
      readonly durationSubscription: DisposableRefLike;
      readonly durationFunction: Function1<T, ObservableLike>;
      readonly mode: ThrottleMode;
      readonly onNotify: SideEffect;
    };

    const setupDurationSubscription = (
      observer: ObserverLike<T> & TProperties,
      next: T,
    ) => {
      pipe(
        observer.durationSubscription,
        setCurrentRef(
          pipe(
            observer.durationFunction(next),
            forEach(observer.onNotify),
            subscribe(getScheduler(observer)),
          ),
        ),
      );
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function ThrottleObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          durationFunction: Function1<T, ObservableLike>,
          mode: ThrottleMode,
        ): ObserverLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.durationFunction = durationFunction;
          instance.mode = mode;

          instance.durationSubscription = pipe(
            createDisposableRef(disposed),
            addTo(delegate),
          );

          instance.onNotify = (_?: unknown) => {
            if (instance.hasValue) {
              const value = instance.value as T;
              instance.value = none;
              instance.hasValue = false;

              pipe(instance.delegate, notify(value));

              setupDurationSubscription(instance, value);
            }
          };

          pipe(
            instance,
            addTo(delegate),
            onComplete(() => {
              if (
                instance.mode !== "first" &&
                instance.hasValue &&
                !isDisposed(delegate)
              ) {
                pipe([instance.value], arrayToObservable(), sinkInto(delegate));
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          delegate: none,
          value: none,
          hasValue: false,
          durationSubscription: none,
          durationFunction: none,
          mode: "interval",
          onNotify: none,
        }),
        {
          [SinkLike_notify](this: ObserverLike<T> & TProperties, next: T) {
            this.value = next;
            this.hasValue = true;

            const durationSubscriptionDisposableIsDisposed = pipe(
              this.durationSubscription,
              getCurrentRef,
              isDisposed,
            );

            if (
              durationSubscriptionDisposableIsDisposed &&
              this.mode !== "last"
            ) {
              this.onNotify();
            } else if (durationSubscriptionDisposableIsDisposed) {
              setupDurationSubscription(this, next);
            }
          },
        },
      ),
    );
  })();

  return <T>(
    duration: Function1<T, ObservableLike> | number,
    options: { readonly mode?: ThrottleMode } = {},
  ) => {
    const { mode = "interval" } = options;
    const durationFunction = isNumber(duration)
      ? (_: T) =>
          pipe([none], arrayToObservable({ delay: duration, delayStart: true }))
      : duration;
    return pipe(
      createThrottleObserver,
      partial(durationFunction, mode),
      ObservableLike__lift(false, isNumber(duration)),
    );
  };
})();

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
export const timeout: Timeout = /*@__PURE__*/ (<T>() => {
  const timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");

  const typedDisposableRefMixin = disposableRefMixin();
  const typedObserverMixin = ObserverLike__mixin();

  type TProperties = {
    readonly delegate: ObserverLike<T>;
    readonly duration: ObservableLike<unknown>;
  };

  const setupDurationSubscription = (
    observer: MutableRefLike<DisposableLike> & TProperties,
  ) => {
    observer[MutableRefLike_current] = pipe(
      observer.duration,
      subscribe(getScheduler(observer.delegate)),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        DisposableLike__delegatingMixin,
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, disposed);

        instance.delegate = delegate;
        instance.duration = duration;

        setupDurationSubscription(instance);

        return instance;
      },
      props<TProperties>({
        delegate: none,
        duration: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & MutableRefLike<DisposableLike>,
          next: T,
        ) {
          pipe(this, getCurrentRef, dispose());
          pipe(this.delegate, notify(next));
        },
      },
    ),
  );

  const returnTimeoutError = returns(timeoutError);

  return (duration: number | ObservableLike<unknown>) => {
    const durationObs = isNumber(duration)
      ? throws(
          { fromArray: arrayToObservable, ...mapT },
          { delay: duration, delayStart: true },
        )(returnTimeoutError)
      : concat(
          duration,
          throws({ fromArray: arrayToObservable, ...mapT })(returnTimeoutError),
        );

    return pipe(
      createTimeoutObserver,
      partial(durationObs),
      ObservableLike__lift(false, isNumber(duration) || isRunnable(duration)),
    );
  };
})();

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
    const typedObserverMixin = ObserverLike__mixin<T>();

    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly continuations: ContinuationLike[];
    };

    type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

    const createEnumeratorScheduler = createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedMutableEnumeratorMixin),
        function EnumeratorScheduler(
          instance: Pick<
            SchedulerLike & SourceLike,
            | typeof SchedulerLike_now
            | typeof SchedulerLike_requestYield
            | typeof SchedulerLike_schedule
            | typeof SchedulerLike_shouldYield
            | typeof SourceLike_move
          > &
            Mutable<TEnumeratorSchedulerProperties>,
        ): EnumeratorScheduler {
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.continuations = [];

          return instance;
        },
        props<TEnumeratorSchedulerProperties>({
          [SchedulerLike_inContinuation]: false,
          continuations: none,
        }),
        {
          [SchedulerLike_now]: 0,
          get [SchedulerLike_shouldYield](): boolean {
            unsafeCast<TEnumeratorSchedulerProperties>(this);
            return isInContinuation(this);
          },
          [SchedulerLike_requestYield](): void {
            // No-Op: We yield whenever the continuation is running.
          },
          [SourceLike_move](
            this: TEnumeratorSchedulerProperties & MutableEnumeratorLike<T>,
          ) {
            if (!isDisposed(this)) {
              const { continuations } = this;

              const continuation = continuations.shift();
              if (isSome(continuation)) {
                this[SchedulerLike_inContinuation] = true;
                run(continuation);
                this[SchedulerLike_inContinuation] = false;
              } else {
                pipe(this, dispose());
              }
            }
          },
          [SchedulerLike_schedule](
            this: TEnumeratorSchedulerProperties & DisposableLike,
            continuation: ContinuationLike,
            _?: { readonly delay?: number },
          ): void {
            pipe(this, add(continuation));

            if (!isDisposed(continuation)) {
              this.continuations.push(continuation);
            }
          },
        },
      ),
    );

    type TEnumeratorObserverProperties = {
      readonly enumerator: EnumeratorScheduler;
    };

    const createEnumeratorObserver = createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function EnumeratorObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TEnumeratorObserverProperties>,
          enumerator: EnumeratorScheduler,
        ): ObserverLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, enumerator);

          instance.enumerator = enumerator;

          return instance;
        },
        props<TEnumeratorObserverProperties>({
          enumerator: none,
        }),
        {
          [SinkLike_notify](this: TEnumeratorObserverProperties, next: T) {
            this.enumerator[EnumeratorLike_current] = next;
          },
        },
      ),
    );

    return () =>
      (obs: ObservableLike<T>): EnumerableLike<T> =>
        isEnumerable(obs)
          ? EnumerableLike__create(() => {
              const scheduler = createEnumeratorScheduler();

              pipe(
                createEnumeratorObserver(scheduler),
                addTo(scheduler),
                sourceFrom(obs),
              );

              return scheduler;
            })
          : EnumerableLike__empty();
  })();
export const toEnumerableT: ToEnumerable<ObservableLike> = { toEnumerable };

export const toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  () => observable =>
    isRunnable(observable)
      ? FlowableLike__createLifted((modeObs: ObservableLike<FlowMode>) =>
          ObservableLike__create(observer => {
            const pausableScheduler = pipe(
              observer,
              getScheduler,
              toPausableScheduler,
            );

            pipe(
              observer,
              sourceFrom(
                pipe(
                  observable,
                  subscribeOn(pausableScheduler),
                  takeUntil(pipe(pausableScheduler, disposableToObservable())),
                ),
              ),
              add(
                pipe(
                  modeObs,
                  forEach(mode => {
                    switch (mode) {
                      case "pause":
                        pause(pausableScheduler);
                        break;
                      case "resume":
                        resume(pausableScheduler);
                        break;
                    }
                  }),
                  subscribe(getScheduler(observer)),
                  bindTo(pausableScheduler),
                ),
              ),
              add(pausableScheduler),
            );
          }),
        )
      : FlowableLike__createLifted(_ => empty());
export const toFlowableT: ToFlowable<ObservableLike> = { toFlowable };

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise: ToPromiseable<
  ObservableLike,
  SchedulerLike
>["toPromise"] =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): PromiseLike<T> =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Optional<T> = none;
      let hasResult = false;

      pipe(
        observable,
        forEach<T>(next => {
          hasResult = true;
          result = next;
        }),
        subscribe(scheduler),
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(
              newInstance(
                Error,
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });
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
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createWithLatestObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = ObserverLike__mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Optional<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.selector = selector;

          pipe(
            other,
            forEach(next => {
              instance.hasLatest = true;
              instance.otherLatest = next;
            }),
            subscribe(getScheduler(delegate)),
            addTo(instance),
            onComplete(() => {
              if (!instance.hasLatest) {
                pipe(instance, dispose());
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          selector: none,
        }),
        {
          [SinkLike_notify](this: TProperties & ObserverLike<TA>, next: TA) {
            if (!isDisposed(this) && this.hasLatest) {
              const result = this.selector(next, this.otherLatest as TB);
              pipe(this.delegate, notify(result));
            }
          },
        },
      ),
    );
  })();

  return <TA, TB, T>(
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) =>
    pipe(
      createWithLatestObserver,
      partial(other, selector),
      ObservableLike__lift(isEnumerable(other), isRunnable(other)),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export const zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = ObserverLike__mixin();

  const shouldEmit = compose(
    mapArray((x: EnumeratorLike) => hasCurrent(x) || move(x)),
    every(isTrue),
  );

  const shouldComplete = compose(
    forEachArray<EnumeratorLike>(move),
    some(isDisposed),
  );

  type TProperties = {
    readonly delegate: ObserverLike<readonly unknown[]>;
    readonly enumerators: readonly EnumeratorLike<any>[];
    readonly sinkEnumerator: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedObserverMixin),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));

        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;

        pipe(
          instance,
          onComplete(() => {
            if (
              isDisposed(sinkEnumerator) ||
              (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))
            ) {
              pipe(delegate, dispose());
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
      }),
      {
        [SinkLike_notify](this: ObserverLike & TProperties, next: unknown) {
          const { sinkEnumerator, enumerators } = this;
          if (isDisposed(this)) {
            return;
          }

          pipe(sinkEnumerator, notify(next));

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(enumerators, mapArray(getCurrent));
          pipe(this.delegate, notify(zippedNext));

          if (shouldComplete(enumerators)) {
            pipe(this, dispose());
          }
        },
      },
    ),
  );

  const onSink =
    (observables: readonly ObservableLike[]) => (observer: ObserverLike) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (isEnumerable(next)) {
          const enumerator = pipe(
            next,
            toEnumerable(),
            getOrRaise(),
            enumerate(),
            addTo(observer),
          );

          move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            EnumeratorSinkLike__create(),
            addTo(observer),
          );
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            addTo(observer),
            sourceFrom(next),
          );
        }
      }
    };

  return (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly any[]> => {
    const isEnumerable = ObservableLike__allAreEnumerable(observables);
    const isRunnable = ObservableLike__allAreRunnable(observables);

    return isEnumerable
      ? pipe(
          observables,
          mapArray(toEnumerable()),
          keepType(keepArrayT, isSome),
          enumerables =>
            (
              enumerableZip as unknown as (...v: any[]) => EnumerableLike<any[]>
            )(...enumerables),
          enumerableToObservable(),
        )
      : isRunnable
      ? RunnableObservableLike__create(onSink(observables))
      : ObservableLike__create(onSink(observables));
  };
})();
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
