/// <reference types="./Observer.createTakeLastObserver.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_toReadonlyArray from "../../IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { createInstanceFactory, include, mix, props, } from "../../__internal__/mixins.js";
import { __TakeLastObserver_takeLastQueue } from "../../__internal__/symbols.js";
import { invoke, none, pipe } from "../../functions.js";
import { ObservableLike_observe, QueueableLike_enqueue, SinkLike_notify, } from "../../types.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createTakeLastObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_mixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[__TakeLastObserver_takeLastQueue] = Queue_createIndexedQueue(takeLastCount, "drop-oldest");
        pipe(instance, Disposable_onComplete(() => {
            pipe(instance[__TakeLastObserver_takeLastQueue], IndexedCollection_toReadonlyArray(), ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [__TakeLastObserver_takeLastQueue]: none,
    }), {
        [SinkLike_notify](next) {
            this[__TakeLastObserver_takeLastQueue][QueueableLike_enqueue](next);
        },
    }));
})();
export default Observer_createTakeLastObserver;
