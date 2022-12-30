import {
  CatchError,
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../containers";
import {
  Factory,
  Function1,
  SideEffect,
  SideEffect1,
  getLength,
  isSome,
  none,
  partial,
  pipe,
} from "../../functions";
import {
  AsyncReducer,
  EnumerableObservableLike,
  ObservableLike,
  ObserverLike,
  RunnableObservableLike,
  ScanAsync,
  SinkLike_notify,
} from "../../rx";
import { getScheduler } from "../../rx/ObserverLike";
import { sinkInto } from "../../rx/ReactiveContainerLike";
import { notifySink } from "../../rx/SinkLike";
import {
  create as createSubject,
  publish,
  publishTo,
} from "../../rx/SubjectLike";
import EnumerableObservableLike__create from "../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import EnumerableObservableLike__lift from "../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.lift";
import ObservableLike__create from "../../rx/__internal__/ObservableLike/ObservableLike.create";
import ObservableLike__forEach from "../../rx/__internal__/ObservableLike/ObservableLike.forEach";
import ObservableLike__onSubscribe from "../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe";
import ObservableLike__subscribe from "../../rx/__internal__/ObservableLike/ObservableLike.subscribe";
import ObservableLike__takeFirst from "../../rx/__internal__/ObservableLike/ObservableLike.takeFirst";
import ObservableLike__zipWithLatestFrom from "../../rx/__internal__/ObservableLike/ObservableLike.zipWithLatestFrom";
import ObserverLike__mixin from "../../rx/__internal__/ObserverLike/ObserverLike.mixin";
import RunnableObservableLike__create from "../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import RunnableObservableLike__lift from "../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.lift";
import SinkLike__catchErrorMixin from "../../rx/__internal__/SinkLike/SinkLike.catchErrorMixin";
import { DisposableLike } from "../../util";
import DisposableLike__addTo from "../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { MAX_SAFE_INTEGER } from "../constants";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../mixins";
import {
  DisposableRefLike,
  createDisposableRef,
} from "../util/DisposableRefLike";
import { MutableRefLike_current } from "../util/MutableRefLike";
import { liftObservable } from "./ObservableLike.lift";

const createCatchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = SinkLike__catchErrorMixin<
      C,
      ObserverLike<T>,
      T
    >();
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedCatchErrorSink, typedObserverMixin),
        function CatchErrorObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ObservableLike<T> | void>,
        ): ObserverLike<T> {
          init(typedCatchErrorSink, instance, delegate, errorHandler);
          init(typedObserverMixin, instance, getScheduler(delegate));

          return instance;
        },
      ),
    );
  })();

  return (<T>(errorHandler: Function1<unknown, ObservableLike<T> | void>) =>
    pipe(
      createCatchErrorObserver,
      partial(errorHandler),
      lift,
    )) as CatchError<C>["catchError"];
};

