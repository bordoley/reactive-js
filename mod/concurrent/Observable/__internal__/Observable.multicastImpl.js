/// <reference types="./Observable.multicastImpl.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_multicastImpl = (publisherFactory, schedulerOrFactory, options = {}) => observable => {
    const { backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
    const publisher = publisherFactory({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable.addTo(publisher))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(publisher, SinkLike_notify)), Observable_subscribeWithConfig(scheduler, {
        [QueueableLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
    }), Disposable.bindTo(publisher));
    return publisher;
};
export default Observable_multicastImpl;
