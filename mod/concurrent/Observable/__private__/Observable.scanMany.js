/// <reference types="./Observable.scanMany.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { bindMethod, invoke, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_zipLatest from "./Observable.zipLatest.js";
const Observable_scanMany = ((scanner, initialValue, options) => (observable) => Observable_createWithConfig(observer => {
    const accFeedbackStream = pipe(Subject.create(), Disposable.addTo(observer));
    pipe(Observable_zipLatest(accFeedbackStream, observable), Observable_switchMap(([acc, next]) => scanner(acc, next), {
        innerType: {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isPure]: false,
            [ObservableLike_isRunnable]: false,
        },
    }), Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)), invoke(ObservableLike_observe, observer));
    accFeedbackStream[SinkLike_notify](initialValue());
}, options?.innerType ?? {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
}));
export default Observable_scanMany;
