import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
} from "../../__internal__/mixins.js";
import { Function1 } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  ObserverLike,
  SchedulerLike,
} from "../../utils.js";

import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(ConsumerQueueMixin()))();

export const createDelegatingCatchError: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(DelegatingCatchErrorConsumerMixin()))();

export const createDelegatingNonCompleting: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(DelegatingNonCompletingConsumerMixin()))();

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
    ),
    function ConsumerToObserver(
      this: unknown,
      scheduler: SchedulerLike,
      consumer: ConsumerLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(DelegatingConsumerMixin<T>(), this, consumer);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    createConsumerToObserver(scheduler, consumer);
})();
