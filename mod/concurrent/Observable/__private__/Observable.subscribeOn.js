/// <reference types="./Observable.subscribeOn.d.ts" />

import { pipe } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
import Observable_createMulticast from "./Observable.createMulticast.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = ((scheduler, options) => (observable) => {
    // FIXME: Need to check that the source is also pure to multicast
    const create = Observable_isDeferred(observable)
        ? Observable_create
        : Observable_createMulticast;
    return create(observer => {
        pipe(observable, Observable_dispatchTo(observer), Observable_subscribeWithConfig(scheduler, {
            [QueueableLike_capacity]: options?.capacity ?? observer[QueueableLike_capacity],
            [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
                observer[QueueableLike_backpressureStrategy],
        }), Disposable.addTo(observer));
    });
});
export default Observable_subscribeOn;
