/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ContinuationContextLike_yield, ObserverLike_notify, SchedulerLike_schedule, } from "../../../concurrent.js";
import { isSome, none, partial, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DropOldestBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[TakeLastObserver_queue] = Queue.create({
            capacity: takeLastCount,
            backpressureStrategy: DropOldestBackpressureStrategy,
        });
        pipe(instance, DisposableContainer.onComplete(() => {
            const queue = instance[TakeLastObserver_queue];
            const count = queue[QueueLike_count];
            if (count === 0) {
                return;
            }
            delegate[SchedulerLike_schedule](ctx => {
                let v = none;
                while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
                    delegate[ObserverLike_notify](v);
                    if (queue[QueueLike_count] > 0) {
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
            Observer_assertObserverState(this);
            this[TakeLastObserver_queue][QueueableLike_enqueue](next);
        },
    });
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
