/// <reference types="./Observable.subscribeOn.d.ts" />

import { bindMethod, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => {
    var _a, _b;
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;
    pipe(observable, Observable_enqueue(observer), Observable_subscribeWithCapacityAndBackpressureStrategy(scheduler, (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : observer[QueueableLike_capacity], (_b = options === null || options === void 0 ? void 0 : options.backpressureStrategy) !== null && _b !== void 0 ? _b : observer[QueueableLike_backpressureStrategy]), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
});
export default Observable_subscribeOn;
