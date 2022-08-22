import { MAX_SAFE_INTEGER } from "../__internal__/__internal__env";
import { getDelay, hasDelay } from "../__internal__/__internal__optionParsing";
import {
  TReactive,
  createDecodeWithCharsetOperator,
  createKeepOperator,
  createMapOperator,
  createReduceOperator,
  createSkipFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "../__internal__/containers/__internal__StatefulContainerLike";
import {
  create as createEnumerable,
  empty as emptyEnumerable,
} from "../__internal__/ix/__internal__EnumerableLike";
import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "../__internal__/rx/__internal_ObservableLike.create";
import {
  allAreEnumerable,
  allAreRunnable,
  createCatchError,
  createMergeAll,
  createScanAsync,
  deferObservableImpl,
  distinctUntilChanged as distinctUntilChangedInternal,
  forEach as forEachInternal,
  isEnumerable as isEnumerableInternal,
  isRunnable as isRunnableInternal,
  liftEnumerableObservable,
  liftEnumerableObservableT,
  liftObservable,
  liftRunnableObservable,
  mergeImpl,
  merge as mergeInternal,
  mergeT as mergeTInternal,
  multicast as multicastInternal,
  onSubscribe as onSubscribeInternal,
  scan as scanInternal,
  subscribe as subscribeInternal,
  switchAll as switchAllInternal,
  takeFirst as takeFirstInternal,
  zipWithLatestFrom as zipWithLatestFromInternal,
} from "../__internal__/rx/__internal__ObservableLike";
import {
  createDelegatingObserver,
  createKeepObserver,
  createMapObserver,
  createPairwiseObserver,
  createSkipFirstObserver,
  createTakeWhileObserver,
  createThrowIfEmptyObserver,
  observerMixin,
} from "../__internal__/rx/__internal__Observers";
import {
  createEnumeratorSink,
  decodeWithCharsetSinkMixin,
  everySatisfySinkMixin,
  reduceSinkMixin,
  someSatisfySinkMixin,
  takeLastSinkMixin,
} from "../__internal__/rx/__internal__Sinks";
import { createLiftedFlowable } from "../__internal__/streaming/__internal__StreamableLike";
import {
  DisposableRefLike,
  createDisposableRef,
  delegatingDisposableMixin,
  disposableMixin,
  disposableRefMixin,
} from "../__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/__internal__Enumerators";
import {
  MutableRefLike,
  MutableRefLike_current,
  getCurrentRef,
  setCurrentRef,
} from "../__internal__/util/__internal__MutableRefLike";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/util/__internal__Objects";
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
  Generate,
  Keep,
  Map,
  Never,
  Pairwise,
  ReadonlyArrayLike,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToPromise,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { concatMap, keepType, throws } from "../containers/ContainerLike";
import { toObservable as promiseToObservable } from "../containers/PromiseableLike";
import {
  toObservable as arrayToObservable,
  every,
  forEach as forEachArray,
  keepT as keepArrayT,
  map as mapArray,
  some,
} from "../containers/ReadonlyArrayLike";
import {
  Factory,
  Function1,
  Function2,
  Option,
  Predicate,
  Reducer,
  SideEffect,
  Updater,
  compose,
  getLength,
  getOrRaise,
  ignore,
  isEmpty,
  isNone,
  isSome,
  isTrue,
  max,
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
import {
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  RunnableObservableLike,
  ScanAsync,
  SinkLike,
  SinkLike_notify,
} from "../rx";
import { getScheduler } from "../rx/ObserverLike";
import { notify, notifySink, sourceFrom } from "../rx/SinkLike";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
} from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import {
  __yield,
  createVirtualTimeScheduler,
  isInContinuation,
  schedule,
  toPausableScheduler,
} from "../scheduling/SchedulerLike";
import { FlowMode, ToFlowable } from "../streaming";
import {
  ContinuationLike,
  DisposableLike,
  DisposableOrTeardown,
  Exception,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  add,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  toObservable as disposableToObservable,
  dispose,
  disposed,
  getException,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
import { getObserverCount } from "./MulticastObservableLike";
import { sinkInto } from "./ReactiveContainerLike";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = observerMixin<T>();

  type TProperties = {
    buffer: T[];
    readonly delegate: ObserverLike<readonly T[]>;
    readonly durationFunction: Function1<T, ObservableLike>;
    readonly durationSubscription: DisposableRefLike;
    readonly maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    mixin(
      include(typedObserverMixin, disposableMixin),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));

        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription = createDisposableRef(disposed);
        instance.maxBufferSize = maxBufferSize;

        pipe(
          instance,
          onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, dispose());
            } else {
              pipe([buffer], arrayToObservable(), sinkInto(delegate));
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
      }),
      {
        [SinkLike_notify](this: TProperties & ObserverLike<T>, next: T) {
          const { buffer, maxBufferSize } = this;

          buffer.push(next);

          const doOnNotify = () => {
            this.durationSubscription[MutableRefLike_current] = disposed;

            const buffer = this.buffer;
            this.buffer = [];

            pipe(this.delegate, notify(buffer));
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            isDisposed(this.durationSubscription[MutableRefLike_current])
          ) {
            this.durationSubscription[MutableRefLike_current] = pipe(
              next,
              this.durationFunction,
              forEach(doOnNotify),
              subscribe(getScheduler(this)),
            );
          }
        },
      },
    ),
  );

  return (
    options: {
      readonly duration?: Function1<T, ObservableLike> | number;
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const durationOption = options.duration ?? MAX_SAFE_INTEGER;
    const durationFunction =
      durationOption === MAX_SAFE_INTEGER
        ? never
        : typeof durationOption === "number"
        ? (_: T) => pipe([none], arrayToObservable())
        : durationOption;

    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, maxBufferSize),
        addTo(delegate),
      );
    };

    return durationOption === MAX_SAFE_INTEGER
      ? liftEnumerableObservable(operator)
      : liftObservable(operator);
  };
})();
export const bufferT: Buffer<ObservableLike> = {
  buffer,
};

