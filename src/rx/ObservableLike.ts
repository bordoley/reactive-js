import {
  Lift,
  TReactive,
  createForEachOperator,
  createMapOperator,
  reactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import { observerMixin } from "../__internal__/scheduling/ObserverLikeMixin";
import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  forEachSinkMixin,
  mapSinkMixin,
} from "../__internal__/util/SinkLikeMixin";
import { ContainerOperator, ForEach, Map, ToPromise } from "../containers";
import {
  Function1,
  Option,
  SideEffect1,
  isSome,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
} from "../functions";
import {
  DefaultObservable,
  EnumerableObservable,
  ObservableLike,
  ObservableLike_observableType,
  ReactiveContainerLike_sinkInto,
  RunnableObservable,
} from "../rx";
import {
  ObserverLike,
  ObserverLike_scheduler,
  SchedulerLike,
} from "../scheduling";
import { DisposableLike, SinkLike_notify } from "../util";
import { addTo, onDisposed } from "../util/DisposableLike";
import { sourceFrom } from "./ReactiveContainerLike";

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];

const lift: Lift<ObservableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
    [ObservableLike_observableType]:
      | typeof DefaultObservable
      | typeof RunnableObservable
      | typeof EnumerableObservable;

    constructor(
      readonly source: ObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
      observableType:
        | typeof DefaultObservable
        | typeof RunnableObservable
        | typeof EnumerableObservable,
    ) {
      this[ObservableLike_observableType] = observableType;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(
        observer,
        ...this.operators,
        sourceFrom(this.source),
      ) as ObserverLike<any>;
    }
  }

  return <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): ContainerOperator<ObservableLike, TA, TB> =>
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
        0 as typeof DefaultObservable,
      );
    };
})();

const liftT: Lift<ObservableLike, TReactive> = {
  lift,
  variance: reactive,
};

export const forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedForEachSinkMixin]
  >;

  return pipe(
    clazz(
      function ForEachObserver(
        this: TProperties & DisposableLike,
        delegate: ObserverLike<T>,
        effect: SideEffect1<T>,
      ) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, this, delegate, effect);
      },
      {},
      {},
    ),
    mixWith(typedObserverMixin, typedForEachSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, SideEffect1<T>>(),
    createForEachOperator<ObservableLike, T, TReactive>(liftT),
  );
})();

export const map: Map<ObservableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();
  const typedObserverMixin = observerMixin<TA>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedMapSinkMixin]
  >;

  return pipe(
    clazz(
      function MapObserver(
        this: TProperties,
        delegate: ObserverLike<TB>,
        mapper: Function1<TA, TB>,
      ) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, this, delegate, mapper);
      },
      {},
      {},
    ),
    mixWith(typedObserverMixin, typedMapSinkMixin),
    createObjectFactory<
      ObserverLike<TA>,
      ObserverLike<TB>,
      Function1<TA, TB>
    >(),
    createMapOperator<ObservableLike, TA, TB, TReactive>(liftT),
  );
})();

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  const createObserver = pipe(
    clazz(
      function SubscribeObserver(this, scheduler: SchedulerLike) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
    mixWith(disposableMixin, typedObserverMixin),
    createObjectFactory<ObserverLike, SchedulerLike>(),
  );
  return (scheduler: SchedulerLike) => observable =>
    pipe(scheduler, createObserver, addTo(scheduler), sourceFrom(observable));
})();

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"] =
  <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, Promise<T>> =>
  observable =>
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
        forEach(next => {
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
