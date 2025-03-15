/// <reference types="./Observable.takeLast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe } from "../../../computations.js";
import { call, invoke, isSome, none, partial, pipe, } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_completeDelegate, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { EventListenerLike_notify, QueueLike_count, QueueLike_dequeue, } from "../../../utils.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
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
        this[TakeLastObserver_queue] = pipe(Queue.createDropOldestWithoutBackpressure(takeLastCount), Disposable.addTo(this));
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
            else {
                pipe(call(notifyLast, this), Observable_fromIterable(), invoke(ObservableLike_observe, this[LiftedObserverLike_delegate]));
            }
        },
    }));
})();
const Observable_takeLast = (options = {}) => pipe((createTakeLastObserver), partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_takeLast;
