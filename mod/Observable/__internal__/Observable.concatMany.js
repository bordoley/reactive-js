/// <reference types="./Observable.concatMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import { bindMethod, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_concatMany = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        if (next < ReadonlyArray_getLength(observables)) {
            observables[next][ObservableLike_observe](createConcatObserver(delegate, observables, next + 1));
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return (observables) => {
        const onSubscribe = (observer) => {
            if (!ReadonlyArray_isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), bindMethod(observables[0], ObservableLike_observe));
            }
            else {
                observer[DisposableLike_dispose]();
            }
        };
        const isDeferred = Observable_allAreDeferred(observables);
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_createWithConfig(onSubscribe, {
            [ObservableLike_isDeferred]: isDeferred,
            [ObservableLike_isEnumerable]: isEnumerable,
            [ObservableLike_isRunnable]: isRunnable,
        });
    };
})();
export default Observable_concatMany;
