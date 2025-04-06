/// <reference types="./Consumer.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { EventListenerLike_notify, QueueLike_enqueue, } from "../../utils.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import FlowControlQueueMixin from "../__mixins__/FlowControlQueueMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
import UnscheduledObserverMixin from "../__mixins__/UnscheduledObserverMixin.js";
export const createDelegatingCatchError = /*@__PURE__*/ (() => createInstanceFactory(DelegatingCatchErrorConsumerMixin()))();
export const createDelegatingNonCompleting = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNonCompletingConsumerMixin()))();
export const createWithFlowControl = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, FlowControlQueueMixin(), DisposeOnCompleteSinkMixin()), function FlowControlQueue(options) {
    init(DisposableMixin, this);
    init(FlowControlQueueMixin(), this, options);
    init(DisposeOnCompleteSinkMixin(), this);
    return this;
}, props(), proto({
    [EventListenerLike_notify](next) {
        this[QueueLike_enqueue](next);
    },
})))();
export const takeLast = /*@__PURE__*/ (() => createInstanceFactory(TakeLastConsumerMixin()))();
export const toObserver = /*@__PURE__*/ (() => {
    const createConsumerToObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingConsumerMixin(), DelegatingSchedulerMixin, UnscheduledObserverMixin()), function ConsumerToObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin(), this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(UnscheduledObserverMixin(), this);
        return this;
    });
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
