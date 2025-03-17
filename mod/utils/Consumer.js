/// <reference types="./Consumer.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { pipe } from "../functions.js";
import * as Disposable from "./Disposable.js";
import DelegatingConsumerMixin from "./__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";
export const toObserver = /*@__PURE__*/ (() => {
    const createSinkObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin), function SubscribeObserver(consumer, scheduler) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingConsumerMixin(), this, consumer);
        return this;
    });
    return (scheduler) => (consumer) => pipe(createSinkObserver(consumer, scheduler), Disposable.addToContainer(scheduler));
})();
