import {
  TReactive,
  createDecodeWithCharsetOperator,
  createKeepOperator,
  createMapOperator,
  createReduceOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import { MAX_SAFE_INTEGER } from "../__internal__/env";
import {
  allAreEnumerable,
  allAreRunnable,
  createMergeAll,
  createSwitchAll,
  distinctUntilChanged as distinctUntilChangedInternal,
  forEach as forEachInternal,
  liftEnumerableObservable,
  liftEnumerableObservableT,
  liftObservable,
  liftRunnableObservable,
  mergeImpl,
  merge as mergeInternal,
  mergeT as mergeTInternal,
  multicast as multicastInternal,
  scan as scanInternal,
  subscribe as subscribeInternal,
} from "../__internal__/rx/ObservableLikeInternal";
import { createOnSink } from "../__internal__/rx/ReactiveContainerLikeInternal";
import {
  createDecodeWithCharsetObserver,
  createDelegatingObserver,
  createKeepObserver,
  createMapObserver,
  createPairwiseObserver,
  createReduceObserver,
  createSkipFirstObserver,
  createTakeFirstObserver,
  createTakeLastObserver,
  createTakeWhileObserver,
  createThrowIfEmptyObserver,
  observerMixin,
} from "../__internal__/scheduling/ObserverLikeMixin";
import { isInContinuation } from "../__internal__/schedulingInternal";
import {
  DisposableRefLike,
  createDisposableRef,
  delegatingDisposableMixin,
  disposableMixin,
} from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import { MutableRefLike_current } from "../__internal__/util/MutableRefLike";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/Object";
import { createEnumeratorSink } from "../__internal__/util/SinkLikeMixin";
import {
  Buffer,
  Concat,
  ConcatAll,
  ContainerOperator,
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  ForkConcat,
  ForkZip,
  Keep,
  Map,
  Pairwise,
  ReadonlyArrayLike,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToPromise,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { keepType } from "../containers/ContainerLike";
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
  compose,
  getLength,
  getOrRaise,
  isEmpty,
  isNone,
  isSome,
  isTrue,
  max,
  newInstance,
  none,
  partial,
  pipe,
  returns,
} from "../functions";
import {
  EnumerableLike,
  ToEnumerable,
  createEnumerable,
  emptyEnumerable,
} from "../ix";
import {
  toObservable as enumerableToObservable,
  zip as enumerableZip,
  enumerate,
} from "../ix/EnumerableLike";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
  emptyObservable,
  neverObservable,
} from "../rx";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
  createVirtualTimeScheduler,
} from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { getScheduler } from "../scheduling/ObserverLike";
import { toPausableScheduler } from "../scheduling/SchedulerLike";
import { FlowMode, ToFlowable, createLiftedFlowable } from "../streaming";
import {
  ContinuationLike,
  DisposableLike,
  DisposableOrTeardown,
  EnumeratorLike,
  EnumeratorLike_current,
  SinkLike,
  SinkLike_notify,
  SourceLike_move,
  disposed,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  add,
  addTo,
  bindTo,
  toObservable as disposableToObservable,
  dispose,
  getException,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { getCurrent, hasCurrent, move } from "../util/EnumeratorLike";
import { pause, resume } from "../util/PauseableLike";
import { notify, sourceFrom } from "../util/SinkLike";
import { getObserverCount } from "./MulticastObservableLike";
import { sinkInto } from "./ReactiveContainerLike";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = observerMixin<ArrayBuffer>();

  type TBufferObserverProperties = {
    buffer: T[];
    delegate: ObserverLike<readonly T[]>;
    durationFunction: Function1<T, ObservableLike>;
    durationSubscription: DisposableRefLike;
    maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    clazz(
      __extends(typedObserverMixin, disposableMixin),
      function BufferObserver(
        this: TBufferObserverProperties & ObserverLike<T>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.buffer = [];
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.durationSubscription = createDisposableRef(disposed);
        this.maxBufferSize = maxBufferSize;

        return pipe(
          this,
          onComplete(() => {
            const { buffer } = this;
            this.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, dispose());
            } else {
              pipe([buffer], arrayToObservable(), sinkInto(delegate));
            }
          }),
        );
      },
      {
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
      },
      {
        [SinkLike_notify](
          this: TBufferObserverProperties & ObserverLike<T>,
          next: T,
        ) {
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
        ? neverObservable
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

export const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"] =
  /*@__PURE__*/ (() =>
    pipe(
      createDecodeWithCharsetObserver(arrayToObservable()),
      createDecodeWithCharsetOperator<ObservableLike, TReactive>(
        liftEnumerableObservableT,
      ),
    ))();
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChanged = distinctUntilChangedInternal;
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

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
    observers: TLatestObserverProperties[];
  };

  const add = (self: LatestCtx, observer: TLatestObserverProperties): void => {
    self.observers.push(observer);
  };

  const onNotify = (self: LatestCtx) => {
    const { mode, observers } = self;

    const isReady = observers.every(x => x.ready);

    if (isReady) {
      const result = pipe(
        observers,
        mapArray(observer => observer.latest),
      );
      pipe(self.delegate, notify(result));

      if (mode === LatestMode.Zip) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
      }
    }
  };

  const onCompleted = (self: LatestCtx) => {
    self.completedCount++;

    if (self.completedCount === getLength(self.observers)) {
      pipe(self.delegate, dispose());
    }
  };

  type TLatestObserverProperties = {
    ready: boolean;
    latest: unknown;
    ctx: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    clazz(
      __extends(typedObserverMixin, disposableMixin),
      function LatestObserver(
        this: TLatestObserverProperties & ObserverLike,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        this.ctx = ctx;
        return this;
      },
      {
        ready: false,
        latest: none,
        ctx: none,
      },
      {
        [SinkLike_notify](this: TLatestObserverProperties, next: unknown) {
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

export const merge = mergeInternal;
export const mergeT = mergeTInternal;

export const mergeAll: ConcatAll<
  ObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = createMergeAll<ObservableLike>(liftObservable) as ConcatAll<
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

export const onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return createOnSink(
      onSink =>
        obs[ObservableLike_isEnumerable]
          ? createEnumerableObservable(onSink)
          : obs[ObservableLike_isRunnable]
          ? createRunnableObservable(onSink)
          : createObservable(onSink),
      obs,
      f,
    );
  };

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() =>
    pipe(liftEnumerableObservable(createPairwiseObserver), returns))();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

export const reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() =>
  pipe(
    createReduceObserver<T, TAcc>(arrayToObservable()),
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();
export const reduceT: Reduce<ObservableLike> = { reduce };

export const scan = scanInternal;
export const scanT: Scan<ObservableLike> = { scan };

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

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  createSwitchAll<ObservableLike>(liftObservable);
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
  /*@__PURE__*/ pipe(
    createTakeFirstObserver,
    createTakeFirstOperator(liftEnumerableObservableT),
  );

export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

export const takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ pipe(
    createTakeLastObserver(arrayToObservable()),
    createTakeLastOperator(liftEnumerableObservableT),
  );
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

export const takeUntil = <T>(
  notifier: ObservableLike,
): Function1<ObservableLike<T>, ObservableLike<T>> => {
  const lift = notifier[ObservableLike_isEnumerable]
    ? liftEnumerableObservable
    : notifier[ObservableLike_isRunnable]
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

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ pipe(
    createThrowIfEmptyObserver,
    createThrowIfEmptyOperator(liftEnumerableObservableT),
  );
export const throwIfEmptyT: ThrowIfEmpty<ObservableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();
    const typedObserverMixin = observerMixin<T>();

    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      continuations: ContinuationLike[];
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedEnumeratorMixin]>;

    type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

    const createEnumeratorScheduler = createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedEnumeratorMixin),
        function EnumeratorScheduler(
          this: EnumeratorScheduler & TEnumeratorSchedulerProperties,
        ) {
          init(disposableMixin, this);
          init(typedEnumeratorMixin, this);

          this.continuations = [];

          return this;
        },
        {
          [SchedulerLike_inContinuation]: false,
          continuations: none,
        },
        {
          [SchedulerLike_now]: 0,
          get [SchedulerLike_shouldYield](): boolean {
            const self = this as unknown as TEnumeratorSchedulerProperties;
            return isInContinuation(self);
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
      enumerator: EnumeratorScheduler;
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

    const createEnumeratorObserver = createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedObserverMixin),
        function EnumeratorObserver(
          this: TEnumeratorObserverProperties & ObserverLike<T>,
          enumerator: EnumeratorScheduler,
        ) {
          init(disposableMixin, this);
          init(typedObserverMixin, this, enumerator);
          this.enumerator = enumerator;

          return this;
        },
        {
          enumerator: none,
        },
        {
          [SinkLike_notify](this: TEnumeratorObserverProperties, next: T) {
            this.enumerator[EnumeratorLike_current] = next;
          },
        },
      ),
    );

    return () =>
      (obs: ObservableLike<T>): EnumerableLike<T> =>
        obs[ObservableLike_isEnumerable]
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
    observable[ObservableLike_isRunnable]
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
      : createLiftedFlowable(_ => emptyObservable());
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
      if (observable[ObservableLike_isRunnable]) {
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

    type TProperties = PropertyTypeOf<
      [typeof disposableMixin, typeof typedObserverMixin]
    > & {
      delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Option<TB>;
      selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      clazz(
        __extends(delegatingDisposableMixin, typedObserverMixin),
        function WithLatestFromObserver(
          this: TProperties & ObserverLike<TA>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(delegatingDisposableMixin, this, delegate);
          init(typedObserverMixin, this, getScheduler(delegate));

          this.delegate = delegate;
          this.selector = selector;

          pipe(
            other,
            forEach(next => {
              this.hasLatest = true;
              this.otherLatest = next;
            }),
            subscribe(getScheduler(delegate)),
            addTo(this),
            onComplete(() => {
              if (!this.hasLatest) {
                pipe(this, dispose());
              }
            }),
          );

          return this;
        },
        {
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          selector: none,
        },
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
    const lift = other[ObservableLike_isEnumerable]
      ? liftEnumerableObservable
      : other[ObservableLike_isRunnable]
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

  type TZipObserverProperties = {
    delegate: ObserverLike<readonly unknown[]>;
    enumerators: readonly EnumeratorLike<any>[];
    sinkEnumerator: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedObserverMixin),
      function ZipObserver(
        this: ObserverLike & TZipObserverProperties,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.delegate = delegate;
        this.sinkEnumerator = sinkEnumerator;
        this.enumerators = enumerators;

        return pipe(
          this,
          onComplete(() => {
            if (
              isDisposed(sinkEnumerator) ||
              (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))
            ) {
              pipe(delegate, dispose());
            }
          }),
        );
      },
      {
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
      },
      {
        [SinkLike_notify](
          this: ObserverLike & TZipObserverProperties,
          next: unknown,
        ) {
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
        if (next[ObservableLike_isEnumerable]) {
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
