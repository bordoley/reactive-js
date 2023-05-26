/// <reference types="./Observable.multicastImpl.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, SinkLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_multicastImpl = (publisherFactory, schedulerOrFactory, options = {}) => observable => {
    const { backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
    const publisher = publisherFactory({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(publisher, SinkLike_notify)), Observable_subscribeWithConfig(scheduler, {
        [QueueableLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
    }), Disposable_bindTo(publisher));
    return publisher;
};
export default Observable_multicastImpl;
