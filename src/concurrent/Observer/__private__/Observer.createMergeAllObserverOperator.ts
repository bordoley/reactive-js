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
import { CollectionLike_count } from "../../../collections.js";
import {
  DeferredSideEffectsObservableLike,
  ObservableLike,
  ObserverLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Function1,
  Optional,
  SideEffect,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";

const Observer_createMergeAllObserverOperator: <T>(options?: {
  readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  readonly capacity?: number;
  readonly concurrency?: number;
}) => Function1<
  ObserverLike<T>,
  ObserverLike<DeferredSideEffectsObservableLike<T>>
> = /*@__PURE__*/ (<T>() => {
  const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
  const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
  const MergeAllObserver_delegate = Symbol("MergeAllObserver_delegate");
  const MergeAllObserver_onDispose = Symbol("MergeAllObserver_onDispose");
  const MergeAllObserver_observablesQueue = Symbol(
    "MergeAllObserver_observablesQueue",
  );

  type TProperties = {
    [MergeAllObserver_activeCount]: number;
    readonly [MergeAllObserver_concurrency]: number;
    readonly [MergeAllObserver_delegate]: ObserverLike<T>;
    readonly [MergeAllObserver_onDispose]: SideEffect;
    readonly [MergeAllObserver_observablesQueue]: IndexedQueueLike<
      ObservableLike<T>
    >;
  };

  const subscribeToObservable = (
    observer: ObserverLike<ObservableLike<T>> & TProperties,
    nextObs: ObservableLike<T>,
  ) => {
    observer[MergeAllObserver_activeCount]++;

    pipe(
      nextObs,
      Observable_forEach(
        bindMethod(observer[MergeAllObserver_delegate], SinkLike_notify),
      ),
      Observable_subscribeWithConfig(
        observer[MergeAllObserver_delegate],
        observer,
      ),
      Disposable.addTo(observer[MergeAllObserver_delegate]),
      Disposable.onComplete(observer[MergeAllObserver_onDispose]),
    );
  };

  const createMergeAllObserver = createInstanceFactory(
    mix(
      include(
        DisposableMixin,
        ObserverMixin<DeferredSideEffectsObservableLike<T>>(),
      ),
      function MergeAllObserver(
        instance: Pick<
          ObserverLike<DeferredSideEffectsObservableLike<T>>,
          typeof SinkLike_notify
        > &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
        concurrency: number,
      ): ObserverLike<ObservableLike<T>> {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[MergeAllObserver_observablesQueue] = IndexedQueue.create(
          capacity,
          backpressureStrategy,
        );
        instance[MergeAllObserver_concurrency] = concurrency;
        instance[MergeAllObserver_delegate] = delegate;

        instance[MergeAllObserver_activeCount] = 0;
        instance[MergeAllObserver_onDispose] = () => {
          instance[MergeAllObserver_activeCount]--;
          const nextObs: Optional<ObservableLike<T>> =
            instance[MergeAllObserver_observablesQueue][QueueLike_dequeue]();

          if (isSome(nextObs)) {
            subscribeToObservable(instance, nextObs);
          } else if (
            instance[DisposableLike_isDisposed] &&
            instance[MergeAllObserver_activeCount] <= 0
          ) {
            instance[MergeAllObserver_delegate][DisposableLike_dispose]();
          }
        };

        pipe(
          instance,
          Disposable.onComplete(() => {
            if (delegate[DisposableLike_isDisposed]) {
              // FIXME: Clear the queue
            } else if (
              instance[MergeAllObserver_observablesQueue][
                CollectionLike_count
              ] +
                instance[MergeAllObserver_activeCount] ===
              0
            ) {
              delegate[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [MergeAllObserver_activeCount]: 0,
        [MergeAllObserver_concurrency]: 0,
        [MergeAllObserver_delegate]: none,
        [MergeAllObserver_onDispose]: none,
        [MergeAllObserver_observablesQueue]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            ObserverLike<DeferredSideEffectsObservableLike<T>> &
            QueueLike<DeferredSideEffectsObservableLike<T>>,
          next: DeferredSideEffectsObservableLike<T>,
        ) {
          Observer_assertState(this);

          if (
            this[MergeAllObserver_activeCount] <
            this[MergeAllObserver_concurrency]
          ) {
            subscribeToObservable(this, next);
          } else {
            this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](
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

    const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);

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
