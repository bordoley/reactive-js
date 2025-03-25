/// <reference types="./Consumer.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_consumer, ObserverMixinLike_notify, } from "../__mixins__/ObserverMixin.js";
import QueueMixin from "../__mixins__/QueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(DisposableMixin, QueueMixin()), function ConsumerQueue(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, options);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[QueueLike_enqueue](item);
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
    return (options) => createQueue(options);
})();
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
