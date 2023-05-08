/// <reference types="./Observable.subscribeOn.d.ts" />

import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import { isFunction, pipe } from "../../../functions.js";
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Observable_create from "./Observable.create.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
// FIXME: improve return type.
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => {
    // FIXME: type test for VTS
    const create = Observable_isDeferred(observable)
        ? DeferredObservable_create
        : Observable_create;
    return create(observer => {
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
            : schedulerOrFactory;
        pipe(observable, Observable_dispatchTo(observer), Observable_subscribeWithConfig(scheduler, {
            [BufferLike_capacity]: options?.capacity ?? observer[BufferLike_capacity],
            [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
                observer[QueueableLike_backpressureStrategy],
        }), Disposable_addTo(observer));
    });
};
export default Observable_subscribeOn;
