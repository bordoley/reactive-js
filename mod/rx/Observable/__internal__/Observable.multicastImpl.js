/// <reference types="./Observable.multicastImpl.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, EventListenerLike_notify, } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_multicastImpl = (publisherFactory, schedulerOrFactory, options = {}) => observable => {
    const { backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
    const publisher = publisherFactory({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), Observable_subscribeWithConfig({
        [DispatcherLike_scheduler]: scheduler,
        [BufferLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
    }), Disposable_bindTo(publisher));
    return publisher;
};
export default Observable_multicastImpl;
