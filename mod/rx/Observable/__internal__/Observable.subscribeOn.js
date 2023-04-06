/// <reference types="./Observable.subscribeOn.d.ts" />

import { bindMethod, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => {
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;
    pipe(observable, Observable_enqueue(observer), Observable_subscribeWithConfig({
        [DispatcherLike_scheduler]: scheduler,
        [BufferLike_capacity]: options?.capacity ?? observer[BufferLike_capacity],
        [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
    }), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
});
export default Observable_subscribeOn;
