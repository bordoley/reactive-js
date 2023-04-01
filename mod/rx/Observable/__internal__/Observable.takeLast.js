/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { TakeLastObserver_takeLastQueue } from "../../../__internal__/symbols.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { invoke, none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Indexed_toReadonlyArray from "../../../util/Indexed/__internal__/Indexed.toReadonlyArray.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeLast = /*@__PURE__*/ (() => {
    const createTakeLastObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]);
        instance[TakeLastObserver_takeLastQueue] = IndexedQueue_createFifoQueue(takeLastCount, "drop-oldest");
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance[TakeLastObserver_takeLastQueue], Indexed_toReadonlyArray(), ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [TakeLastObserver_takeLastQueue]: none,
    }), {
        [ObserverLike_notify](next) {
            this[TakeLastObserver_takeLastQueue][QueueableLike_enqueue](next);
        },
    }));
    return ((options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe(createTakeLastObserver, partial(count), Observable_liftEnumerableOperator);
    });
})();
export default Observable_takeLast;
