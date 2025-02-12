/// <reference types="./Observable.subscribeOn.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribeOn = ((scheduler, options) => (observable) => Observable_createWithConfig(observer => pipe(observable, Observable_dispatchTo(observer), Observable_subscribeWithConfig(scheduler, {
    [QueueableLike_capacity]: options?.capacity ?? observer[QueueableLike_capacity],
    [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
        observer[QueueableLike_backpressureStrategy],
}), Disposable.addTo(observer)), {
    [ObservableLike_isDeferred]: observable[ObservableLike_isDeferred],
    [ObservableLike_isPure]: observable[ObservableLike_isPure],
    [ObservableLike_isRunnable]: false,
}));
export default Observable_subscribeOn;
