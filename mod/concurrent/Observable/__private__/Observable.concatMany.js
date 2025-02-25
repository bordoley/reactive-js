/// <reference types="./Observable.concatMany.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bind, bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_empty from "./Observable.empty.js";
const Observable_concatMany = 
/*@__PURE__*/ (() => {
    const ConcatObserverCtx_delegate = Symbol("ConcatObserverCtx_delegate");
    const ConcatObserverCtx_observables = Symbol("ConcatObserverCtx_observables");
    const ConcatObserverCtx_nextIndex = Symbol("ConcatObserverCtx_nextIndex");
    function onConcatObserverComplete() {
        const delegate = this[ConcatObserverCtx_delegate];
        const observables = this[ConcatObserverCtx_observables];
        const next = this[ConcatObserverCtx_nextIndex];
        if (next < observables[Array_length]) {
            this[ConcatObserverCtx_nextIndex]++;
            observables[next][ObservableLike_observe](createConcatObserver(this));
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }
    const createConcatObserver = (ctx) => {
        const delegate = ctx[ConcatObserverCtx_delegate];
        return pipe(Observer_createWithDelegate(delegate), Disposable.addTo(delegate), DisposableContainer.onComplete(bind(onConcatObserverComplete, ctx)));
    };
    const ConcatObservable_observables = Symbol("ConcatObservable_observables");
    const isConcatObservable = (observable) => isSome(observable[ConcatObservable_observables]);
    const flattenObservables = (observables) => observables.some(isConcatObservable)
        ? observables.flatMap(observable => isConcatObservable(observable)
            ? flattenObservables(observable[ConcatObservable_observables])
            : observable)
        : observables;
    const createConcatObservable = mixInstanceFactory(function ConcatObservable(instance, observables) {
        instance[ObservableLike_isPure] = Observable_allArePure(observables);
        instance[ObservableLike_isRunnable] =
            Observable_allAreRunnable(observables);
        instance[ConcatObservable_observables] =
            flattenObservables(observables);
        return instance;
    }, props({
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [ConcatObservable_observables]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_observe](observer) {
            const { [ConcatObservable_observables]: observables } = this;
            pipe(createConcatObserver({
                [ConcatObserverCtx_delegate]: observer,
                [ConcatObserverCtx_observables]: observables,
                [ConcatObserverCtx_nextIndex]: 1,
            }), bindMethod(observables[0], ObservableLike_observe));
        },
    });
    return (observables) => observables.length === 0
        ? Observable_empty()
        : observables.length === 1
            ? observables[0]
            : createConcatObservable(observables);
})();
export default Observable_concatMany;
