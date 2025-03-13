/// <reference types="./Observable.takeLast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, isSome, none, partial, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DropOldestBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, QueueableLike_isReady, SchedulerLike_schedule, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    function notifyDelegate(ctx) {
        const queue = this[TakeLastObserver_queue];
        const delegate = this[LiftedObserverLike_delegate];
        let v = none;
        while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
            delegate[QueueableLike_enqueue](v);
            if (queue[QueueLike_count] > 0) {
                ctx[ContinuationContextLike_yield]();
            }
        }
        delegate[DisposableLike_dispose]();
    }
    function onTakeLastObserverComplete() {
        const count = this[TakeLastObserver_queue][QueueLike_count];
        if (count === 0) {
            return;
        }
        const delegate = this[LiftedObserverLike_delegate];
        pipe(delegate[SchedulerLike_schedule](bind(notifyDelegate, this)), Disposable.addTo(delegate));
    }
    return mixInstanceFactory(include(DisposableMixin, LiftedObserverMixin()), function TakeLastObserver(delegate, takeLastCount) {
        init(DisposableMixin, this);
        init(LiftedObserverMixin(), this, delegate, none);
        pipe(this, Disposable.addTo(delegate));
        this[TakeLastObserver_queue] = Queue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
        });
        pipe(this, DisposableContainer.onComplete(onTakeLastObserverComplete));
        return this;
    }, props({
        [TakeLastObserver_queue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            this[TakeLastObserver_queue][QueueableLike_enqueue](next);
            return this[QueueableLike_isReady];
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
