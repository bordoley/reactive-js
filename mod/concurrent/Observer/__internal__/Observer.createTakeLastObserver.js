/// <reference types="./Observer.createTakeLastObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { invoke, none, pipe } from "../../../functions.js";
import { QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_fromIterable from "../../Observable/__internal__/Observable.fromIterable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
const Observer_createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[TakeLastObserver_queue] = IndexedQueue.create(takeLastCount, "drop-oldest");
        pipe(instance, Disposable.onComplete(() => {
            pipe(instance[TakeLastObserver_queue], Observable_fromIterable(), invoke(ObservableLike_observe, delegate));
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
export default Observer_createTakeLastObserver;
