import {
  Concat,
  ConcatAll,
  ContainerOf,
  ContainerOperator,
  DistinctUntilChanged,
  ForEach,
  Scan,
  StatefulContainerStateOf,
  TakeFirst,
} from "../../containers";
import { every, map as mapArray } from "../../containers/ReadonlyArrayLike";
import {
  Factory,
  Function1,
  Function2,
  Option,
  SideEffect,
  SideEffect1,
  compose,
  getLength,
  isEmpty,
  isSome,
  isTrue,
  newInstance,
  none,
  partial,
  pipe,
  pipeUnsafe,
} from "../../functions";
import {
  AsyncReducer,
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
  ScanAsync,
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
  createSubject,
} from "../../rx";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { publish, publishTo } from "../../rx/SubjectLike";
import { ObserverLike, SchedulerLike } from "../../scheduling";
import { getScheduler } from "../../scheduling/ObserverLike";
import { DisposableOrTeardown, SinkLike_notify } from "../../util";
import { notify, notifySink, sourceFrom } from "../../util/SinkLike";
import { MAX_SAFE_INTEGER } from "../__internal__env";
import {
  Lift,
  TReactive,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createScanOperator,
  createTakeFirstOperator,
  reactive,
} from "../containers/__internal__StatefulContainerLike";
import {
  createDelegatingObserver,
  createDistinctUntilChangedObserver,
  createForEachObserver,
  createObserver,
  createScanObserver,
  createTakeFirstObserver,
  observerMixin,
} from "../scheduling/__internal__Observers";
import {
  DisposableLike,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  isDisposed,
  onComplete,
} from "../util/__internal__DisposableLike";
import {
  DisposableRefLike,
  createDisposableRef,
  disposableMixin,
  disposed,
} from "../util/__internal__Disposables";
import { MutableRefLike_current } from "../util/__internal__MutableRefLike";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../util/__internal__Objects";
import { createOnSink } from "./__internal__ReactiveContainerLike";

export const allAreEnumerable = compose(
  mapArray((obs: ObservableLike) => obs[ObservableLike_isEnumerable]),
  every(isTrue),
);

export const allAreRunnable = compose(
  mapArray((obs: ObservableLike) => obs[ObservableLike_isRunnable]),
  every(isTrue),
);

const createLift: (
  isEnumerable: boolean,
  isRunnable: boolean,
) => Lift<ObservableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;

    constructor(
      readonly source: ObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
      isEnumerable: boolean,
      isRunnable: boolean,
    ) {
      this[ObservableLike_isEnumerable] = isEnumerable;
      this[ObservableLike_isRunnable] = isRunnable;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
  }

  return (isEnumerable, isRunnable) =>
    <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): Function1<ObservableLike<TA>, ObservableLike<TB>> =>
    source => {
      const sourceSource =
        source instanceof LiftedObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedObservable
          ? [operator, ...source.operators]
          : [operator];

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        isEnumerable,
        isEnumerable || isRunnable,
      );
    };
})();

export const liftObservable = createLift(false, false);
export const liftRunnableObservable = createLift(false, true);
export const liftEnumerableObservable = createLift(true, true);
export const liftEnumerableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

