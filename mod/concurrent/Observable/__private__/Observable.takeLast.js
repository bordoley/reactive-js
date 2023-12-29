/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose, IndexedQueueLike_get, QueueableLike_count, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    return createInstanceFactory(mix(include(DisposableMixin, DelegatingObserverMixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[TakeLastObserver_queue] = IndexedQueue.create({
            capacity: takeLastCount,
            backpressureStrategy: "drop-oldest",
        });
        pipe(instance, Disposable.onComplete(() => {
            const queue = instance[TakeLastObserver_queue];
            let index = 0;
            const count = queue[QueueableLike_count];
            if (count === 0) {
                return;
            }
            delegate[SchedulerLike_schedule](ctx => {
                while (index < count) {
                    const v = queue[IndexedQueueLike_get](index);
                    delegate[SinkLike_notify](v);
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
        [SinkLike_notify](next) {
            this[TakeLastObserver_queue][QueueableLike_enqueue](next);
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe(Observer_createTakeLastObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeLast;
