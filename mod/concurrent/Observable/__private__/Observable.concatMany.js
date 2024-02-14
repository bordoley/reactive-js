/// <reference types="./Observable.concatMany.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_concatMany = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer_createWithDelegate(delegate), Disposable.addTo(delegate), DisposableContainer.onComplete(() => {
        if (next < observables[Array_length]) {
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
        const isRunnable = Observable_allAreRunnable(observables);
        const isPure = Observable_allArePure(observables);
        return Observable_createWithConfig(onSubscribe, {
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isMulticasted]: false,
            [ObservableLike_isRunnable]: isRunnable,
            [ObservableLike_isPure]: isPure,
        });
    };
})();
export default Observable_concatMany;
