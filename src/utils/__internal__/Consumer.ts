import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Function1, Optional } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumableEnumeratorLike,
  ConsumerLike,
  EventListenerLike_notify,
  FlowControlQueueLike,
  ObserverLike,
  QueueLike_enqueue,
  SchedulerLike,
} from "../../utils.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import FlowControlQueueMixin from "../__mixins__/FlowControlQueueMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
import UnscheduledObserverMixin from "../__mixins__/UnscheduledObserverMixin.js";

export const createDelegatingCatchError: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(DelegatingCatchErrorConsumerMixin()))();

export const createDelegatingNonCompleting: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(DelegatingNonCompletingConsumerMixin()))();

export const createWithFlowControl: <T>(options?: {
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}) => ConsumerLike<T> & ConsumableEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DisposableMixin,
      FlowControlQueueMixin(),
      DisposeOnCompleteSinkMixin(),
    ),
    function FlowControlQueue(
      this: Pick<ConsumerLike<T>, typeof EventListenerLike_notify>,
      options: Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
      }>,
    ): ConsumerLike<T> & ConsumableEnumeratorLike<T> {
      init(DisposableMixin, this);
      init(FlowControlQueueMixin<T>(), this, options);
      init(DisposeOnCompleteSinkMixin(), this);

      return this;
    },
    props(),
    proto({
      [EventListenerLike_notify](this: FlowControlQueueLike<T>, next: T) {
        this[QueueLike_enqueue](next);
      },
    }),
  ))();

export const takeLast: <T>(
  capacity: number,
) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(TakeLastConsumerMixin()))();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<ConsumerLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  const createConsumerToObserver = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingConsumerMixin(),
      DelegatingSchedulerMixin,
      UnscheduledObserverMixin(),
    ),
    function ConsumerToObserver(
      this: unknown,
      scheduler: SchedulerLike,
      consumer: ConsumerLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(DelegatingConsumerMixin<T>(), this, consumer);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(UnscheduledObserverMixin(), this);

      return this;
    },
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    createConsumerToObserver(scheduler, consumer);
})();
