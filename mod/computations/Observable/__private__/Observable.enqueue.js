/// <reference types="./Observable.enqueue.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_isReady, SchedulerLike_requestYield, SinkLike_complete, SinkLike_next, } from "../../../utils.js";
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
            queue[SinkLike_next](next);
            if (!queue[QueueableLike_isReady]) {
                this[SchedulerLike_requestYield]();
            }
            this[LiftedObserverLike_notifyDelegate](next);
        },
        [LiftedObserverLike_complete]() {
            // FIXME: maybe we shouldn't complete
            this[EnqueueObserver_queue][SinkLike_complete]();
            this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
    }));
})();
const Observable_enqueue = (queue) => pipe((Observer_createEnqueueObserver), partial(queue), Observable_liftWithSideEffects);
export default Observable_enqueue;
