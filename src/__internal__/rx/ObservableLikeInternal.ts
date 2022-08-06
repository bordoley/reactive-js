import { Concat, DistinctUntilChanged, ForEach, Scan } from "../../containers";
import { map as mapArray } from "../../containers/ReadonlyArrayLike";
import {
  Function1,
  getLength,
  min,
  newInstance,
  pipe,
  pipeUnsafe,
} from "../../functions";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observableType,
  ObservableType,
  ReactiveContainerLike_sinkInto,
  createObservable,
  createSubject,
} from "../../rx";
import { publishTo } from "../../rx/SubjectLike";
import { ObserverLike, SchedulerLike } from "../../scheduling";
import { SinkLike_notify } from "../../util";
import { sourceFrom } from "../../util/SinkLike";
import {
  Lift,
  TReactive,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createScanOperator,
  reactive,
} from "../containers/StatefulContainerLikeInternal";
import {
  createDelegatingObserver,
  createDistinctUntilChangedObserver,
  createForEachObserver,
  createScanObserver,
  observerMixin,
} from "../scheduling/ObserverLikeMixin";
import {
  DisposableLike,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  onComplete,
} from "../util/DisposableLikeInternal";
import { disposableMixin } from "../util/DisposableLikeMixins";
import { __extends, clazz, createInstanceFactory, init } from "../util/Object";

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];

export const getMinObservableType = (
  observables: readonly ObservableLike[],
): ObservableType =>
  pipe(observables, mapArray(getObservableType), x =>
    min(...x),
  ) as ObservableType;

const createLift: (
  observableType: 0 | 1 | 2,
) => Lift<ObservableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
    [ObservableLike_observableType]: ObservableType;

    constructor(
      readonly source: ObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
      observableType: ObservableType,
    ) {
      this[ObservableLike_observableType] = observableType;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
  }

  return (observableType: ObservableType) =>
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

      const type = min(
        observableType,
        getObservableType(source),
        getObservableType(sourceSource),
      );

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        type as ObservableType,
      );
    };
})();

export const liftObservable = createLift(0);
export const liftRunnableObservable = createLift(1);
export const liftEnumerableObservable = createLift(2);
export const liftEnumerableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
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

    const type = getMinObservableType(observables);
    return createObservable(onSink, { type });
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

export const scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ pipe(
  createScanObserver,
  createScanOperator(liftEnumerableObservableT),
);

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  const createObserver = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedObserverMixin),
      function SubscribeObserver(
        this: ObserverLike<T>,
        scheduler: SchedulerLike,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);

        return this;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  );
  return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
    pipe(
      scheduler,
      createObserver,
      addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );
})();
