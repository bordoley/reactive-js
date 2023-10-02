/// <reference types="./Observable.subscribeOn.d.ts" />

import { isFunction, pipe } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = ((schedulerOrFactory, options) => (observable) => {
    const create = Observable_isDeferred(observable)
        ? Observable_create
        : Observable_createMulticast;
    return create(observer => {
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable.addTo(observer))
            : schedulerOrFactory;
        pipe(observable, Observable_dispatchTo(observer), Observable_subscribeWithConfig(scheduler, {
            [QueueableLike_capacity]: options?.capacity ?? observer[QueueableLike_capacity],
            [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
                observer[QueueableLike_backpressureStrategy],
        }), Disposable.addTo(observer));
    });
});
export default Observable_subscribeOn;
