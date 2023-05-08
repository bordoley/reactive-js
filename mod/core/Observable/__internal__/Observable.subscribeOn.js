/// <reference types="./Observable.subscribeOn.d.ts" />

import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import { isFunction, pipe } from "../../../functions.js";
import Observable_create from "./Observable.create.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => {
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;
    pipe(observable, Observable_dispatchTo(observer), Observable_subscribeWithConfig(scheduler, {
        [BufferLike_capacity]: options?.capacity ?? observer[BufferLike_capacity],
        [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
    }), Disposable_addTo(observer));
});
export default Observable_subscribeOn;
