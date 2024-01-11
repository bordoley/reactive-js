/// <reference types="./Observer.createEnqueueObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SchedulerLike_requestYield, } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function EnqueueObserver(instance, delegate, queue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[EnqueueObserver_queue] = queue;
        return instance;
    }, props({
        [EnqueueObserver_queue]: none,
    }), {
        [ObserverLike_notify](next) {
            if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](next);
        },
    })));
})();
export default Observer_createEnqueueObserver;
