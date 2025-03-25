import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Function1, Optional, none } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import ObserverMixin, {
  ObserverMixinLike,
  ObserverMixinLike_complete,
  ObserverMixinLike_consumer,
  ObserverMixinLike_notify,
} from "../__mixins__/ObserverMixin.js";
import QueueMixin from "../__mixins__/QueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    SinkLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
  >;
  const createQueue = mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function ConsumerQueue(
      this: TPrototype,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerLike<T> & QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
    props(),
    proto<TPrototype>({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: QueueLike<T>, item: T) {
        if (!this[DisposableLike_isDisposed]) {
          this[QueueLike_enqueue](item);
        }
      },

      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );

  return (options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) => createQueue(options);
})();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<ConsumerLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  const createConsumerToObserver = mixInstanceFactory(
    include(DelegatingDisposableMixin, ObserverMixin()),
    function ConsumerToObserver(
      this: unknown,
      scheduler: SchedulerLike,
      consumer: ConsumerLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(
        ObserverMixin<T, ConsumerLike<T>>(),
        this,
        consumer,
        scheduler,
        none,
      );

      return this;
    },
    props(),
    proto({
      [ObserverMixinLike_notify](
        this: ObserverMixinLike<T, ConsumerLike<T>>,
        next: T,
      ) {
        this[ObserverMixinLike_consumer][EventListenerLike_notify](next);
      },

      [ObserverMixinLike_complete](
        this: ObserverMixinLike<T, ConsumerLike<T>>,
      ) {
        this[ObserverMixinLike_consumer][SinkLike_complete]();
      },
    }),
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    createConsumerToObserver(scheduler, consumer);
})();
