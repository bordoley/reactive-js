/// <reference types="./Observable.takeLast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, isSome, none, partial, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_completeDelegate, LiftedObserverLike_isReady, LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ContinuationContextLike_yield, DropOldestBackpressureStrategy, EventListenerLike_notify, QueueLike_count, QueueLike_dequeue, SchedulerLike_requestYield, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    function notifyDelegate(ctx) {
        const queue = this[TakeLastObserver_queue];
        let v = none;
        while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
            if (!this[LiftedObserverLike_isReady]) {
                this[SchedulerLike_requestYield]();
                ctx[ContinuationContextLike_yield]();
            }
            this[LiftedObserverLike_notifyDelegate](v);
            if (!this[LiftedObserverLike_isReady]) {
                this[SchedulerLike_requestYield]();
            }
            if (queue[QueueLike_count] > 0) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        this[LiftedObserverLike_completeDelegate]();
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function TakeLastObserver(delegate, takeLastCount) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[TakeLastObserver_queue] = pipe(Queue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
        }), Disposable.addTo(this));
        return this;
    }, props({
        [TakeLastObserver_queue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            this[TakeLastObserver_queue][EventListenerLike_notify](next);
        },
        [LiftedObserverLike_complete]() {
            const count = this[TakeLastObserver_queue][QueueLike_count];
            if (count === 0) {
                this[LiftedObserverLike_completeDelegate]();
            }
            this[SchedulerLike_schedule](bind(notifyDelegate, this));
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
