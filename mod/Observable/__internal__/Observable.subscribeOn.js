/// <reference types="./Observable.subscribeOn.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { isFunction, pipe } from "../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../types.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_isDeferredObservable from "./Observable.isDeferredObservable.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = ((schedulerOrFactory, options) => (observable) => {
    const create = Observable_isDeferredObservable(observable)
        ? DeferredObservable_create
        : SharedObservable_create;
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
});
export default Observable_subscribeOn;
