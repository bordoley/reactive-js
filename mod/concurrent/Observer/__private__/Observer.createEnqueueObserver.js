/// <reference types="./Observer.createEnqueueObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SchedulerLike_requestYield, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, QueueableLike_enqueue, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function EnqueueObserver(instance, delegate, queue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[EnqueueObserver_queue] = queue;
        return instance;
    }, props({
        [EnqueueObserver_queue]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
    }));
})();
export default Observer_createEnqueueObserver;
