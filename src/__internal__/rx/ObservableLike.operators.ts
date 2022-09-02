import {
  Concat,
  ContainerOperator,
  DistinctUntilChanged,
  ForEach,
  Scan,
  TakeFirst,
} from "../../containers";
import { every, map as mapArray } from "../../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Option,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  isEmpty,
  isTrue,
  none,
  partial,
  pipe,
} from "../../functions";
import {
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_scheduler,
  RunnableObservableLike,
  SinkLike_notify,
} from "../../rx";
import { getScheduler } from "../../rx/ObserverLike";
import { notify, sourceFrom } from "../../rx/SinkLike";
import { create as createSubject, publishTo } from "../../rx/SubjectLike";
import { SchedulerLike } from "../../scheduling";
import { DisposableLike, DisposableOrTeardown } from "../../util";
import {
  TReactive,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createScanOperator,
  createTakeFirstOperator,
} from "../containers/StatefulContainerLike.internal";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../mixins";
import { disposableMixin } from "../util/DisposableLike.mixins";
import {
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  isDisposed,
  onComplete,
} from "../util/DisposableLike.operators";
import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "./ObservableLike.create";
import {
  liftEnumerableObservable,
  liftEnumerableObservableT,
  liftObservable,
  liftRunnableObservable,
} from "./ObservableLike.lift";
import {
  createDelegatingObserver,
  createObserver,
  observerMixin,
} from "./ObserverLike.internal";
import { createOnSink } from "./ReactiveContainerLike.createOnSink";
import {
  distinctUntilChangedSinkMixin,
  forEachSinkMixin,
  scanSinkMixin,
  takeFirstSinkMixin,
} from "./SinkLike.mixins";

export const allAreEnumerable = compose(
  mapArray((obs: ObservableLike) => obs[ObservableLike_isEnumerable]),
  every(isTrue),
);

export const allAreRunnable = compose(
  mapArray((obs: ObservableLike) => obs[ObservableLike_isRunnable]),
  every(isTrue),
);

export const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const typedDistinctUntilChangedSinkMixin =
        distinctUntilChangedSinkMixin<T>();
      const typedObserverMixin = observerMixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
          function DistinctUntilChangedObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(
              typedDistinctUntilChangedSinkMixin,
              instance,
              delegate,
              equality,
            );

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createDistinctUntilChangedObserver,
      createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
        liftEnumerableObservableT,
      ),
    );
  })();

export const forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const createForEachObserver: <T>(
    delegate: ObserverLike<T>,
    effect: SideEffect1<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedForEachSinkMixin = forEachSinkMixin<T>();
    const typedObserverMixin = observerMixin<T>();

    return createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedForEachSinkMixin),
        function ForEachObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          effect: SideEffect1<T>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedForEachSinkMixin, instance, delegate, effect);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createForEachObserver,
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();

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

export const scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (() => {
  const createScanObserver: <T, TAcc>(
    delegat: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (<T, TAcc>() => {
    const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

    const typedObserverMixin = observerMixin<T>();

    return createInstanceFactory(
      mixin(
        include(typedObserverMixin, typedScanSinkMixin),
        function ScanObserver(
          instance: unknown,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedScanSinkMixin, instance, delegate, reducer, initialValue);

          return instance;
        },
      ),
    );
  })();
  return pipe(
    createScanObserver,
    createScanOperator(liftEnumerableObservableT),
  );
})();

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
  /*@__PURE__*/ (() => {
    const createTakeFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();
      const typedObserverMixin = observerMixin<T>();

      return createInstanceFactory(
        mixin(
          include(typedObserverMixin, typedTakeFirstSinkMixin),
          function TakeFirstObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            takeCount: number,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedTakeFirstSinkMixin, instance, delegate, takeCount);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createTakeFirstObserver,
      createTakeFirstOperator(liftEnumerableObservableT),
    );
  })();

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

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Option<TB>;
      readonly queue: TA[];
      readonly selector: Function2<TA, TB, T>;
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
      mixin(
        include(disposableMixin, typedObserverMixin),
        function ZipWithLatestFromObserer(
          instance: Pick<ObserverLike, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(disposableMixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.queue = [];
          instance.selector = selector;

          const disposeDelegate = () => {
            if (isDisposed(instance) && isDisposed(otherSubscription)) {
              pipe(delegate, dispose());
            }
          };

          const otherSubscription = pipe(
            other,
            forEach(otherLatest => {
              instance.hasLatest = true;
              instance.otherLatest = otherLatest;
              notifyDelegate(instance);

              if (isDisposed(instance) && isEmpty(instance.queue)) {
                pipe(instance.delegate, dispose());
              }
            }),
            subscribe(getScheduler(delegate)),
            onComplete(disposeDelegate),
            addTo(delegate),
          );

          pipe(instance, addTo(delegate), onComplete(disposeDelegate));

          return instance;
        },
        props<TProperties>({
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          queue: none,
          selector: none,
        }),
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
