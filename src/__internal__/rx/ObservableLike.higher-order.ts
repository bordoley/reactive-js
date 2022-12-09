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
import { DisposableLike } from "../../util";
import { addTo } from "../../util/__internal__/DisposableLike/DisposableLike.addTo";
import { dispose } from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import { disposed } from "../../util/__internal__/DisposableLike/DisposableLike.disposed";
import { isDisposed } from "../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import { onComplete } from "../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { MAX_SAFE_INTEGER } from "../constants";
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
  DisposableRefLike,
  createDisposableRef,
} from "../util/DisposableRefLike";
import { MutableRefLike_current } from "../util/MutableRefLike";
import { lift as liftEnumerableObservable } from "./EnumerableObservableLike.lift";
import {
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
} from "./ObservableLike.create";
import { liftObservable } from "./ObservableLike.lift";
import {
  forEach,
  onSubscribe,
  subscribe,
  takeFirst,
  zipWithLatestFrom,
} from "./ObservableLike.operators";
import { observerMixin } from "./ObserverLike.internal";
import { lift as liftRunnableObservable } from "./RunnableObservableLike.lift";
import { catchErrorSinkMixin } from "./SinkLike.mixins";

const createCatchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = catchErrorSinkMixin<C, ObserverLike<T>, T>();
    const typedObserverMixin = observerMixin<T>();

    return createInstanceFactory(
      mixin(
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
    liftEnumerableObservable,
  ) as CatchError<EnumerableObservableLike>["catchError"];

export const catchErrorObservable: CatchError<ObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<ObservableLike>(
    liftObservable,
  ) as CatchError<ObservableLike>["catchError"];

export const catchErrorRunnableObservable: CatchError<RunnableObservableLike>["catchError"] =
  /*@__PURE__*/ createCatchError<RunnableObservableLike>(
    liftRunnableObservable,
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
    const typedObserverMixin = observerMixin<ContainerOf<C, T>>();

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
      mixin(
        include(disposableMixin, typedObserverMixin),
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
          init(disposableMixin, instance);
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
            addTo(delegate),
            onComplete(() => {
              if (isDisposed(delegate)) {
                instance.queue.length = 0;
              } else if (
                getLength(instance.queue) + instance.activeCount ===
                0
              ) {
                pipe(instance.delegate, dispose());
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
  liftEnumerableObservable,
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
  liftRunnableObservable,
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
        const accFeedbackStream = pipe(createSubject(), addTo(observer));

        pipe(
          observable,
          zipWithLatestFrom(accFeedbackStream, (next, acc: TAcc) =>
            pipe(scanner(acc, next), takeFirst()),
          ),
          switchAllObservable(),
          forEach(publishTo(accFeedbackStream)),
          onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))),
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
>(createEnumerableObservable);

export const scanAsyncObservable: ScanAsync<
  ObservableLike,
  ObservableLike
>["scanAsync"] = createScanAsync<ObservableLike, ObservableLike>(
  createObservable,
);

export const scanAsyncRunnableObservable: ScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>["scanAsync"] = createScanAsync<
  RunnableObservableLike,
  RunnableObservableLike
>(createRunnableObservable);

const createSwitchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = observerMixin<ContainerOf<C, T>>();

    type TProperties = {
      readonly currentRef: DisposableRefLike;
      readonly delegate: ObserverLike<T>;
    };

    function onDispose(this: TProperties & DisposableLike) {
      if (isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, dispose());
      }
    }

    return createInstanceFactory(
      mixin(
        include(disposableMixin, typedObserverMixin),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(disposableMixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.currentRef = pipe(
            createDisposableRef(disposed),
            addTo(delegate),
          );

          pipe(instance, addTo(delegate), onComplete(onDispose));

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
  })();

  return () => lift(createSwitchAllObserver);
};

export const switchAllEnumerableObservable: ConcatAll<EnumerableObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<EnumerableObservableLike>(
    liftEnumerableObservable,
  );

export const switchAllObservable: ConcatAll<ObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<ObservableLike>(liftObservable);

export const switchAllRunnableObservable: ConcatAll<RunnableObservableLike>["concatAll"] =
  /*@__PURE__*/ createSwitchAll<RunnableObservableLike>(liftRunnableObservable);
