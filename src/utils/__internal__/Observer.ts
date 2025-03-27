import {
  include,
  init,
  mixInstanceFactory,
} from "../../__internal__/mixins.js";
import { IterableLike } from "../../computations.js";
import { ObserverLike, SchedulerLike } from "../../utils.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

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
) => ObserverLike<T> & IterableLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(TakeLastConsumerMixin(), DelegatingSchedulerMixin),
    function NonDisposingDelegatingObserver(
      this: unknown,
      scheduler: SchedulerLike,
      capacity: number,
    ): ObserverLike<T> & IterableLike<T> {
      init(TakeLastConsumerMixin<T>(), this, capacity);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  ))();
