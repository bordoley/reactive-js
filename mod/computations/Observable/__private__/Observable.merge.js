/// <reference types="./Observable.merge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
const Observable_merge = /*@__PURE__*/ (() => {
    const MergeObservable_observables = Symbol("MergeObservable_observables");
    const isMergeObservable = (observable) => isSome(observable[MergeObservable_observables]);
    const flattenObservables = (observables) => observables.some(isMergeObservable)
        ? observables.flatMap(observable => isMergeObservable(observable)
            ? flattenObservables(observable[MergeObservable_observables])
            : observable)
        : observables;
    return mixInstanceFactory(function MergeObservable(instance, ...observables) {
        observables = flattenObservables(observables);
        instance[ComputationLike_isDeferred] =
            !Computation.areAllMulticasted(observables);
        instance[ComputationLike_isPure] = Computation.areAllPure(observables);
        instance[ComputationLike_isSynchronous] =
            Computation.areAllSynchronous(observables);
        instance[MergeObservable_observables] = observables;
        return instance;
    }, props({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
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
export default Observable_merge;
