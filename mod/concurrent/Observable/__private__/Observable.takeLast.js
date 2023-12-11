/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { invoke, none, partial, pipe } from "../../../functions.js";
import { QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createTakeLastObserver = /*@__PURE__*/ (() => {
    const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");
    return createInstanceFactory(mix(include(DisposableMixin, DelegatingObserverMixin()), function TakeLastObserver(instance, delegate, takeLastCount) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
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
const Observable_takeLast = (options = {}) => pipe(Observer_createTakeLastObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeLast;
