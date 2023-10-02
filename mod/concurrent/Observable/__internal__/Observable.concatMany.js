/// <reference types="./Observable.concatMany.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
const Observable_concatMany = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer_createWithDelegate(delegate), Disposable.addTo(delegate), Disposable.onComplete(() => {
        if (next < observables.length) {
            observables[next][ObservableLike_observe](createConcatObserver(delegate, observables, next + 1));
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return (observables) => {
        const onSubscribe = (observer) => {
            pipe(createConcatObserver(observer, observables, 1), bindMethod(observables[0], ObservableLike_observe));
        };
        const isDeferred = Observable_allAreDeferred(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        const isPure = Observable_allArePure(observables);
        return observables.length === 0
            ? Observable_empty()
            : Observable_createWithConfig(onSubscribe, {
                [ObservableLike_isDeferred]: isDeferred,
                [ObservableLike_isRunnable]: isRunnable,
                [ObservableLike_isPure]: isPure,
            });
    };
})();
export default Observable_concatMany;