export const createMergeAll = <C extends ObservableLike>(
  lift: Lift<C, TReactive>["lift"],
): ConcatAll<C>["concatAll"] => {
  const createMergeAllObserver: <T>(
    delegate: StatefulContainerStateOf<C, T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) => StatefulContainerStateOf<C, ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = observerMixin<T>();

    type TProperties = {
      activeCount: number;
      delegate: StatefulContainerStateOf<C, T>;
      maxBufferSize: number;
      maxConcurrency: number;
      onDispose: SideEffect;
      queue: ContainerOf<C, T>[];
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

    const subscribeNext = <T>(observer: TProperties & ObserverLike<T>) => {
      if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();

        if (isSome(nextObs)) {
          observer.activeCount++;

          pipe(
            nextObs,
            forEach(notifySink(observer.delegate)),
            subscribe(getScheduler(observer)),
            addTo(observer.delegate),
            onComplete(observer.onDispose),
          );
        } else if (isDisposed(observer)) {
          pipe(observer.delegate, dispose());
        }
      }
    };

    return createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedObserverMixin),
        function Observer(
          this: TProperties & StatefulContainerStateOf<C, ContainerOf<C, T>>,
          delegate: StatefulContainerStateOf<C, T>,
          maxBufferSize: number,
          maxConcurrency: number,
        ): StatefulContainerStateOf<C, ContainerOf<C, T>> {
          init(disposableMixin, this);
          init(typedObserverMixin, this, getScheduler(delegate));

          this.delegate = delegate;
          this.maxBufferSize = maxBufferSize;
          this.maxConcurrency = maxConcurrency;

          this.activeCount = 0;
          this.onDispose = () => {
            this.activeCount--;
            subscribeNext(this);
          };

          this.queue = [];

          pipe(
            this,
            addTo(delegate),
            onComplete(() => {
              if (isDisposed(delegate)) {
                this.queue.length = 0;
              } else if (getLength(this.queue) + this.activeCount === 0) {
                pipe(this.delegate, dispose());
              }
            }),
          );

          return this;
        },
        {
          activeCount: 0,
          delegate: none,
          maxBufferSize: 0,
          maxConcurrency: 0,
          onDispose: none,
          queue: none,
        },
        {
          [SinkLike_notify](
            this: TProperties & StatefulContainerStateOf<C, ContainerOf<C, T>>,
            next: ContainerOf<C, T>,
          ) {
            const { queue } = this;

            queue.push(next);

            // Drop old events if the maxBufferSize has been exceeded
            if (getLength(queue) + this.activeCount > this.maxBufferSize) {
              queue.shift();
            }
            subscribeNext(this);
          },
        },
      ),
    );
  })();

  return (
    options: {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    } = {},
  ) => {
    const {
      maxBufferSize = MAX_SAFE_INTEGER,
      maxConcurrency = MAX_SAFE_INTEGER,
    } = options;

    return lift(
      pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency)),
    );
  };
};

export const createScanAsync = <C extends ObservableLike>(
  createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
): ScanAsync<C>["scanAsync"] => {
  return <T, TAcc>(
      scanner: AsyncReducer<C, T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ContainerOperator<C, T, TAcc> =>
    observable => {
      const onSink = (observer: ObserverLike<TAcc>) => {
        const accFeedbackStream = pipe(createSubject(), addTo(observer));

        pipe(
          observable,
          zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
            pipe(scanner(acc, next), takeFirst()),
          ),
          // switchAll
          switchAll(),
          forEach(publishTo(accFeedbackStream)),
          onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))),
          sinkInto(observer),
        );
      };

      return createObservable(onSink);
    };
};

export const createSwitchAll = <C extends ObservableLike>(
  lift: Lift<C, TReactive>["lift"],
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>() => StatefulContainerStateOf<C, T> = (<
    T,
  >() => {
    const typedObserverMixin = observerMixin<T>();

    type TProperties = {
      currentRef: DisposableRefLike;
      delegate: StatefulContainerStateOf<C, T>;
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

    function onDispose(this: TProperties & DisposableLike) {
      if (isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, dispose());
      }
    }

    return createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedObserverMixin),
        function SwitchAllObserver(
          this: TProperties & StatefulContainerStateOf<C, ContainerOf<C, T>>,
          delegate: StatefulContainerStateOf<C, T>,
        ): StatefulContainerStateOf<C, ContainerOf<C, T>> {
          init(disposableMixin, this);
          init(typedObserverMixin, this, getScheduler(delegate));

          this.delegate = delegate;
          this.currentRef = pipe(
            createDisposableRef(disposed),
            addTo(delegate),
          );

          pipe(this, addTo(delegate), onComplete(onDispose));

          return this;
        },
        {
          currentRef: none,
          delegate: none,
        },
        {
          [SinkLike_notify](
            this: TProperties & ObserverLike<T> & DisposableRefLike,
            next: ContainerOf<C, T>,
          ) {
            this.currentRef[MutableRefLike_current] = pipe(
              next,
              forEach(notifySink(this.delegate)),
              subscribe(getScheduler(this)),
              onComplete(() => {
                if (isDisposed(this)) {
                  pipe(this.delegate, dispose());
                }
              }),
            );
          },
        },
      ),
    );
  })() as unknown as <T>() => StatefulContainerStateOf<C, T>;

  return () => lift(createSwitchAllObserver);
};

