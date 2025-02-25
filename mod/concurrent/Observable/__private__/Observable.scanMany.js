/// <reference types="./Observable.scanMany.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_notify from "./Observable.notify.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";
const Observable_scanMany = ((scanner, initialValue, options) => {
    const innerType = options?.innerType ?? {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: true,
    };
    return (observable) => {
        const isPure = innerType[ObservableLike_isPure] && observable[ObservableLike_isPure];
        const isRunnable = innerType[ObservableLike_isRunnable] &&
            observable[ObservableLike_isRunnable];
        return Observable_createWithConfig(observer => {
            const accFeedbackStream = pipe(Subject.create(), Disposable.addTo(observer));
            pipe(observable, Observable_withLatestFrom(accFeedbackStream), Observable_switchMap(([next, acc]) => scanner(acc, next), {
                innerType: {
                    [ObservableLike_isDeferred]: true,
                    [ObservableLike_isPure]: false,
                    [ObservableLike_isRunnable]: false,
                },
            }), Observable_notify(accFeedbackStream), invoke(ObservableLike_observe, observer));
            accFeedbackStream[EventListenerLike_notify](initialValue());
        }, {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isPure]: isPure,
            [ObservableLike_isRunnable]: isRunnable,
        });
    };
});
export default Observable_scanMany;
