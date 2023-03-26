/// <reference types="./Observable.subscribeOn.d.ts" />

import { bindMethod, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete } from "../../../rx.js";
import { SchedulerLike_requestYield, } from "../../../scheduling.js";
import { QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "./Observable.subscribeWithMaxBufferSize.js";
const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => {
    var _a;
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(v => {
        if (!observer[QueueableLike_push](v)) {
            scheduler[SchedulerLike_requestYield]();
        }
    }), Observable_subscribeWithMaxBufferSize(scheduler, (_a = options === null || options === void 0 ? void 0 : options.maxBufferSize) !== null && _a !== void 0 ? _a : observer[QueueableLike_maxBufferSize]), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
});
export default Observable_subscribeOn;
