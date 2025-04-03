/// <reference types="./ConsumerMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { bind, call, pipe, returns } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
import SinkMixin, { SinkMixinLike_delegate, SinkMixinLike_doComplete, SinkMixinLike_doNotify, SinkMixinLike_isCompleted, } from "./SinkMixin.js";
const ConsumerMixin = /*@__PURE__*/ (() => {
    async function drainQueue() {
        const consumer = this[SinkMixinLike_delegate];
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
            this[SinkMixinLike_doNotify](next);
            await Promise.resolve();
        }
        if (this[SinkLike_isCompleted]) {
            this[SinkMixinLike_doComplete]();
        }
        this[ConsumerMixin_isDraining] = false;
    }
    const ConsumerMixin_isDraining = Symbol("ConsumerMixin_isDraining");
    return returns(mix(include(FlowControllerQueueMixin(), SinkMixin()), function ConsumerMixin(consumer, options) {
        init(FlowControllerQueueMixin(), this, options);
        init(SinkMixin(), this, consumer);
        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](bind(drainQueue, this));
        pipe(this, Disposable.add(consumer[FlowControllerLike_addOnReadyListener](bind(drainQueue, this))));
        return this;
    }, props({
        [ConsumerMixin_isDraining]: false,
    }), proto({
        [EventListenerLike_notify](next) {
            const isCompleted = this[SinkLike_isCompleted];
            // Make queueing decisions based upon whether the root non-lifted consumer
            // wants to apply back pressure, as lifted sinks just pass through
            // notifications and never queue.
            const consumer = this[SinkMixinLike_delegate];
            const isDelegateReady = consumer[FlowControllerLike_isReady];
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            const shouldNotify = !isCompleted && isDelegateReady && !hasQueuedEvents;
            if (shouldNotify) {
                this[SinkMixinLike_doNotify](next);
            }
            else if (!isCompleted) {
                this[QueueLike_enqueue](next);
            }
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SinkMixinLike_isCompleted] = true;
            const hasQueuedEvents = this[FlowControllerEnumeratorLike_isDataAvailable];
            if (isCompleted) {
                return;
            }
            if (!hasQueuedEvents) {
                this[SinkMixinLike_doComplete]();
            }
            else {
                call(drainQueue, this);
            }
        },
    })));
})();
export default ConsumerMixin;
