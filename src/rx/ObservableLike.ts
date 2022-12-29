import { MAX_SAFE_INTEGER } from "../__internal__/constants";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../__internal__/mixins";
import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
  deferObservable,
} from "../__internal__/rx/ObservableLike.create";
import {
  catchErrorObservable,
  mergeAllObservable,
  scanAsyncObservable,
  switchAllObservable,
} from "../__internal__/rx/ObservableLike.higher-order";
import {
  liftEnumerableObservable,
  liftEnumerableObservableT,
  liftObservable,
  liftRunnableObservable,
} from "../__internal__/rx/ObservableLike.lift";
import {
  allAreEnumerable,
  allAreRunnable,
  mergeImpl,
  merge as mergeInternal,
  mergeT as mergeTInternal,
} from "../__internal__/rx/ObservableLike.operators";
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
  ToPromiseable,
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
import StatefulContainerLike__decodeWithCharset from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset";
import StatefulContainerLike__keep from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import StatefulContainerLike__map from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import StatefulContainerLike__reduce from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce";
import StatefulContainerLike__skipFirst from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst";
import StatefulContainerLike__takeLast from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import StatefulContainerLike__takeWhile from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import StatefulContainerLike__throwIfEmpty from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import { TReactive } from "../containers/__internal__/containers.internal";
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
  isNumber,
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
  ObserverLike_scheduler,
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
  VirtualTimeSchedulerLike,
} from "../scheduling";
import { run, yield_ } from "../scheduling/ContinuationLike";
import { dispatchTo } from "../scheduling/DispatcherLike";
import {
  isInContinuation,
  toPausableScheduler,
} from "../scheduling/SchedulerLike";
import { create as createVirtualTimeScheduler } from "../scheduling/VirtualTimeSchedulerLike";
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
  getException,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { pause, resume } from "../util/PauseableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getObserverCount } from "./MulticastObservableLike";
import { sinkInto } from "./ReactiveContainerLike";
import EnumeratorSinkLike__create from "./__internal__/EnumeratorSinkLike/EnumeratorSinkLike.create";
import ObservableLike__distinctUntilChanged from "./__internal__/ObservableLike/ObservableLike.distinctUntilChanged";
import ObservableLike__forEach from "./__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__isEnumerable from "./__internal__/ObservableLike/ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./__internal__/ObservableLike/ObservableLike.isRunnable";
import ObservableLike__multicast from "./__internal__/ObservableLike/ObservableLike.multicast";
import ObservableLike__onSubscribe from "./__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__scan from "./__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__subscribe from "./__internal__/ObservableLike/ObservableLike.subscribe";
import ObservableLike__takeFirst from "./__internal__/ObservableLike/ObservableLike.takeFirst";
import ObservableLike__zipWithLatestFrom from "./__internal__/ObservableLike/ObservableLike.zipWithLatestFrom";
import ObserverLike__createWithDelegate from "./__internal__/ObserverLike/ObserverLike.createWithDelegate";
import ObserverLike__mixin from "./__internal__/ObserverLike/ObserverLike.mixin";
import SinkLike__decodeWithCharsetMixin from "./__internal__/SinkLike/SinkLike.decodeWithCharsetMixin";
import SinkLike__everySatisfyMixin from "./__internal__/SinkLike/SinkLike.everySatisfyMixin";
import SinkLike__keepMixin from "./__internal__/SinkLike/SinkLike.keepMixin";
import SinkLike__mapMixin from "./__internal__/SinkLike/SinkLike.mapMixin";
import SinkLike__pairwiseMixin from "./__internal__/SinkLike/SinkLike.pairwiseMixin";
import SinkLike__reduceMixin from "./__internal__/SinkLike/SinkLike.reduceMixin";
import SinkLike__skipFirstMixin from "./__internal__/SinkLike/SinkLike.skipFirstMixin";
import SinkLike__someSatisfyMixin from "./__internal__/SinkLike/SinkLike.someSatisfyMixin";
import SinkLike__takeLastMixin from "./__internal__/SinkLike/SinkLike.takeLastMixin";
import SinkLike__takeWhileMixin from "./__internal__/SinkLike/SinkLike.takeWhileMixin";
import SinkLike__throwIfEmptyMixin from "./__internal__/SinkLike/SinkLike.throwIfEmptyMixin";

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = ObserverLike__mixin<T>();

  type TProperties = {
    buffer: T[];
    readonly delegate: ObserverLike<readonly T[]>;
    readonly durationFunction: Function1<T, ObservableLike>;
    readonly durationSubscription: DisposableRefLike;
    readonly maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    mixin(
      include(typedObserverMixin, DisposableLike__mixin),
      function BufferObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ): ObserverLike<T> {
        init(DisposableLike__mixin, instance);
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
        : isNumber(durationOption)
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
export const concat: Concat<ObservableLike>["concat"] = /*@__PURE__*/ (<
  T,
>() => {
  const createConcatObserver = <T>(
    delegate: ObserverLike<T>,
    observables: readonly ObservableLike<T>[],
    next: number,
  ) =>
    pipe(
      ObserverLike__createWithDelegate(delegate),
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
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(
      arrayToObservable(),
    );
    const typedObserverMixin = ObserverLike__mixin<ArrayBuffer>();

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
      StatefulContainerLike__decodeWithCharset<ObservableLike, TReactive>(
        liftEnumerableObservableT,
      ),
    );
  })();
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

export const defer: Defer<ObservableLike, { delay: number }>["defer"] =
  deferObservable;
export const deferT: Defer<ObservableLike, { delay: number }> = {
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
    ? createRunnableObservable<T>(observer => {
        pipe(observer, schedule(pipeLazy(observer, dispose()), options));
      })
    : createEnumerableObservable<T>(sink => {
        pipe(sink, dispose());
      })) as EmptyObservable;

export const emptyT: Empty<ObservableLike, { delay: number }> = {
  empty,
};

export const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin<
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

export const fromPromise: FromPromise<ObservableLike>["fromPromise"] =
  promiseToObservable;

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
    ? createRunnableObservable(onSink)
    : createEnumerableObservable(onSink);
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

export const keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedKeepSinkMixin = SinkLike__keepMixin<T>();
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedKeepSinkMixin),
        function KeepObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedKeepSinkMixin, instance, delegate, predicate);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createKeepObserver,
    StatefulContainerLike__keep<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
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
    mixin(
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

    const isEnumerable = allAreEnumerable(observables);
    const isRunnable = allAreRunnable(observables);

    return isEnumerable
      ? createEnumerableObservable(onSink)
      : isRunnable
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();

export const map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const createMapObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    predicate: Function1<TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    const typedMapSinkMixin = SinkLike__mapMixin<TA, TB>();
    const typedObserverMixin = ObserverLike__mixin<TA>();

    return createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedMapSinkMixin),
        function MapObserver(
          instance: unknown,
          delegate: ObserverLike<TB>,
          mapper: Function1<TA, TB>,
        ): ObserverLike<TA> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedMapSinkMixin, instance, delegate, mapper);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createMapObserver,
    StatefulContainerLike__map<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const mapT: Map<ObservableLike> = { map };

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => pipe(a, f, fromPromise()));

