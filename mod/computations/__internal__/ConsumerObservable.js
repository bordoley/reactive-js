/// <reference types="./ConsumerObservable.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../computations.js";
import { bind, call, isNone, none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../../utils/__mixins__/FlowControllerQueueMixin.js";
import { ConsumableEnumeratorLike_addOnDataAvailableListener, ConsumableEnumeratorLike_isDataAvailable, DisposableLike_dispose, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
export const create = (() => {
    const ConsumerObservable_observer = Symbol("ConsumerObservable_observer");
    const ConsumerObservable_schedulerSubscription = Symbol("ConsumerObservable_schedulerSubscription");
    function* dispatchEvents(scheduler) {
        const observer = this[ConsumerObservable_observer];
        if (isNone(observer)) {
            return;
        }
        let observerIsReady = observer[FlowControllerLike_isReady];
        let observerIsCompleted = observer[SinkLike_isCompleted];
        while (observerIsReady &&
            !observerIsCompleted &&
            this[EnumeratorLike_moveNext]()) {
            const next = this[EnumeratorLike_current];
            observer[EventListenerLike_notify](next);
            const shouldYield = scheduler[SchedulerLike_shouldYield];
            const hasMoreData = this[ConsumableEnumeratorLike_isDataAvailable];
            if (shouldYield && hasMoreData) {
                yield;
            }
            observerIsReady = observer[FlowControllerLike_isReady];
            observerIsCompleted = observer[SinkLike_isCompleted];
        }
        const hasMoreData = this[ConsumableEnumeratorLike_isDataAvailable];
        const isCompleted = this[SinkLike_isCompleted];
        if (!hasMoreData && isCompleted) {
            observer[SinkLike_complete]();
        }
    }
    function scheduleDispatcher() {
        const dispatchSubscription = this[ConsumerObservable_schedulerSubscription];
        const observer = this[ConsumerObservable_observer];
        if (!dispatchSubscription[DisposableLike_isDisposed] || isNone(observer)) {
            return;
        }
        this[ConsumerObservable_schedulerSubscription] = pipe(observer[SchedulerLike_schedule](bind(dispatchEvents, this)), Disposable.addTo(this));
    }
    return mixInstanceFactory(include(DisposableMixin, FlowControllerQueueMixin()), function ConsumerObservable(config) {
        init(DisposableMixin, this);
        init(FlowControllerQueueMixin(), this, {
            capacity: config?.capacity ?? 1,
            backpressureStrategy: config?.backpressureStrategy ?? DropOldestBackpressureStrategy,
        });
        this[ConsumableEnumeratorLike_addOnDataAvailableListener](bind(scheduleDispatcher, this));
        return this;
    }, props({
        [ConsumerObservable_observer]: none,
        [SinkLike_isCompleted]: false,
        [ConsumerObservable_schedulerSubscription]: Disposable.disposed,
    }), {
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_subscribe](observer) {
            const oldDelegate = this[ConsumerObservable_observer];
            this[ConsumerObservable_observer] = observer;
            pipe(observer, Disposable.addTo(this));
            pipe(observer[FlowControllerLike_addOnReadyListener](bind(scheduleDispatcher, this)), Disposable.addTo(this));
            oldDelegate?.[DisposableLike_dispose]();
            call(scheduleDispatcher, this);
        },
        [EventListenerLike_notify](next) {
            const observer = this[ConsumerObservable_observer];
            const inSchedulerContinuation = observer?.[SchedulerLike_inContinuation] ?? false;
            const isCompleted = this[SinkLike_isCompleted];
            // Make queueing decisions based upon whether the root non-lifted observer
            // wants to apply back pressure, as lifted observers just pass through
            // notifications and never queue in practice.
            const isObserverReady = observer?.[FlowControllerLike_isReady] ?? false;
            const hasQueuedEvents = this[ConsumableEnumeratorLike_isDataAvailable];
            const shouldNotify = inSchedulerContinuation &&
                !isCompleted &&
                isObserverReady &&
                !hasQueuedEvents;
            if (shouldNotify) {
                observer?.[EventListenerLike_notify](next);
            }
            else if (!isCompleted) {
                this[QueueLike_enqueue](next);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkLike_isCompleted] = true;
            if (isCompleted) {
                return;
            }
            call(scheduleDispatcher, this);
        },
    });
})();
