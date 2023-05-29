/// <reference types="./Observable.concatMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { bindMethod, invoke, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike_dispose, EnumerableLike_enumerate, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
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
            pipe(createConcatObserver(observer, observables, 1), bindMethod(observables[0], ObservableLike_observe));
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isDeferred = Observable_allAreDeferred(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        const isPure = Observable_allArePure(observables);
        return observables.length === 0
            ? Observable_empty()
            : isEnumerable
                ? EnumerableBase_create(pipeLazy(observables, ReadonlyArray_map(invoke(EnumerableLike_enumerate)), ReadonlyArray_enumerate(), Enumerator_concatAll()), { [ObservableLike_isPure]: isPure })
                : Observable_createWithConfig(onSubscribe, {
                    [ObservableLike_isDeferred]: isDeferred,
                    [ObservableLike_isRunnable]: isRunnable,
                    [ObservableLike_isPure]: isPure,
                });
    };
})();
export default Observable_concatMany;