export const catchError: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<ObservableLike>(liftObservable);

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
export const concat: Concat<ObservableLike>["concat"] = /*@__PURE__*/ (<
  T,
>() => {
  const createConcatObserver = <T>(
    delegate: ObserverLike<T>,
    observables: readonly ObservableLike<T>[],
    next: number,
  ) =>
    pipe(
      createDelegatingObserver(delegate),
      addTo(delegate),
      onComplete(() => {
        if (next < getLength(observables)) {
          pipe(
            createConcatObserver(delegate, observables, next + 1),
            sourceFrom(observables[next]),
          );
        } else {
          pipe(delegate, dispose());
        }
      }),
    );

  return (...observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      if (!isEmpty(observables)) {
        pipe(
          createConcatObserver(observer, observables, 1),
          sourceFrom(observables[0]),
        );
      } else {
        pipe(observer, dispose());
      }
    };

    const isEnumerable = allAreEnumerable(observables);
    const isRunnable = allAreRunnable(observables);

    return isEnumerable
      ? createEnumerableObservable(onSink)
      : isRunnable
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();
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

export const create = createObservable;

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(
      arrayToObservable(),
    );
    const typedObserverMixin = observerMixin<ArrayBuffer>();

    const createDecodeWithCharsetObserver = createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedDecodeWithCharsetMixin),
        function DecodeWithCharsetObserver(
          instance: unknown,
          delegate: ObserverLike<string>,
          charset: string,
        ): ObserverLike<ArrayBuffer> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedDecodeWithCharsetMixin, instance, delegate, charset);

          return instance;
        },
      ),
    );

    return pipe(
      createDecodeWithCharsetObserver,
      createDecodeWithCharsetOperator<ObservableLike, TReactive>(
        liftEnumerableObservableT,
      ),
    );
  })();
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

export const defer: Defer<ObservableLike>["defer"] = f =>
  deferObservableImpl(f, false, false);
export const deferT: Defer<ObservableLike> = {
  defer,
};

export const distinctUntilChanged = distinctUntilChangedInternal;
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface EmptyObservable {
  <T>(): EnumerableObservableLike<T>;
  <T>(options: { delay: number }): RunnableObservableLike<T>;
}
export const empty: EmptyObservable = (<T>(options?: { delay: number }) => {
  const delay = getDelay(options);
  return delay > 0
    ? createRunnableObservable<T>(sink => {
        pipe(
          sink,
          getScheduler,
          schedule(pipeLazy(sink, dispose()), { delay }),
        );
      })
    : createEnumerableObservable<T>(sink => {
        pipe(sink, dispose());
      });
}) as EmptyObservable;

export const emptyT: Empty<ObservableLike, { delay: number }> = {
  empty,
};

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = observerMixin();
    const typedEverySatisfySinkMixin = everySatisfySinkMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(arrayToObservable());

    const everySatisfyObserverMixin = mixin(
      include(typedEverySatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(everySatisfyObserverMixin),
        partial(predicate),
        liftEnumerableObservable,
      );
  })();
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

export const forEach = forEachInternal;
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
      mergeImpl,
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
  const delay = getDelay(options);
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        __yield(options);
      }
    };

    pipe(
      observer,
      getScheduler,
      schedule(continuation, delayStart && hasDelay(options) ? options : none),
      addTo(observer),
    );
  };

  return delay > 0
    ? createRunnableObservable(onSink)
    : createEnumerableObservable(onSink);
}) as GenerateObservable;

