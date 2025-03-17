/// <reference types="./Observable.takeLast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe } from "../../../computations.js";
import { call, invoke, isSome, none, partial, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_delegate, LiftedEventListenerLike_notify, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { LiftedSinkLike_complete, LiftedSinkLike_completeDelegate, } from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { QueueLike_count, QueueLike_dequeue, QueueLike_enqueue, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import Observable_gen from "./Observable.gen.js";
import Observable_genWithSideEffects from "./Observable.genWithSideEffects.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const ObservableModule = {
    gen: Observable_gen,
    genWithSideEffects: Observable_genWithSideEffects,
};
const createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    function* notifyLast() {
        const queue = this[TakeLastObserver_queue];
        let v = none;
        while (((v = queue[QueueLike_dequeue]()), isSome(v))) {
            yield v;
        }
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function TakeLastObserver(delegate, takeLastCount) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[TakeLastObserver_queue] = Queue.createDropOldest(takeLastCount);
        return this;
    }, props({
        [TakeLastObserver_queue]: none,
    }), proto({
        [LiftedEventListenerLike_notify](next) {
            this[TakeLastObserver_queue][QueueLike_enqueue](next);
        },
        [LiftedSinkLike_complete]() {
            const count = this[TakeLastObserver_queue][QueueLike_count];
            if (count === 0) {
                this[LiftedSinkLike_completeDelegate]();
            }
            else {
                pipe(call(notifyLast, this), Computation.fromIterable(ObservableModule), invoke(ObservableLike_observe, this[LiftedEventListenerLike_delegate]));
            }
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
