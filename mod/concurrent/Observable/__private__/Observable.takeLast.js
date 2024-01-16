/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_schedule, } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DropOldestBackpressureStrategy, IndexedQueueLike_get, QueueLike_count, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DisposableMixin, DelegatingObserverMixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[TakeLastObserver_queue] = IndexedQueue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
        });
        pipe(instance, Disposable.onComplete(() => {
            const queue = instance[TakeLastObserver_queue];
            let index = 0;
            const count = queue[QueueLike_count];
            if (count === 0) {
                return;
            }
            delegate[SchedulerLike_schedule](ctx => {
                while (index < count) {
                    const v = queue[IndexedQueueLike_get](index);
                    delegate[ObserverLike_notify](v);
                    index++;
                    if (index < count) {
                        ctx[ContinuationContextLike_yield]();
                    }
                }
                delegate[DisposableLike_dispose]();
            });
        }));
        return instance;
    }, props({
        [TakeLastObserver_queue]: none,
    }), {
        [ObserverLike_notify](next) {
            this[TakeLastObserver_queue][QueueableLike_enqueue](next);
        },
    })));
})();
const Observable_takeLast = (options = {}) => pipe(createTakeLastObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
