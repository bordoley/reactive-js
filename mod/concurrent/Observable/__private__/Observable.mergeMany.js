/// <reference types="./Observable.mergeMany.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_allAreMulticasted from "./Observable.allAreMulticasted.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
const Observable_mergeMany = (() => {
    const MergeObservable_observables = Symbol("MergeObservable_observables");
    const isMergeObservable = (observable) => isSome(observable[MergeObservable_observables]);
    const flattenObservables = (observables) => observables.some(isMergeObservable)
        ? observables.flatMap(observable => isMergeObservable(observable)
            ? flattenObservables(observable[MergeObservable_observables])
            : observable)
        : observables;
    return mixInstanceFactory(function MergeObservable(instance, observables) {
        instance[ObservableLike_isDeferred] = !(instance[ObservableLike_isMulticasted] = Observable_allAreMulticasted(observables));
        instance[ObservableLike_isPure] = Observable_allArePure(observables);
        instance[ObservableLike_isRunnable] =
            Observable_allAreRunnable(observables);
        instance[MergeObservable_observables] = flattenObservables(observables);
        return instance;
    }, props({
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isMulticasted]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
        [MergeObservable_observables]: none,
    }), {
        [ObservableLike_observe](observer) {
            const observables = this[MergeObservable_observables];
            const count = observables[Array_length];
            let completed = 0;
            for (const observable of observables) {
                pipe(Observer_createWithDelegate(observer), Disposable.addTo(observer), DisposableContainer.onComplete(() => {
                    completed++;
                    if (completed >= count) {
                        observer[DisposableLike_dispose]();
                    }
                }), bindMethod(observable, ObservableLike_observe));
            }
        },
    });
})();
export default Observable_mergeMany;
