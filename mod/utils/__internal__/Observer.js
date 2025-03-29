/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const create = /*@__PURE__*/ (() => mixInstanceFactory(include(ConsumerQueueMixin(), DelegatingSchedulerMixin), function CreateObserver(scheduler, options) {
    init(ConsumerQueueMixin(), this, options);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin), function TakeLastObserver(scheduler, capacity) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
