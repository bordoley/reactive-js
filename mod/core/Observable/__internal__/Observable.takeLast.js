/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, mix, props, } from "../../../__internal__/mixins.js";
import { __TakeLastObserver_takeLastQueue } from "../../../__internal__/symbols.js";
import { ObservableLike_observe, ObserverLike_notify, QueueableLike_enqueue, } from "../../../core.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_toReadonlyArray from "../../../core/IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import Queue_createIndexedQueue from "../../../core/Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { invoke, none, partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_takeLast = /*@__PURE__*/ (() => {
    const createTakeLastObserver = createInstanceFactory(mix(include(Observer_mixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[__TakeLastObserver_takeLastQueue] = Queue_createIndexedQueue(takeLastCount, "drop-oldest");
        pipe(instance, Disposable_onComplete(() => {
            pipe(instance[__TakeLastObserver_takeLastQueue], IndexedCollection_toReadonlyArray(), ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [__TakeLastObserver_takeLastQueue]: none,
    }), {
        [ObserverLike_notify](next) {
            this[__TakeLastObserver_takeLastQueue][QueueableLike_enqueue](next);
        },
    }));
    return ((options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe(createTakeLastObserver, partial(count), Enumerable_lift);
    });
})();
export default Observable_takeLast;
