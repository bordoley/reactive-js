/// <reference types="./ObserverMixin.d.ts" />

import { getPrototype, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isSynchronous, } from "../../computations.js";
import { ContinuationContextLike_yield, DispatcherLikeEvent_capacityExceeded, DispatcherLikeEvent_completed, DispatcherLikeEvent_ready, DispatcherLike_complete, DispatcherLike_isCompleted, ObserverLike_notify, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import * as Publisher from "../../events/Publisher.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../events.js";
import { bind, call, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import SerialDisposableMixin from "../../utils/__mixins__/SerialDisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, SerialDisposableLike_current, } from "../../utils.js";
import Observer_assertObserverState from "../Observer/__private__/Observer.assertObserverState.js";
const ObserverMixin = /*@__PURE__*/ (() => {
    const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
    const ObserverMixin_publisher = Symbol("ObserverMixin_publisher");
    const scheduleDrainQueue = (observer) => {
        if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
            const continuation = (ctx) => {
                while (observer[QueueLike_count] > 0) {
                    const next = observer[QueueLike_dequeue]();
                    observer[ObserverLike_notify](next);
                    if (observer[QueueLike_count] > 0) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                if (observer[DispatcherLike_isCompleted]) {
                    observer[DisposableLike_dispose]();
                }
                else {
                    observer[ObserverMixin_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_ready);
                }
            };
            observer[SerialDisposableLike_current] =
                observer[SchedulerLike_schedule](continuation);
        }
    };
    const queueProtoype = getPrototype(QueueMixin());
    function onPublisherDisposed() {
        this[ObserverMixin_publisher] = none;
    }
    return returns(mix(include(QueueMixin(), SerialDisposableMixin()), function ObserverMixin(instance, scheduler, config) {
        init(QueueMixin(), instance, {
            backpressureStrategy: config[QueueableLike_backpressureStrategy],
            capacity: config[QueueableLike_capacity],
        });
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        instance[ObserverMixin_scheduler] =
            scheduler[ObserverMixin_scheduler] ??
                scheduler;
        return instance;
    }, props({
        [DispatcherLike_isCompleted]: false,
        [ObserverMixin_scheduler]: none,
        [ObserverMixin_publisher]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isInteractive]: false,
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_inContinuation];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[ObserverMixin_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[ObserverMixin_scheduler][SchedulerLike_schedule](continuation, options), Disposable.addToContainer(this));
        },
        [QueueableLike_enqueue](next) {
            if (!this[DispatcherLike_isCompleted] &&
                !this[DisposableLike_isDisposed]) {
                const result = call(queueProtoype[QueueableLike_enqueue], this, next);
                if (!result) {
                    this[ObserverMixin_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_capacityExceeded);
                }
                scheduleDrainQueue(this);
                return result;
            }
            return true;
        },
        [DispatcherLike_complete]() {
            const isCompleted = this[DispatcherLike_isCompleted];
            this[DispatcherLike_isCompleted] = true;
            if (!isCompleted) {
                this[ObserverMixin_publisher]?.[EventListenerLike_notify](DispatcherLikeEvent_completed);
            }
            if (this[SerialDisposableLike_current][DisposableLike_isDisposed] &&
                !isCompleted) {
                this[DisposableLike_dispose]();
            }
        },
        [ObserverLike_notify]: Observer_assertObserverState(function (_) { }),
        [EventSourceLike_addEventListener](listener) {
            const publisher = this[ObserverMixin_publisher] ??
                (() => {
                    const publisher = pipe(Publisher.create({ autoDispose: true }), Disposable.addTo(this), DisposableContainer.onDisposed(bind(onPublisherDisposed, this)));
                    this[ObserverMixin_publisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default ObserverMixin;
