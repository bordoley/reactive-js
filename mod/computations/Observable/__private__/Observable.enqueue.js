/// <reference types="./Observable.enqueue.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_complete, QueueableLike_enqueue, SchedulerLike_requestYield, } from "../../../utils.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observer_createEnqueueObserver = /*@__PURE__*/ (() => {
    const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function EnqueueObserver(delegate, queue) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        pipe(this, Disposable.addTo(delegate));
        this[EnqueueObserver_queue] = queue;
        pipe(this, DisposableContainer.onComplete(bindMethod(queue, QueueableLike_complete)));
        return this;
    }, props({
        [EnqueueObserver_queue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
                this[SchedulerLike_requestYield]();
            }
            return (delegate?.[LiftedObserverLike_notify]?.(next) ??
                delegate[QueueableLike_enqueue](next));
        },
    }));
})();
const Observable_enqueue = (queue) => pipe((Observer_createEnqueueObserver), partial(queue), Observable_liftWithSideEffects);
export default Observable_enqueue;