export const merge = mergeInternal;
export const mergeT = mergeTInternal;

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

export const never: Never<EnumerableObservableLike>["never"] = () =>
  createEnumerableObservable(ignore);
export const neverT: Never<ObservableLike> = { never };

export const onSubscribe: <T>(
  f: Factory<DisposableOrTeardown | void>,
) => ContainerOperator<ObservableLike, T, T> = ObservableLike__onSubscribe;

export const pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createPairwiseObserver: <T>(
      delegate: ObserverLike<readonly [T, T]>,
    ) => ObserverLike<T> = (<T>() => {
      const typedPairwiseSinkMixin = SinkLike__pairwiseMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedPairwiseSinkMixin),
          function PairwiseObserver(
            instance: unknown,
            delegate: ObserverLike<readonly [T, T]>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedPairwiseSinkMixin, instance, delegate);

            return instance;
          },
        ),
      );
    })();

    return pipe(liftEnumerableObservable(createPairwiseObserver), returns);
  })();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

export const reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = SinkLike__reduceMixin<
    ObservableLike<TAcc>,
    ObserverLike<TAcc>,
    T,
    TAcc
  >(arrayToObservable());

  const typedObserverMixin = ObserverLike__mixin<T>();

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
    StatefulContainerLike__reduce<ObservableLike, T, TAcc, TReactive>(
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
  /*@__PURE__*/ (() => {
    const createSkipFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedSkipFirstSinkMixin),
          function SkipFirstObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            skipCount: number,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createSkipFirstObserver,
      StatefulContainerLike__skipFirst(liftEnumerableObservableT),
    );
  })();
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin<
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
    createObservable<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
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
  /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin(arrayToObservable());
    const typedObserverMixin = ObserverLike__mixin();

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
      StatefulContainerLike__takeLast(liftEnumerableObservableT),
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
      ObserverLike__createWithDelegate(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );
  return lift(operator);
};

export const takeWhile: TakeWhile<ObservableLike>["takeWhile"] =
  /*@__PURE__*/ (() => {
    const createTakeWhileObserver: <T>(
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedTakeWhileSinkMixin),
          function TakeWhileObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(
              typedTakeWhileSinkMixin,
              instance,
              delegate,
              predicate,
              inclusive,
            );

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createTakeWhileObserver,
      StatefulContainerLike__takeWhile(liftEnumerableObservableT),
    );
  })();
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
      isNumber(duration) ? liftRunnableObservable : liftObservable,
    );
  };
})();

export const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (<T>() => {
      const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedThrowIfEmptySinkMixin),
          function ThrowIfEmptyObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            factory: Factory<unknown>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createThrowIfEmptyObserver,
      StatefulContainerLike__throwIfEmpty(liftEnumerableObservableT),
    );
  })();
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
    mixin(
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
    const lift =
      isNumber(duration) || isRunnable(duration)
        ? liftRunnableObservable
        : liftObservable;
    return pipe(createTimeoutObserver, partial(durationObs), lift);
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
      mixin(
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
      mixin(
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
export const toPromiseT: ToPromiseable<ObservableLike, SchedulerLike> = {
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
    const typedObserverMixin = ObserverLike__mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Option<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mixin(
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
    mixin(
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
) => ContainerOperator<ObservableLike, TA, T> =
  ObservableLike__zipWithLatestFrom;
