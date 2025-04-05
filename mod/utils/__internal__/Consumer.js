/// <reference types="./Consumer.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const createDelegatingCatchError = /*@__PURE__*/ (() => createInstanceFactory(DelegatingCatchErrorConsumerMixin()))();
export const createDelegatingNonCompleting = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNonCompletingConsumerMixin()))();
export const takeLast = /*@__PURE__*/ (() => createInstanceFactory(TakeLastConsumerMixin()))();
export const toObserver = /*@__PURE__*/ (() => {
    const createConsumerToObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingConsumerMixin(), DelegatingSchedulerMixin), function ConsumerToObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin(), this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    });
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
