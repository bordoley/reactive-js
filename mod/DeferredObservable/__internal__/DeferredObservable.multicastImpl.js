/// <reference types="./DeferredObservable.multicastImpl.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../functions.js";
import { BufferLike_capacity, EventListenerLike_notify, QueueableLike_backpressureStrategy, } from "../../types.js";
const DeferredObservable_multicastImpl = (publisherFactory, schedulerOrFactory, options = {}) => observable => {
    const { backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
    const publisher = publisherFactory({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), Observable_subscribeWithConfig(scheduler, {
        [BufferLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
    }), Disposable_bindTo(publisher));
    return publisher;
};
export default DeferredObservable_multicastImpl;
