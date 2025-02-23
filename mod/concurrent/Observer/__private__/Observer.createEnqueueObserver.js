/// <reference types="./Observer.createEnqueueObserver.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SchedulerLike_requestYield, } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertObserverState from "./Observer.assertObserverState.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin(), LiftedObserverMixin()), function EnqueueObserver(instance, delegate, queue) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        init(LiftedObserverMixin(), instance, delegate);
        instance[EnqueueObserver_queue] = queue;
        return instance;
    }, props({
        [EnqueueObserver_queue]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }),
    });
})();
export default Observer_createEnqueueObserver;
