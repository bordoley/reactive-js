/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(scheduler, capacity) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
