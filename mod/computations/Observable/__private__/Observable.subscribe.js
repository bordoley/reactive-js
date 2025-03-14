/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../computations.js";
import { bind, newInstance, none, pipe, raise, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { BackPressureError, DisposableContainerLike_add, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, OverflowBackpressureStrategy, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../../../utils.js";
const createObserver = /*@__PURE__*/ (() => {
    const SubscribeObserver_scheduler = Symbol("SubscribeObserver_scheduler");
    const SubscribeObserver_schedulerCallback = Symbol("SubscribeObserver_schedulerCallback");
    return mixInstanceFactory(include(DisposableMixin), function SubscribeObserver(scheduler, config) {
        init(DisposableMixin, this);
        this[SubscribeObserver_scheduler] = scheduler;
        this[QueueableLike_capacity] = config[QueueableLike_capacity];
        this[QueueableLike_backpressureStrategy] =
            config[QueueableLike_backpressureStrategy];
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[SubscribeObserver_schedulerCallback] =
            function SubscribeObserverchedulerCallback(ctx) {
                instance[SchedulerLike_inContinuation] = true;
                this(ctx);
                instance[SchedulerLike_inContinuation] = false;
            };
        return this;
    }, props({
        [SubscribeObserver_scheduler]: none,
        [SubscribeObserver_schedulerCallback]: none,
        [SchedulerLike_inContinuation]: false,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return (this[QueueableLike_capacity] > 0 && !this[DisposableLike_isDisposed]);
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[SubscribeObserver_scheduler][SchedulerLike_now];
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[SubscribeObserver_scheduler][SchedulerLike_shouldYield];
        },
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[SubscribeObserver_scheduler][SchedulerLike_maxYieldInterval];
        },
        [QueueableLike_addOnReadyListener](_callback) {
            return Disposable.disposed;
        },
        [EventListenerLike_notify]() {
            const capacity = this[QueueableLike_capacity];
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            if (capacity === 0 &&
                backpressureStrategy === ThrowBackpressureStrategy) {
                raise(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
        [SchedulerLike_requestYield]() {
            return this[SubscribeObserver_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[SubscribeObserver_scheduler][SchedulerLike_schedule](bind(this[SubscribeObserver_schedulerCallback], continuation), options), Disposable.addToContainer(this));
        },
    }));
})();
const Observable_subscribe = (scheduler, config) => (observable) => {
    const queueConfig = {
        [QueueableLike_capacity]: config?.[QueueableLike_capacity] ??
            config?.capacity ??
            MAX_SAFE_INTEGER,
        [QueueableLike_backpressureStrategy]: config?.[QueueableLike_backpressureStrategy] ??
            config?.backpressureStrategy ??
            OverflowBackpressureStrategy,
    };
    const observer = createObserver(scheduler, queueConfig);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribe;
