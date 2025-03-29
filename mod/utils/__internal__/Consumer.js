/// <reference types="./Consumer.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { ConsumerQueueMixin } from "../__mixins__/ConsumerQueueMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_consumer, ObserverMixinLike_notify, } from "../__mixins__/ObserverMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const create = /*@__PURE__*/ (() => createInstanceFactory(ConsumerQueueMixin()))();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer()))();
export const takeLast = /*@__PURE__*/ (() => createInstanceFactory(TakeLastConsumerMixin()))();
export const toObserver = /*@__PURE__*/ (() => {
    const createConsumerToObserver = mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin()), function ConsumerToObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(ObserverMixin(), this, consumer, scheduler, none);
        return this;
    }, props(), proto({
        [ObserverMixinLike_notify](next) {
            this[ObserverMixinLike_consumer][EventListenerLike_notify](next);
        },
        [ObserverMixinLike_complete]() {
            this[ObserverMixinLike_consumer][SinkLike_complete]();
        },
    }));
    return (scheduler) => (consumer) => createConsumerToObserver(scheduler, consumer);
})();
