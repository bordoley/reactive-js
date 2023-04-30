import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __MergeAllObserver_activeCount,
  __MergeAllObserver_concurrency,
  __MergeAllObserver_observablesQueue,
  __MergeAllObserver_onDispose,
} from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
import { ContainerOf, ContainerOperator } from "../../../containers.js";
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
  MergeAll,
  ObservableContainerLike,
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
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_mergeAll = <C extends ObservableContainerLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): MergeAll<C>["mergeAll"] => {
  const createMergeAllObserver: <T>(
    delegate: ObserverLike<T>,
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
    concurrency: number,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    type TProperties = {
      [__MergeAllObserver_activeCount]: number;
      readonly [__MergeAllObserver_concurrency]: number;
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
        Observable_forEach<ObservableContainerLike, T>(
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
        include(Observer_mixin<ContainerOf<C, T>>(), Delegating_mixin()),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          capacity: number,
          backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
          concurrency: number,
        ): ObserverLike<ContainerOf<C, T>> {
          Observer_mixin_initFromDelegate(instance, delegate);
          init(Delegating_mixin<ObserverLike<T>>(), instance, delegate);

          instance[__MergeAllObserver_observablesQueue] =
            Queue_createIndexedQueue(capacity, backpressureStrategy);
          instance[__MergeAllObserver_concurrency] = concurrency;

          instance[__MergeAllObserver_activeCount] = 0;
          instance[__MergeAllObserver_onDispose] = () => {
            instance[__MergeAllObserver_activeCount]--;
            const nextObs: Optional<ObservableLike<T>> =
              instance[__MergeAllObserver_observablesQueue][
                QueueLike_dequeue
              ]();

            if (isSome(nextObs)) {
              subscribeToObservable<T>(instance, nextObs);
            } else if (
              instance[DisposableLike_isDisposed] &&
              instance[__MergeAllObserver_activeCount] <= 0
            ) {
              instance[DelegatingLike_delegate][DisposableLike_dispose]();
            }
          };

          pipe(
            instance,
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
          [__MergeAllObserver_concurrency]: 0,
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
              this[__MergeAllObserver_concurrency]
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
      readonly concurrency?: number;
    } = {},
  ): ContainerOperator<C, ContainerOf<C, T>, T> => {
    const concurrency = clampPositiveNonZeroInteger(
      options.concurrency ?? MAX_SAFE_INTEGER,
    );

    const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);

    const f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>> = pipe(
      createMergeAllObserver,
      partial(
        capacity,
        options.backpressureStrategy ?? "overflow",
        concurrency,
      ),
    );

    return lift(f);
  };
};

export default HigherOrderObservable_mergeAll;
