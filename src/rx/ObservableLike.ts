import {
  Lift,
  TReactive,
  createDecodeWithCharsetOperator,
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
  decodeWithCharsetSinkMixin,
  forEachSinkMixin,
  mapSinkMixin,
} from "../__internal__/util/SinkLikeMixin";
import {
  ContainerOperator,
  DecodeWithCharset,
  ForEach,
  Map,
  ToPromise,
} from "../containers";
import { toObservable as arrayToObservable } from "../containers/ReadonlyArrayLike";
import {
  Function1,
  Option,
  SideEffect1,
  isSome,
  min,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
} from "../functions";
import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_observableType,
  ObservableType,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
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

const createLift = /*@__PURE__*/ (() => {
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
      pipeUnsafe(
        observer,
        ...this.operators,
        sourceFrom(this.source),
      ) as ObserverLike<any>;
    }
  }

  return (observableType: ObservableType) =>
    <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): ContainerOperator<ObservableLike, TA, TB> =>
    source => {
      const sourceSource =
        source instanceof LiftedObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedObservable
          ? [operator, ...source.operators]
          : [operator];

      const type = min(
        observableType,
        source[ObservableLike_observableType],
        sourceSource[ObservableLike_observableType],
      );

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        type as ObservableType,
      );
    };
})();
/*
const lift: Lift<ObservableLike, TReactive>["lift"] = createLift(0);
const liftT: Lift<ObservableLike, TReactive> = {
  lift,
  variance: reactive,
};*/
/*
const liftRunnableObservable: Lift<RunnableObservableLike, TReactive>["lift"] =
  createLift(1);
const liftRunnableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftRunnableObservable,
  variance: reactive,
};*/

const liftEnumerableObservable: Lift<ObservableLike, TReactive>["lift"] =
  createLift(2);
const liftEnumerableObservableT: Lift<EnumerableObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

interface DecodeWithCharsetObservable {
  (charset?: string | undefined): ContainerOperator<
    ObservableLike,
    ArrayBuffer,
    string
  >;
  (charset?: string | undefined): ContainerOperator<
    RunnableObservableLike,
    ArrayBuffer,
    string
  >;
  (charset?: string | undefined): ContainerOperator<
    EnumerableObservableLike,
    ArrayBuffer,
    string
  >;
}
export const decodeWithCharset: DecodeWithCharsetObservable =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(
      arrayToObservable(),
    );
    const typedObserverMixin = observerMixin<ArrayBuffer>();

    type TProperties = PropertyTypeOf<
      [typeof typedObserverMixin, typeof typedDecodeWithCharsetMixin]
    >;

    return pipe(
      clazz(
        function DecodeWithCharsetObserver(
          this: TProperties & DisposableLike,
          delegate: ObserverLike<string>,
          charset: string,
        ) {
          init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
          init(typedDecodeWithCharsetMixin, this, delegate, charset);
        },
        {},
        {},
      ),
      mixWith(typedObserverMixin, typedDecodeWithCharsetMixin),
      createObjectFactory<
        ObserverLike<ArrayBuffer>,
        ObserverLike<string>,
        string
      >(),
      createDecodeWithCharsetOperator(liftEnumerableObservableT),
    );
  })();
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

interface ForEachObservable {
  <T>(effect: SideEffect1<T>): ContainerOperator<ObservableLike<unknown>, T, T>;
  <T>(effect: SideEffect1<T>): ContainerOperator<
    RunnableObservableLike<unknown>,
    T,
    T
  >;
  <T>(effect: SideEffect1<T>): ContainerOperator<
    EnumerableObservableLike<unknown>,
    T,
    T
  >;
}
export const forEach: ForEachObservable = /*@__PURE__*/ (<T>() => {
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
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const forEachT: ForEach<ObservableLike> = { forEach };

interface MapObservable {
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    ObservableLike,
    TA,
    TB
  >;
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    RunnableObservableLike,
    TA,
    TB
  >;
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    EnumerableObservableLike,
    TA,
    TB
  >;
}
export const map: MapObservable = /*@__PURE__*/ (<TA, TB>() => {
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
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const mapT: Map<ObservableLike> = { map };

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
