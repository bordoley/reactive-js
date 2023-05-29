/// <reference types="./Observer.createTakeLastObserver.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_toObservable from "../../IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { TakeLastLike_queue, } from "../../__internal__/types.js";
import { invoke, none, pipe } from "../../functions.js";
import { ObservableLike_observe, QueueableLike_enqueue, SinkLike_notify, } from "../../types.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createTakeLastObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
    init(Disposable_mixin, instance);
    Observer_mixin_initFromDelegate(instance, delegate);
    instance[TakeLastLike_queue] = Queue_createIndexedQueue(takeLastCount, "drop-oldest");
    pipe(instance, Disposable_onComplete(() => {
        pipe(instance[TakeLastLike_queue], IndexedCollection_toObservable(), invoke(ObservableLike_observe, delegate));
    }));
    return instance;
}, props({
    [TakeLastLike_queue]: none,
}), {
    [SinkLike_notify](next) {
        this[TakeLastLike_queue][QueueableLike_enqueue](next);
    },
})))();
export default Observer_createTakeLastObserver;
