/// <reference types="./ConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bind, call, none, pipe, returns } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
export const ConsumerMixinLike_notify = Symbol("ConsumerMixinLike_notify");
export const ConsumerMixinLike_complete = Symbol("ConsumerMixinLike_complete");
export const ConsumerMixinLike_consumer = Symbol("ConsumerMixinLike_consumer");
const ConsumerMixin = /*@__PURE__*/ (() => {
    async function drainQueue() {
        const consumer = this[ConsumerMixinLike_consumer];
        const isConsumerReady = consumer[FlowControllerLike_isReady];
        const isDraininig = this[ConsumerMixin_isDraining];
        if (isDraininig || !isConsumerReady) {
            return;
        }
        this[ConsumerMixin_isDraining] = true;
        while (this[FlowControllerEnumeratorLike_isDataAvailable] &&
            !consumer[SinkLike_isCompleted] &&
            !this[DisposableLike_isDisposed]) {
            // Avoid dequeing values if the downstream consumer
            // is applying backpressure.
            if (!consumer[FlowControllerLike_isReady]) {
                break;
            }
            this[EnumeratorLike_moveNext]();
            const next = this[EnumeratorLike_current];
            this[ConsumerMixinLike_notify](next);
            await Promise.resolve();
        }
        if (this[SinkLike_isCompleted]) {
            this[ConsumerMixinLike_complete]();
        }
        this[ConsumerMixin_isDraining] = false;
    }
    function onConsumerDisposed() {
        this[ConsumerMixin_isCompleted] = true;
    }
    const ConsumerMixin_isDraining = Symbol("ConsumerMixin_isDraining");
    const ConsumerMixin_isCompleted = Symbol("ConsumerMixin_isCompleted");
    return returns(mix(include(FlowControllerQueueMixin()), function ConsumerMixin(consumer, options) {
        init(FlowControllerQueueMixin(), this, options);
        this[ConsumerMixinLike_consumer] = consumer;
        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](bind(drainQueue, this));
        pipe(this, DisposableContainer.onDisposed(onConsumerDisposed), Disposable.add(consumer[FlowControllerLike_addOnReadyListener](bind(drainQueue, this))));
        return this;
    }, props({
        [ConsumerMixin_isCompleted]: false,
        [ConsumerMixinLike_consumer]: none,
        [ConsumerMixin_isDraining]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[ConsumerMixin_isCompleted] ||
                this[ConsumerMixinLike_consumer][SinkLike_isCompleted]);
        },
        [EventListenerLike_notify](next) {
            const isCompleted = this[SinkLike_isCompleted];
            // Make queueing decisions based upon whether the root non-lifted consumer
            // wants to apply back pressure, as lifted sinks just pass through
            // notifications and never queue.
            const consumer = this[ConsumerMixinLike_consumer];
            const isDelegateReady = consumer[FlowControllerLike_isReady];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            const shouldNotify = !isCompleted && isDelegateReady && !hasQueuedEvents;
            if (shouldNotify) {
                this[ConsumerMixinLike_notify](next);
            }
            else if (!isCompleted) {
                this[QueueLike_enqueue](next);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[ConsumerMixin_isCompleted] = true;
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            if (isCompleted) {
                return;
            }
            if (!hasQueuedEvents) {
                this[ConsumerMixinLike_complete]();
            }
            else {
                call(drainQueue, this);
            }
        },
        [ConsumerMixinLike_notify](next) {
            this[ConsumerMixinLike_consumer][EventListenerLike_notify](next);
        },
        [ConsumerMixinLike_complete]() {
            this[ConsumerMixinLike_consumer][SinkLike_complete]();
        },
    })));
})();
export default ConsumerMixin;