export const generateT: Generate<
  ObservableLike,
  { readonly delay: number; readonly delayStart: boolean }
> = { generate };

export const isEnumerable: (
  obs: ObservableLike,
) => obs is EnumerableObservableLike = isEnumerableInternal;

export const isRunnable: (
  obs: ObservableLike,
) => obs is RunnableObservableLike = isRunnableInternal;

export const keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<T>() =>
  pipe(
    createKeepObserver,
    createKeepOperator<ObservableLike, T, TReactive>(liftEnumerableObservableT),
  ))();
export const keepT: Keep<ObservableLike> = { keep };

const enum LatestMode {
  Combine = 1,
  Zip = 2,
}
const latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = observerMixin();
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
    mixin(
      include(typedObserverMixin, disposableMixin),
      function LatestObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ): ObserverLike & TProperties {
        init(disposableMixin, instance);
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

    const isEnumerable = allAreEnumerable(observables);
    const isRunnable = allAreRunnable(observables);

    return isEnumerable
      ? createEnumerableObservable(onSink)
      : isRunnable
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();

export const map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    createMapObserver,
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();
export const mapT: Map<ObservableLike> = { map };

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) =>
    pipe(a, f, promiseToObservable()),
  );

export const merge = mergeInternal;
export const mergeT = mergeTInternal;

export const mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ createMergeAll<ObservableLike>(
  liftObservable,
) as ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];
export const mergeAllT: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
> = { concatAll: mergeAll };

export const multicast = multicastInternal;

export const never: Never<EnumerableObservableLike>["never"] = () =>
  createEnumerableObservable(ignore);
export const neverT: Never<ObservableLike> = { never };

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = onSubscribeInternal;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() =>
    pipe(liftEnumerableObservable(createPairwiseObserver), returns))();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

export const reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = reduceSinkMixin<
    ObservableLike<TAcc>,
    ObserverLike<TAcc>,
    T,
    TAcc
  >(arrayToObservable());

  const typedObserverMixin = observerMixin<T>();

  const createReduceObserver = createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedReduceSinkMixin),
      function ReduceObserver(
        instance: unknown,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);

        return instance;
      },
    ),
  );

  return pipe(
    createReduceObserver,
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
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
      createDelegatingObserver(delegate),
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
      return pipe(observable, liftEnumerableObservable(operator));
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
      : typeof predicate === "number"
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

export const scan = scanInternal;
export const scanT: Scan<ObservableLike> = { scan };

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"] =
  createScanAsync<ObservableLike, ObservableLike>(createObservable);
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
    let multicasted: Option<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return createObservable<T>(observer => {
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
  /*@__PURE__*/
  pipe(
    createSkipFirstObserver,
    createSkipFirstOperator(liftEnumerableObservableT),
  );
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = observerMixin();
    const typedSomeSatisfySinkMixin = someSatisfySinkMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(arrayToObservable());

    const someSatisfyObserverMixin = mixin(
      include(typedSomeSatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        liftEnumerableObservable,
      );
  })();
export const someSatisfyT: SomeSatisfy<ObservableLike> = { someSatisfy };

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  switchAllInternal;
export const switchAllT: ConcatAll<ObservableLike> = {
  concatAll: switchAll,
};

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = subscribeInternal;

export const subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    createObservable<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        forEach<T>(dispatchTo(dispatcher)),
        subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  takeFirstInternal;
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(arrayToObservable());
    const typedObserverMixin = observerMixin();

    const createTakeLastObserver = createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedTakeLastSinkMixin),
        function TakeLastObserver(
          instance: unknown,
          delegate: ObserverLike,
          takeCount: number,
        ): ObserverLike {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedTakeLastSinkMixin, instance, delegate, takeCount);

          return instance;
        },
      ),
    );

    return pipe(
      createTakeLastObserver,
      createTakeLastOperator(liftEnumerableObservableT),
    );
  })();
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

