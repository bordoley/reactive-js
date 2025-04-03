/// <reference types="./Consumer.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import ObserverMixin from "../__mixins__/ObserverMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const create = /*@__PURE__*/ (() => createInstanceFactory(ConsumerQueueMixin()))();
export const createDelegatingCatchError = /*@__PURE__*/ (() => createInstanceFactory(DelegatingCatchErrorConsumerMixin()))();
export const createDelegatingNonCompleting = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNonCompletingConsumerMixin()))();
export const takeLast = /*@__PURE__*/ (() => createInstanceFactory(TakeLastConsumerMixin()))();
export const toObserver = /*@__PURE__*/ (() => {
    const createConsumerToObserver = mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin()), function ConsumerToObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(ObserverMixin(), this, consumer, scheduler, none);
        return this;
    });
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
