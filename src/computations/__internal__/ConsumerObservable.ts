import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike_subscribe,
  PureObservableLike,
} from "../../computations.js";
import { Optional, bind, call, isNone, none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";

import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../../utils/__mixins__/FlowControllerQueueMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  ObserverLike,
  QueueLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

export interface ConsumerObservableLike<out T>
  extends PureObservableLike<T>,
    ConsumerLike,
    DisposableLike {}

export const create: <T>(config?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerObservableLike<T> = (<T>() => {
  const ConsumerObservable_observer = Symbol("ConsumerObservable_observer");
  const ConsumerObservable_schedulerSubscription = Symbol(
    "ConsumerObservable_schedulerSubscription",
  );

  type TProperties = {
    [ConsumerObservable_observer]: Optional<ObserverLike<T>>;
    [ConsumerObservable_schedulerSubscription]: DisposableLike;
    [SinkLike_isCompleted]: boolean;
  };

  type TPrototype = Pick<ConsumerObservableLike<T>, keyof PureObservableLike> &
    Pick<
      SinkLike<T>,
      typeof SinkLike_complete | typeof EventListenerLike_notify
    >;

  function* dispatchEvents(
    this: TProperties & FlowControllerQueueLike<T>,
    scheduler: SchedulerLike,
  ) {
    const observer = this[ConsumerObservable_observer];

    if (isNone(observer)) {
      return;
    }

    let observerIsReady = observer[FlowControllerLike_isReady];
    let observerIsCompleted = observer[SinkLike_isCompleted];

    while (
      observerIsReady &&
      !observerIsCompleted &&
      this[EnumeratorLike_moveNext]()
    ) {
      const next = this[EnumeratorLike_current];
      observer[EventListenerLike_notify](next);

      const shouldYield = scheduler[SchedulerLike_shouldYield];
      const hasMoreData = this[FlowControllerEnumeratorLike_isDataAvailable];
      if (shouldYield && hasMoreData) {
        yield;
      }

      observerIsReady = observer[FlowControllerLike_isReady];
      observerIsCompleted = observer[SinkLike_isCompleted];
    }

    const hasMoreData = this[FlowControllerEnumeratorLike_isDataAvailable];
    const isCompleted = this[SinkLike_isCompleted];
    if (!hasMoreData && isCompleted) {
      observer[SinkLike_complete]();
    }
  }

  function scheduleDispatcher(this: TProperties & DisposableLike) {
    const dispatchSubscription = this[ConsumerObservable_schedulerSubscription];
    const observer = this[ConsumerObservable_observer];

    if (!dispatchSubscription[DisposableLike_isDisposed] || isNone(observer)) {
      return;
    }

    this[ConsumerObservable_schedulerSubscription] = pipe(
      observer[SchedulerLike_schedule](bind(dispatchEvents, this)),
      Disposable.addTo(this),
    );
  }

  return mixInstanceFactory(
    include(DisposableMixin, FlowControllerQueueMixin()),
    function ConsumerObservable(
      this: TProperties & TPrototype,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerObservableLike<T> {
      init(DisposableMixin, this);
      init(FlowControllerQueueMixin<T>(), this, config);

      this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
        bind(scheduleDispatcher, this),
      );

      return this;
    },
    props<TProperties>({
      [ConsumerObservable_observer]: none,
      [SinkLike_isCompleted]: false,
      [ConsumerObservable_schedulerSubscription]: Disposable.disposed,
    }),
    {
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [EventSourceLike_subscribe](
        this: TProperties & ConsumerLike<T>,
        observer: ObserverLike<T>,
      ) {
        const oldDelegate = this[ConsumerObservable_observer];
        this[ConsumerObservable_observer] = observer;
        pipe(observer, Disposable.addTo(this));

        pipe(
          observer[FlowControllerLike_addOnReadyListener](
            bind(scheduleDispatcher, this),
          ),
          Disposable.addTo(this),
        );

        oldDelegate?.[DisposableLike_dispose]();

        call(scheduleDispatcher, this);
      },

      [EventListenerLike_notify](
        this: TProperties & FlowControllerQueueLike<T>,
        next: T,
      ) {
        const observer = this[ConsumerObservable_observer];
        const inSchedulerContinuation =
          observer?.[SchedulerLike_inContinuation] ?? false;
        const isCompleted = this[SinkLike_isCompleted];

        // Make queueing decisions based upon whether the root non-lifted observer
        // wants to apply back pressure, as lifted observers just pass through
        // notifications and never queue in practice.
        const isObserverReady = observer?.[FlowControllerLike_isReady] ?? false;
        const hasQueuedEvents =
          this[FlowControllerEnumeratorLike_isDataAvailable];

        const shouldNotify =
          inSchedulerContinuation &&
          !isCompleted &&
          isObserverReady &&
          !hasQueuedEvents;

        if (shouldNotify) {
          observer?.[EventListenerLike_notify](next);
        } else if (!isCompleted) {
          this[QueueLike_enqueue](next);
        }
      },

      [SinkLike_complete](this: TProperties) {
        const isCompleted = this[SinkLike_isCompleted];
        this[SinkLike_isCompleted] = true;

        if (isCompleted) {
          return;
        }

        call(scheduleDispatcher, this);
      },
    },
  );
})();
