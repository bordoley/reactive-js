/// <reference types="./Observable.mergeMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { bindMethod, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isPure, ObservableLike_observe, } from "../../types.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
const Observable_mergeMany = ((observables) => {
    const onSubscribe = (observer) => {
        const count = ReadonlyArray_getLength(observables);
        let completed = 0;
        for (const observable of observables) {
            pipe(Observer_createWithDelegate(observer), Disposable_addTo(observer), Disposable_onComplete(() => {
                completed++;
                if (completed >= count) {
                    observer[DisposableLike_dispose]();
                }
            }), bindMethod(observable, ObservableLike_observe));
        }
    };
    const isDeferred = Observable_allAreEnumerable(observables);
    const isPure = Observable_allArePure(observables);
    const isRunnable = Observable_allAreRunnable(observables);
    const pureConfig = {
        [ObservableLike_isPure]: isPure,
    };
    return isRunnable && isDeferred
        ? Runnable_create(onSubscribe, pureConfig)
        : isPure && !isRunnable && !isDeferred
            ? MulticastObservable_create(onSubscribe)
            : Observable_create(onSubscribe);
});
export default Observable_mergeMany;
