/// <reference types="./Observable.mergeObservables.d.ts" />

import { __MergeObserverCtx_completedCount } from "../../../__internal__/symbols.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import Enumerablee_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
const Observable_mergeObservables = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
        ctx[__MergeObserverCtx_completedCount]++;
        if (ctx[__MergeObserverCtx_completedCount] >= count) {
            delegate[DisposableLike_dispose]();
        }
    }));
    return (observables) => {
        const onSubscribe = (observer) => {
            const count = ReadonlyArray_getLength(observables);
            const ctx = { [__MergeObserverCtx_completedCount]: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), Observer_sourceFrom(observable));
            }
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return isEnumerable
            ? Enumerablee_create(onSubscribe)
            : isRunnable
                ? Runnable_create(onSubscribe)
                : Observable_create(onSubscribe);
    };
})();
export default Observable_mergeObservables;