export const catchErrorEnumerableObservable: CatchError<EnumerableObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<EnumerableObservableLike>(
    EnumerableObservableLike__lift,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export const catchErrorObservable: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<ObservableLike>(
    liftObservable,
  ) as CatchError<ObservableLike>["catchError"];

export const catchErrorRunnableObservable: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<RunnableObservableLike>(
    RunnableObservableLike__lift,
  ) as CatchError<RunnableObservableLike>["catchError"];

const createMergeAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createMergeAllObserver: <T>(
    delegate: ObserverLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<ContainerOf<C, T>>();

    type TProperties = {
      activeCount: number;
      readonly delegate: ObserverLike<T>;
      readonly maxBufferSize: number;
      readonly maxConcurrency: number;
      readonly onDispose: SideEffect;
      readonly queue: ContainerOf<C, T>[];
    };

    const subscribeNext = <T>(
      observer: TProperties & ObserverLike<ContainerOf<C, T>>,
    ) => {
      if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();

        if (isSome(nextObs)) {
          observer.activeCount++;

          pipe(
            nextObs,
            ObservableLike__forEach(notifySink(observer.delegate)),
            ObservableLike__subscribe(getScheduler(observer)),
            DisposableLike__addTo(observer.delegate),
            DisposableLike__onComplete(observer.onDispose),
          );
        } else if (DisposableLike__isDisposed(observer)) {
          pipe(observer.delegate, DisposableLike__dispose());
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function Observer(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          maxBufferSize: number,
          maxConcurrency: number,
        ): ObserverLike<ContainerOf<C, T>> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.maxBufferSize = maxBufferSize;
          instance.maxConcurrency = maxConcurrency;

          instance.activeCount = 0;
          instance.onDispose = () => {
            instance.activeCount--;
            subscribeNext(instance);
          };
          instance.queue = [];

          pipe(
            instance,
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(() => {
              if (DisposableLike__isDisposed(delegate)) {
                instance.queue.length = 0;
              } else if (
                getLength(instance.queue) + instance.activeCount ===
                0
              ) {
                pipe(instance.delegate, DisposableLike__dispose());
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          activeCount: 0,
          delegate: none,
          maxBufferSize: 0,
          maxConcurrency: 0,
          onDispose: none,
          queue: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties & ObserverLike<ContainerOf<C, T>>,
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

export const mergeAllEnumerableObservable: ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ createMergeAll<EnumerableObservableLike>(
  EnumerableObservableLike__lift,
) as ConcatAll<
  EnumerableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

export const mergeAllObservable: ConcatAll<
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

export const mergeAllRunnableObservable: ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] = /*@__PURE__*/ createMergeAll<RunnableObservableLike>(
  RunnableObservableLike__lift,
) as ConcatAll<
  RunnableObservableLike,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"];

const createScanAsync = <
  C extends ObservableLike,
  CInner extends ObservableLike,
>(
  createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
): ScanAsync<C, CInner>["scanAsync"] => {
  return <T, TAcc>(
      scanner: AsyncReducer<CInner, T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ContainerOperator<C, T, TAcc> =>
    observable => {
      const onSink = (observer: ObserverLike<TAcc>) => {
        const accFeedbackStream = pipe(
          createSubject(),
          DisposableLike__addTo(observer),
        );

        pipe(
          observable,
          ObservableLike__zipWithLatestFrom(
            accFeedbackStream,
            (next, acc: TAcc) =>
              pipe(scanner(acc, next), ObservableLike__takeFirst()),
          ),
          switchAllObservable(),
          ObservableLike__forEach(publishTo(accFeedbackStream)),
          ObservableLike__onSubscribe(() =>
            pipe(accFeedbackStream, publish(initialValue())),
          ),
          sinkInto(observer),
        );
      };

      return createObservable(onSink);
    };
};

export const scanAsyncEnumerableObservable: ScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>["scanAsync"] = createScanAsync<
  EnumerableObservableLike,
  EnumerableObservableLike
>(EnumerableObservableLike__create);

export const scanAsyncObservable: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = createScanAsync<ObservableLike, ObservableLike>(
  ObservableLike__create,
);

export const scanAsyncRunnableObservable: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = createScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(RunnableObservableLike__create);

const createSwitchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<ContainerOf<C, T>>();

    type TProperties = {
      readonly currentRef: DisposableRefLike;
      readonly delegate: ObserverLike<T>;
    };

    function onDispose(this: TProperties & DisposableLike) {
      if (DisposableLike__isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, DisposableLike__dispose());
      }
    }

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.currentRef = pipe(
            createDisposableRef(DisposableLike__disposed),
            DisposableLike__addTo(delegate),
          );

          pipe(
            instance,
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(onDispose),
          );

          return instance;
        },
        props<TProperties>({
          currentRef: none,
          delegate: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DisposableRefLike,
            next: ContainerOf<C, T>,
          ) {
            this.currentRef[MutableRefLike_current] = pipe(
              next,
              ObservableLike__forEach(notifySink(this.delegate)),
              ObservableLike__subscribe(getScheduler(this)),
              DisposableLike__onComplete(() => {
                if (DisposableLike__isDisposed(this)) {
                  pipe(this.delegate, DisposableLike__dispose());
                }
              }),
            );
          },
        },
      ),
    );
  })();

  return () => lift(createSwitchAllObserver);
};

export const switchAllEnumerableObservable: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<EnumerableObservableLike>(
    EnumerableObservableLike__lift,
  );

export const switchAllObservable: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<ObservableLike>(liftObservable);

export const switchAllRunnableObservable: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<RunnableObservableLike>(
    RunnableObservableLike__lift,
  );
