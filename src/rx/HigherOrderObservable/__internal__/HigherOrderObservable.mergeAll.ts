import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../__internal__/math.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __MergeAllObserver_activeCount,
  __MergeAllObserver_maxConcurrency,
  __MergeAllObserver_observablesQueue,
  __MergeAllObserver_onDispose,
} from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
import {
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import {
  Function1,
  Optional,
  SideEffect,
  bindMethod,
  isSome,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_mergeAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<
  C,
  {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] => {
  const createMergeAllObserver: <T>(
    delegate: ObserverLike<T>,
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
    maxConcurrency: number,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    type TProperties = {
      [__MergeAllObserver_activeCount]: number;
      readonly [__MergeAllObserver_maxConcurrency]: number;
      readonly [__MergeAllObserver_onDispose]: SideEffect;
      readonly [__MergeAllObserver_observablesQueue]: IndexedQueueLike<
        ContainerOf<C, T>
      >;
    };

    const subscribeToObservable = <T>(
      observer: ObserverLike<ContainerOf<C, T>> &
        DelegatingLike<ObserverLike<T>> &
        TProperties,
      nextObs: ObservableLike<T>,
    ) => {
      observer[__MergeAllObserver_activeCount]++;

      pipe(
        nextObs,
        Observable_forEach<ObservableLike, T>(
          bindMethod(observer[DelegatingLike_delegate], ObserverLike_notify),
        ),
        Observable_subscribeWithConfig(
          observer[DelegatingLike_delegate],
          observer,
        ),
        Disposable_addTo(observer[DelegatingLike_delegate]),
        Disposable_onComplete(observer[__MergeAllObserver_onDispose]),
      );
    };

    return createInstanceFactory(
      mix(
        include(Observer_mixin<ContainerOf<C, T>>(), delegatingMixin()),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          capacity: number,
          backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
          maxConcurrency: number,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Observer_mixin(), instance, delegate, delegate);
          init(delegatingMixin<ObserverLike<T>>(), instance, delegate);

          instance[__MergeAllObserver_observablesQueue] =
            IndexedQueue_createFifoQueue(capacity, backpressureStrategy);
          instance[__MergeAllObserver_maxConcurrency] = maxConcurrency;

          instance[__MergeAllObserver_activeCount] = 0;
          instance[__MergeAllObserver_onDispose] = () => {
            instance[__MergeAllObserver_activeCount]--;
            const nextObs: Optional<ObservableLike<T>> =
              instance[__MergeAllObserver_observablesQueue][
                QueueLike_dequeue
              ]();

            if (isSome(nextObs)) {
              subscribeToObservable<T>(instance, nextObs);
            } else if (instance[DisposableLike_isDisposed]) {
              instance[DelegatingLike_delegate][DisposableLike_dispose]();
            }
          };

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              if (delegate[DisposableLike_isDisposed]) {
                // FIXME: Clear the queue
              } else if (
                instance[__MergeAllObserver_observablesQueue][
                  CollectionLike_count
                ] +
                  instance[__MergeAllObserver_activeCount] ===
                0
              ) {
                delegate[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [__MergeAllObserver_activeCount]: 0,
          [__MergeAllObserver_maxConcurrency]: 0,
          [__MergeAllObserver_onDispose]: none,
          [__MergeAllObserver_observablesQueue]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DelegatingLike<ObserverLike<T>> &
              QueueLike<ContainerOf<C, T>>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);

            if (
              this[__MergeAllObserver_activeCount] <
              this[__MergeAllObserver_maxConcurrency]
            ) {
              subscribeToObservable(this, next);
            } else {
              this[__MergeAllObserver_observablesQueue][QueueableLike_enqueue](
                next,
              );
            }
          },
        },
      ),
    );
  })();

  return <T>(
    options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly maxConcurrency?: number;
    } = {},
  ): ContainerOperator<C, ContainerOf<C, T>, T> => {
    const maxConcurrency = clampPositiveNonZeroInteger(
      options.maxConcurrency ?? MAX_SAFE_INTEGER,
    );

    const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);

    const f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>> = pipe(
      createMergeAllObserver,
      partial(
        capacity,
        options.backpressureStrategy ?? "overflow",
        maxConcurrency,
      ),
    );

    return lift(f);
  };
};

export default HigherOrderObservable_mergeAll;
