/// <reference types="./Observable.takeLast.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { QueueLike_count, QueueLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import IndexedQueue_toReadonlyArray from "../../../util/PullableQueue/__internal__/IndexedQueue.toReadonlyArray.js";
import { PullableQueueLike_pull, } from "../../../util/__internal__/util.internal.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_takeLast = 
/*@__PURE__*/ (() => {
    const TakeLastObserverMixin_takeLastCount = Symbol("TakeLastObserverMixin_takeLastCount");
    const createTakeLastObserver = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin(), Observer_mixin()), function TakeLastObserverMixin(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[TakeLastObserverMixin_takeLastCount] = takeLastCount;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance, IndexedQueue_toReadonlyArray(), ReadonlyArray_toRunnable(), Observable_observeWith(delegate));
        }));
        return instance;
    }, props({
        [TakeLastObserverMixin_takeLastCount]: 0,
    }), {
        [ObserverLike_notify](next) {
            this[QueueLike_push](next);
            if (this[QueueLike_count] > this[TakeLastObserverMixin_takeLastCount]) {
                this[PullableQueueLike_pull]();
            }
        },
    }));
    return pipe(
    // FIXME: any cast
    createTakeLastObserver, StatefulContainer_takeLast(Observable_liftEnumerableOperator));
})();
export default Observable_takeLast;