export const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() =>
    pipe(
      createDistinctUntilChangedObserver,
      createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
        liftEnumerableObservableT,
      ),
    ))();

export const forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() =>
  pipe(
    createForEachObserver,
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();

export const isEnumerable = (
  obs: ObservableLike,
): obs is EnumerableObservableLike => obs[ObservableLike_isEnumerable];

export const isRunnable = (
  obs: ObservableLike,
): obs is RunnableObservableLike => obs[ObservableLike_isRunnable];

export const mergeImpl = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      completedCount: number;
    },
  ) =>
    pipe(
      createDelegatingObserver(delegate),
      addTo(delegate),
      onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
          pipe(delegate, dispose());
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      const count = getLength(observables);
      const ctx = { completedCount: 0 };

      for (const observable of observables) {
        pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
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

export const merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => mergeImpl(observables);
export const mergeT: Concat<ObservableLike> = {
  concat: merge,
};

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = createSubject({ replay });
    pipe(
      observable,
      forEach<T>(publishTo(subject)),
      subscribe(scheduler),
      bindTo(subject),
    );

    return subject;
  };

export const onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    return createOnSink(
      onSink =>
        isEnumerable(obs)
          ? createEnumerableObservable(onSink)
          : isRunnable(obs)
          ? createRunnableObservable(onSink)
          : createObservable(onSink),
      obs,
      f,
    );
  };

export const scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ pipe(
  createScanObserver,
  createScanOperator(liftEnumerableObservableT),
);

export const switchAll: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<ObservableLike>(liftObservable);

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = scheduler => observable =>
  pipe(
    scheduler,
    createObserver,
    addToIgnoringChildErrors(scheduler),
    sourceFrom(observable),
  );

export const takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  /*@__PURE__*/ pipe(
    createTakeFirstObserver,
    createTakeFirstOperator(liftEnumerableObservableT),
  );

export const zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createZipWithLatestFromObserver: <TA, TB, T>(
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
      queue: TA[];
      selector: Function2<TA, TB, T>;
    };

    const notifyDelegate = (observer: TProperties & ObserverLike<TA>) => {
      if (getLength(observer.queue) > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift() as TA;
        const result = observer.selector(next, observer.otherLatest as TB);
        pipe(observer.delegate, notify(result));
      }
    };

    return createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedObserverMixin),
        function ZipWithLatestFromObserer(
          this: TProperties & ObserverLike<TA>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(disposableMixin, this);
          init(typedObserverMixin, this, getScheduler(delegate));

          this.delegate = delegate;
          this.queue = [];
          this.selector = selector;

          const disposeDelegate = () => {
            if (isDisposed(this) && isDisposed(otherSubscription)) {
              pipe(delegate, dispose());
            }
          };

          const otherSubscription = pipe(
            other,
            forEach(otherLatest => {
              this.hasLatest = true;
              this.otherLatest = otherLatest;
              notifyDelegate(this);

              if (isDisposed(this) && isEmpty(this.queue)) {
                pipe(this.delegate, dispose());
              }
            }),
            subscribe(getScheduler(delegate)),
            onComplete(disposeDelegate),
            addTo(delegate),
          );

          return pipe(this, addTo(delegate), onComplete(disposeDelegate));
        },
        {
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          queue: none,
          selector: none,
        },
        {
          [SinkLike_notify](this: TProperties & ObserverLike<TA>, next: TA) {
            this.queue.push(next);
            notifyDelegate(this);
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
      createZipWithLatestFromObserver,
      partial(other, selector),
      lift,
    ) as ContainerOperator<ObservableLike, TA, T>;
  };
})();
