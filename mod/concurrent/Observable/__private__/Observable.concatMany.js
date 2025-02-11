/// <reference types="./Observable.concatMany.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
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
    const ConcatObservable_observables = Symbol("ConcatObservable_observables");
    const isConcatObservable = (observable) => isSome(observable[ConcatObservable_observables]);
    const flattenObservables = (observables) => observables.every(v => !isConcatObservable(v))
        ? observables
        : observables.flatMap(observable => isConcatObservable(observable)
            ? flattenObservables(observable[ConcatObservable_observables])
            : observable);
    const createConcatObservable = mixInstanceFactory(function ConcatObservable(instance, observables, config) {
        instance[ObservableLike_isPure] = config[ObservableLike_isPure];
        instance[ObservableLike_isRunnable] = config[ObservableLike_isRunnable];
        instance[ConcatObservable_observables] =
            flattenObservables(observables);
        return instance;
    }, props({
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [ConcatObservable_observables]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isMulticasted]: false,
        [ObservableLike_observe](observer) {
            const { [ConcatObservable_observables]: observables } = this;
            pipe(createConcatObserver(observer, observables, 1), bindMethod(observables[0], ObservableLike_observe));
        },
    });
    return (observables) => createConcatObservable(observables, {
        [ObservableLike_isRunnable]: Observable_allAreRunnable(observables),
        [ObservableLike_isPure]: Observable_allArePure(observables),
    });
})();
export default Observable_concatMany;
