/// <reference types="./Observer.createEnqueueObserver.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { ObserverLike_notify, QueueableLike_enqueue, SchedulerLike_requestYield, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertObserverState from "./Observer.assertObserverState.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function EnqueueObserver(delegate, queue) {
        init(DelegatingDisposableMixin, this, delegate);
        init(ObserverMixin(), this, delegate, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[EnqueueObserver_queue] = queue;
        return this;
    }, props({
        [EnqueueObserver_queue]: none,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }),
    }));
})();
export default Observer_createEnqueueObserver;
