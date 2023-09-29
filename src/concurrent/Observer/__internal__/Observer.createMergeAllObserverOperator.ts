import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
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
  Function1,
  Optional,
  SideEffect,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import { DeferredObservableLike, ObserverLike } from "../../../concurrent.js";
import { CollectionLike_count } from "../../../collections.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  IndexedQueueLike,
  QueueLike_dequeue,
  DisposableLike_isDisposed,
  DisposableLike_dispose,
  QueueLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";

const Observer_createMergeAllObserverOperator: <T>(options?: {
  readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  readonly capacity?: number;
  readonly concurrency?: number;
}) => Function1<ObserverLike<T>, ObserverLike<DeferredObservableLike<T>>> =
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
      observer: ObserverLike<DeferredObservableLike<T>> &
        DelegatingLike<ObserverLike<T>> &
        TProperties,
      nextObs: DeferredObservableLike<T>,
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
        Disposable.addTo(observer[DelegatingLike_delegate]),
        Disposable.onComplete(observer[__MergeAllObserver_onDispose]),
      );
    };

    const createMergeAllObserver = createInstanceFactory(
      mix(
        include(DisposableMixin, ObserverMixin<DeferredObservableLike<T>>()),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<DeferredObservableLike<T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          capacity: number,
          backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
          concurrency: number,
        ): ObserverLike<DeferredObservableBaseLike<T>> {
          init(DisposableMixin, instance);
          Observer_mixin_initFromDelegate(instance, delegate);

          instance[__MergeAllObserver_observablesQueue] =
            Queue_createIndexedQueue(capacity, backpressureStrategy);
          instance[__MergeAllObserver_concurrency] = concurrency;

          instance[__MergeAllObserver_activeCount] = 0;
          instance[__MergeAllObserver_onDispose] = () => {
            instance[__MergeAllObserver_activeCount]--;
            const nextObs: Optional<DeferredObservableBaseLike<T>> =
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
            Disposable.onComplete(() => {
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
              ObserverLike<DeferredObservableLike<T>> &
              DelegatingLike<ObserverLike<T>> &
              QueueLike<DeferredObservableLike<T>>,
            next: DeferredObservableLike<T>,
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
