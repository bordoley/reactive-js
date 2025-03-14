/// <reference types="./Observable.takeLast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, isSome, none, partial, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ContinuationContextLike_yield, DropOldestBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_isReady, SchedulerLike_requestYield, SchedulerLike_schedule, SinkLike_complete, SinkLike_next, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    function notifyDelegate(ctx) {
        const queue = this[TakeLastObserver_queue];
        const delegate = this[LiftedObserverLike_delegate];
        let v = none;
        while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
            if (!delegate[QueueableLike_isReady]) {
                delegate[SchedulerLike_requestYield]();
                ctx[ContinuationContextLike_yield]();
            }
            delegate[SinkLike_next](v);
            if (!delegate[QueueableLike_isReady]) {
                delegate[SchedulerLike_requestYield]();
            }
            if (queue[QueueLike_count] > 0) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        delegate[SinkLike_complete]();
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function TakeLastObserver(delegate, takeLastCount) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[TakeLastObserver_queue] = Queue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
        });
        return this;
    }, props({
        [TakeLastObserver_queue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            this[TakeLastObserver_queue][SinkLike_next](next);
        },
        [LiftedObserverLike_complete]() {
            const delegate = this[LiftedObserverLike_delegate];
            const count = this[TakeLastObserver_queue][QueueLike_count];
            if (count === 0) {
                delegate[SinkLike_complete]();
            }
            delegate[SchedulerLike_schedule](bind(notifyDelegate, this));
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