export const takeUntil = <T>(
  notifier: ObservableLike,
): Function1<ObservableLike<T>, ObservableLike<T>> => {
  const lift = isEnumerable(notifier)
    ? liftEnumerableObservable
    : isRunnable(notifier)
    ? liftRunnableObservable
    : liftObservable;

  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );
  return lift(operator);
};

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/
  pipe(
    createTakeWhileObserver,
    createTakeWhileOperator(liftEnumerableObservableT),
  );
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
    const typedObserverMixin = observerMixin<T>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      value: Option<T>;
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
      mixin(
        include(disposableMixin, typedObserverMixin),
        function ThrottleObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          durationFunction: Function1<T, ObservableLike>,
          mode: ThrottleMode,
        ): ObserverLike<T> {
          init(disposableMixin, instance);
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
    const durationFunction =
      typeof duration === "number"
        ? (_: T) =>
            pipe(
              [none],
              arrayToObservable({ delay: duration, delayStart: true }),
            )
        : duration;
    return pipe(
      createThrottleObserver,
      partial(durationFunction, mode),
      typeof duration === "number" ? liftRunnableObservable : liftObservable,
    );
  };
})();

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ pipe(
    createThrowIfEmptyObserver,
    createThrowIfEmptyOperator(liftEnumerableObservableT),
  );
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
  const typedObserverMixin = observerMixin();

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
    mixin(
      include(
        typedObserverMixin,
        delegatingDisposableMixin,
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(delegatingDisposableMixin, instance, delegate);
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
    const durationObs =
      typeof duration === "number"
        ? throws(
            { fromArray: arrayToObservable, ...mapT },
            { delay: duration, delayStart: true },
          )(returnTimeoutError)
        : concat(
            duration,
            throws({ fromArray: arrayToObservable, ...mapT })(
              returnTimeoutError,
            ),
          );
    const lift =
      typeof duration === "number" || isRunnable(duration)
        ? liftRunnableObservable
        : liftObservable;
    return pipe(createTimeoutObserver, partial(durationObs), lift);
  };
})();

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();
    const typedObserverMixin = observerMixin<T>();

    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly continuations: ContinuationLike[];
    };

    type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

    const createEnumeratorScheduler = createInstanceFactory(
      mixin(
        include(disposableMixin, typedEnumeratorMixin),
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
          init(disposableMixin, instance);
          init(typedEnumeratorMixin, instance);

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
      mixin(
        include(disposableMixin, typedObserverMixin),
        function EnumeratorObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TEnumeratorObserverProperties>,
          enumerator: EnumeratorScheduler,
        ): ObserverLike<T> {
          init(disposableMixin, instance);
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
          ? createEnumerable(() => {
              const scheduler = createEnumeratorScheduler();

              pipe(
                createEnumeratorObserver(scheduler),
                addTo(scheduler),
                sourceFrom(obs),
              );

              return scheduler;
            })
          : emptyEnumerable();
  })();
export const toEnumerableT: ToEnumerable<ObservableLike> = { toEnumerable };

export const toFlowable: ToFlowable<ObservableLike>["toFlowable"] =
  () => observable =>
    isRunnable(observable)
      ? createLiftedFlowable((modeObs: ObservableLike<FlowMode>) =>
          createObservable(observer => {
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
                  forEach<FlowMode>(mode => {
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
      : createLiftedFlowable(_ => empty());
export const toFlowableT: ToFlowable<ObservableLike> = { toFlowable };

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"] =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): PromiseLike<T> =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Option<T> = none;
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
export const toPromiseT: ToPromise<ObservableLike, SchedulerLike> = {
  toPromise,
};

export const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"] =

    <T>(
      options: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
      } = {},
    ): Function1<ObservableLike<T>, ReadonlyArrayLike<T>> =>
    observable => {
      if (isRunnable(observable)) {
        const { schedulerFactory = createVirtualTimeScheduler } = options;
        const scheduler = schedulerFactory();
        const result: T[] = [];

        const subscription = pipe(
          observable,
          forEach<T>(next => {
            result.push(next);
          }),
          subscribe(scheduler),
        );

        run(scheduler);
        const exception = getException(subscription);

        if (isSome(exception)) {
          throw exception.cause;
        }

        return result;
      } else {
        return [];
      }
    };
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
    const typedObserverMixin = observerMixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Option<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mixin(
        include(delegatingDisposableMixin, typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(delegatingDisposableMixin, instance, delegate);
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
  ) => {
    const lift = isEnumerable(other)
      ? liftEnumerableObservable
      : isRunnable(other)
      ? liftRunnableObservable
      : liftObservable;
    return pipe(
      createWithLatestObserver,
      partial(other, selector),
      lift,
    ) as ContainerOperator<ObservableLike, TA, T>;
  };
})();

export const zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = observerMixin();

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
    mixin(
      include(disposableMixin, typedObserverMixin),
      function ZipObserver(
        instance: Pick<ObserverLike, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(disposableMixin, instance);
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
          const enumerator = pipe(createEnumeratorSink(), addTo(observer));
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
    const isEnumerable = allAreEnumerable(observables);
    const isRunnable = allAreRunnable(observables);

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
      ? createRunnableObservable(onSink(observables))
      : createObservable(onSink(observables));
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
) => ContainerOperator<ObservableLike, TA, T> = zipWithLatestFromInternal;
