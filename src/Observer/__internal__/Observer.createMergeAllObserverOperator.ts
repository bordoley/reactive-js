import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __MergeAllObserver_activeCount,
  __MergeAllObserver_concurrency,
  __MergeAllObserver_observablesQueue,
  __MergeAllObserver_onDispose,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../__internal__/types.js";
import {
  Function1,
  Optional,
  SideEffect,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  CollectionLike_count,
  DeferredObservableBaseLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObservableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../types.js";

const Observer_createMergeAllObserverOperator: <T>(options?: {
  readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  readonly capacity?: number;
  readonly concurrency?: number;
}) => Function1<ObserverLike<T>, ObserverLike<DeferredObservableBaseLike<T>>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [__MergeAllObserver_activeCount]: number;
      readonly [__MergeAllObserver_concurrency]: number;
      readonly [__MergeAllObserver_onDispose]: SideEffect;
      readonly [__MergeAllObserver_observablesQueue]: IndexedQueueLike<
        DeferredObservableBaseLike<T>
      >;
    };

    const subscribeToObservable = (
      observer: ObserverLike<DeferredObservableBaseLike<T>> &
        DelegatingLike<ObserverLike<T>> &
        TProperties,
      nextObs: ObservableLike<T>,
    ) => {
      observer[__MergeAllObserver_activeCount]++;

      pipe(
        nextObs,
        Observable_forEach(
          bindMethod(observer[DelegatingLike_delegate], SinkLike_notify),
        ),
        Observable_subscribeWithConfig(
          observer[DelegatingLike_delegate],
          observer,
        ),
        Disposable_addTo(observer[DelegatingLike_delegate]),
        Disposable_onComplete(observer[__MergeAllObserver_onDispose]),
      );
    };

    const createMergeAllObserver = createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          Observer_mixin<DeferredObservableBaseLike<T>>(),
          Delegating_mixin(),
        ),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<DeferredObservableBaseLike<T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          capacity: number,
          backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
          concurrency: number,
        ): ObserverLike<DeferredObservableBaseLike<T>> {
          init(Disposable_mixin, instance);
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
              subscribeToObservable(instance, nextObs);
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
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<DeferredObservableBaseLike<T>> &
              DelegatingLike<ObserverLike<T>> &
              QueueLike<DeferredObservableBaseLike<T>>,
            next: DeferredObservableBaseLike<T>,
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

    return (
      options: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
      } = {},
    ) => {
      const concurrency = clampPositiveNonZeroInteger(
        options.concurrency ?? MAX_SAFE_INTEGER,
      );

      const capacity = clampPositiveInteger(
        options.capacity ?? MAX_SAFE_INTEGER,
      );

      return (observer: ObserverLike<T>) =>
        createMergeAllObserver(
          observer,
          capacity,
          options.backpressureStrategy ?? "overflow",
          concurrency,
        );
    };
  })();

export default Observer_createMergeAllObserverOperator;
