/// <reference types="./Observable.concatObservables.d.ts" />

import { pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_create from "./Observable.create.js";
const Observable_concatObservables = 
/*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        if (next < ReadonlyArray_getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), Observer_sourceFrom(observables[next]));
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return (observables) => {
        const onSubscribe = (observer) => {
            if (!ReadonlyArray_isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), Observer_sourceFrom(observables[0]));
            }
            else {
                observer[DisposableLike_dispose]();
            }
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_create(onSubscribe, isEnumerable, isRunnable);
    };
})();
export default Observable_concatObservables;
