/// <reference types="./Consumer.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { ConsumerMixinLike_complete, ConsumerMixinLike_consumer, ConsumerMixinLike_notify, } from "../__mixins__/ConsumerMixin.js";
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
    }, props(), proto({
        [ConsumerMixinLike_notify](next) {
            this[ConsumerMixinLike_consumer][EventListenerLike_notify](next);
        },
        [ConsumerMixinLike_complete]() {
            this[ConsumerMixinLike_consumer][SinkLike_complete]();
        },
    }));
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
