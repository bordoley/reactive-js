/// <reference types="./Observable.enqueue.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { EventListenerLike_notify, QueueableLike_isReady, SchedulerLike_requestYield, } from "../../../utils.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function EnqueueObserver(delegate, queue) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[EnqueueObserver_queue] = queue;
        return this;
    }, props({
        [EnqueueObserver_queue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const queue = this[EnqueueObserver_queue];
            queue[EventListenerLike_notify](next);
            if (!queue[QueueableLike_isReady]) {
                this[SchedulerLike_requestYield]();
            }
            this[LiftedObserverLike_notifyDelegate](next);
        },
    }));
})();
const Observable_enqueue = (queue) => pipe((Observer_createEnqueueObserver), partial(queue), Observable_liftWithSideEffects);
export default Observable_enqueue;
