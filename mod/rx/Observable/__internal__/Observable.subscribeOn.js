/// <reference types="./Observable.subscribeOn.d.ts" />

import { bindMethod, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import { QueueableLike_capacity } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribeWithCapacity from "./Observable.subscribeWithCapacity.js";
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => {
    var _a;
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;
    pipe(observable, Observable_enqueue(observer), Observable_subscribeWithCapacity(scheduler, (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : observer[QueueableLike_capacity]), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
});
export default Observable_subscribeOn;
