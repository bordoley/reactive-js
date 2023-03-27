/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { TakeLastObserver_takeLastQueue } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import IndexedQueue_toReadonlyArray from "../../../util/Queue/__internal__/IndexedQueue.toReadonlyArray.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_takeLast = /*@__PURE__*/ (() => {
    const createTakeLastObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity]);
        instance[TakeLastObserver_takeLastQueue] = IndexedQueue_createFifoQueue({ capacity: takeLastCount });
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance[TakeLastObserver_takeLastQueue], IndexedQueue_toReadonlyArray(), ReadonlyArray_toObservable(), Observable_observeWith(delegate));
        }));
        return instance;
    }, props({
        [TakeLastObserver_takeLastQueue]: none,
    }), {
        [ObserverLike_notify](next) {
            if (!this[TakeLastObserver_takeLastQueue][QueueableLike_enqueue](next)) {
                this[TakeLastObserver_takeLastQueue][QueueLike_dequeue]();
            }
        },
    }));
    return ((options = {}) => {
        var _a;
        const count = clampPositiveInteger((_a = options.count) !== null && _a !== void 0 ? _a : 1);
        return pipe(createTakeLastObserver, partial(count), Observable_liftEnumerableOperator);
    });
})();
export default Observable_takeLast;
