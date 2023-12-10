/// <reference types="./Observable.mergeMany.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_mergeMany = ((observables) => {
    const onSubscribe = (observer) => {
        const count = observables.length;
        let completed = 0;
        for (const observable of observables) {
            pipe(Observer_createWithDelegate(observer), Disposable.addTo(observer), Disposable.onComplete(() => {
                completed++;
                if (completed >= count) {
                    observer[DisposableLike_dispose]();
                }
            }), bindMethod(observable, ObservableLike_observe));
        }
    };
    const isDeferred = Observable_allAreDeferred(observables);
    const isPure = Observable_allArePure(observables);
    const isRunnable = Observable_allAreRunnable(observables);
    return Observable_createWithConfig(onSubscribe, {
        [ObservableLike_isDeferred]: isDeferred || (!isDeferred && !isPure && !isRunnable),
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
    });
});
export default Observable_mergeMany;
