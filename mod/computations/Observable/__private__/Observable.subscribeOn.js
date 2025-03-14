/// <reference types="./Observable.subscribeOn.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, SinkLike_complete, } from "../../../utils.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_subscribeOn = ((scheduler, options) => (observable) => Observable_createWithConfig(observer => pipe(observable, Observable_enqueue(observer), Observable_subscribe(scheduler, {
    [QueueableLike_capacity]: options?.capacity ?? observer[QueueableLike_capacity],
    [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
        observer[QueueableLike_backpressureStrategy],
}), Disposable.addTo(observer), DisposableContainer.onComplete(bindMethod(observer, SinkLike_complete))), {
    [ComputationLike_isPure]: observable[ComputationLike_isPure],
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_subscribeOn;
