import {
  include,
  init,
  mixInstanceFactory,
} from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ObserverLike,
  SchedulerLike,
} from "../../utils.js";
import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const create: <T>(
  scheduler: SchedulerLike,
  options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  },
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(ConsumerQueueMixin(), DelegatingSchedulerMixin),
    function CreateObserver(
      this: unknown,
      scheduler: SchedulerLike,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ObserverLike<T> & CollectionEnumeratorLike<T> {
      init(ConsumerQueueMixin<T>(), this, options);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  ))();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
      DelegatingSchedulerMixin,
    ),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(
        DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
        this,
        delegate,
      );
      init(DelegatingSchedulerMixin, this, delegate);

      return this;
    },
  ))();

export const takeLast: <T>(
  scheduler: SchedulerLike,
  capacity: number,
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(TakeLastConsumerMixin(), DelegatingSchedulerMixin),
    function TakeLastObserver(
      this: unknown,
      scheduler: SchedulerLike,
      capacity: number,
    ): ObserverLike<T> & CollectionEnumeratorLike<T> {
      init(TakeLastConsumerMixin<T>(), this, capacity);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  ))();
