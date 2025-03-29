import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Function1, none } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike,
  SinkLike_complete,
} from "../../utils.js";
import {
  ConsumerMixinLike,
  ConsumerMixinLike_complete,
  ConsumerMixinLike_consumer,
  ConsumerMixinLike_notify,
} from "../__mixins__/ConsumerMixin.js";
import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import ObserverMixin from "../__mixins__/ObserverMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(ConsumerQueueMixin()))();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(
    DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
  ))();

export const takeLast: <T>(
  capacity: number,
) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(TakeLastConsumerMixin()))();

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
        ObserverMixin<ConsumerLike<T>, T>(),
        this,
        consumer,
        scheduler,
        none,
      );

      return this;
    },
    props(),
    proto({
      [ConsumerMixinLike_notify](
        this: ConsumerMixinLike<ConsumerLike<T>, T>,
        next: T,
      ) {
        this[ConsumerMixinLike_consumer][EventListenerLike_notify](next);
      },

      [ConsumerMixinLike_complete](
        this: ConsumerMixinLike<ConsumerLike<T>, T>,
      ) {
        this[ConsumerMixinLike_consumer][SinkLike_complete]();
      },
    }),
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    createConsumerToObserver(scheduler, consumer);
})();
