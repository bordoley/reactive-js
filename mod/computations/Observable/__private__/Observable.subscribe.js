/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../computations.js";
import { bind, identity, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, OverflowBackpressureStrategy, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
const Observable_subscribe = /*@__PURE__*/ (() => {
    const SubscribeObserver_scheduler = Symbol("SubscribeObserver_scheduler");
    const SubscribeObserver_schedulerCallback = Symbol("SubscribeObserver_schedulerCallback");
    const SubscribeObserver_consumer = Symbol("SubscribeObserver_consumer");
    const createObserver = mixInstanceFactory(include(DisposableMixin), function SubscribeObserver(scheduler, consumer) {
        init(DisposableMixin, this);
        this[SubscribeObserver_scheduler] = scheduler;
        this[SubscribeObserver_consumer] = consumer;
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
        [SubscribeObserver_consumer]: none,
    }), proto({
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[SubscribeObserver_consumer]?.[SinkLike_isCompleted] ??
                this[DisposableLike_isDisposed]);
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return (this[SubscribeObserver_consumer]?.[QueueableLike_isReady] ??
                !this[DisposableLike_isDisposed]);
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
        [QueueableLike_addOnReadyListener](callback) {
            return (this[SubscribeObserver_consumer]?.[QueueableLike_addOnReadyListener](callback) ?? Disposable.disposed);
        },
        [EventListenerLike_notify](next) {
            this[SubscribeObserver_consumer]?.[EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[SubscribeObserver_consumer]?.[SinkLike_complete]();
            this[DisposableLike_dispose]();
        },
        [SchedulerLike_requestYield]() {
            return this[SubscribeObserver_scheduler][SchedulerLike_requestYield]();
        },
        [SchedulerLike_schedule](continuation, options) {
            return pipe(this[SubscribeObserver_scheduler][SchedulerLike_schedule](bind(this[SubscribeObserver_schedulerCallback], continuation), options), Disposable.addToContainer(this));
        },
    }));
    return (scheduler, options) => (observable) => {
        const { subscriber } = options ?? {};
        const observer = pipe(createObserver(scheduler, subscriber), Disposable.addToContainer(scheduler), isSome(subscriber) ? Disposable.addTo(subscriber) : identity);
        observable[ObservableLike_observe](observer);
        return observer;
    };
})();
export default Observable_subscribe;
