import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, Reducer, none } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumableEnumeratorLike,
  EventListenerLike_notify,
  FlowControlQueueLike,
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike,
} from "../../utils.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingObserverSchedulerMixin from "../__mixins__/DelegatingObserverSchedulerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import FlowControlQueueMixin from "../__mixins__/FlowControlQueueMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
import UnscheduledObserverMixin from "../__mixins__/UnscheduledObserverMixin.js";

export const collect: <T>(
  buffer: T[],
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  return mixInstanceFactory(
    include(
      CollectorSinkMixin(),
      DelegatingSchedulerMixin,
      FlowControllerWithoutBackpressureMixin,
      UnscheduledObserverMixin(),
    ),
    function CollectObserver(
      this: unknown,
      buffer: T[],
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(CollectorSinkMixin(), this, buffer);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(FlowControllerWithoutBackpressureMixin, this);
      init(UnscheduledObserverMixin(), this);

      return this;
    },
  );
})();

export const create: <T>(
  notify: (this: ObserverLike<T>, next: T) => void,
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: (this: ObserverLike<T>, next: T) => void;
  };

  return mixInstanceFactory(
    include(
      DisposableMixin,
      DisposeOnCompleteSinkMixin(),
      DelegatingSchedulerMixin,
      FlowControllerWithoutBackpressureMixin,
      UnscheduledObserverMixin(),
    ),
    function EventListener(
      this: TProperties,
      notify: (this: ObserverLike<T>, a: T) => void,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DisposeOnCompleteSinkMixin(), this);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(FlowControllerWithoutBackpressureMixin, this);
      init(UnscheduledObserverMixin(), this);

      this[EventListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [EventListenerLike_notify]: none,
    }),
  );
})();

export const createDelegatingCatchError: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingCatchErrorConsumerMixin(),
      DelegatingObserverSchedulerMixin(),
    ),
    function DelegatingCatchErrorObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DelegatingCatchErrorConsumerMixin(), this, delegate);
      init(DelegatingObserverSchedulerMixin(), this, delegate);

      return this;
    },
  ))();

export const createDelegatingNonCompleting: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingNonCompletingConsumerMixin(),
      DelegatingObserverSchedulerMixin(),
    ),
    function DelegatingNonCompletingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(DelegatingNonCompletingConsumerMixin(), this, delegate);
      init(DelegatingObserverSchedulerMixin(), this, delegate);

      return this;
    },
  ))();

export const createWithFlowControl: <T>(
  scheduler: SchedulerLike,
  options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
  },
) => ObserverLike<T> & ConsumableEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DisposableMixin,
      FlowControlQueueMixin(),
      DisposeOnCompleteSinkMixin(),
      DelegatingSchedulerMixin,
      UnscheduledObserverMixin(),
    ),
    function FlowControlQueue(
      this: Pick<ObserverLike<T>, typeof EventListenerLike_notify>,
      scheduler: SchedulerLike,
      options: Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
      }>,
    ): ObserverLike<T> & ConsumableEnumeratorLike<T> {
      init(DisposableMixin, this);
      init(FlowControlQueueMixin<T>(), this, options);
      init(DisposeOnCompleteSinkMixin(), this);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(UnscheduledObserverMixin(), this);

      return this;
    },
    props(),
    proto({
      [EventListenerLike_notify](this: FlowControlQueueLike<T>, next: T) {
        this[QueueableLike_enqueue](next);
      },
    }),
  ))();

export const reducer: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  ref: [TAcc],
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  return mixInstanceFactory(
    include(
      ReducerSinkMixin(),
      DelegatingSchedulerMixin,
      FlowControllerWithoutBackpressureMixin,
      UnscheduledObserverMixin(),
    ),
    function CollectObserver(
      this: unknown,
      reducer: Reducer<T, TAcc>,
      ref: [TAcc],
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(ReducerSinkMixin<T, TAcc>(), this, reducer, ref);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(FlowControllerWithoutBackpressureMixin, this);
      init(UnscheduledObserverMixin(), this);

      return this;
    },
  );
})();

export const takeLast: <T>(
  capacity: number,
  scheduler: SchedulerLike,
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      TakeLastConsumerMixin(),
      DelegatingSchedulerMixin,
      UnscheduledObserverMixin(),
    ),
    function TakeLastObserver(
      this: unknown,
      capacity: number,
      scheduler: SchedulerLike,
    ): ObserverLike<T> & CollectionEnumeratorLike<T> {
      init(TakeLastConsumerMixin<T>(), this, capacity);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(UnscheduledObserverMixin(), this);

      return this;
    },
  ))();
