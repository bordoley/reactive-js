/// <reference types="./Observable.merge.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mix, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableLike_dispose, } from "../../../utils.js";
const Observable_merge = /*@__PURE__*/ (() => {
    const MergeObservable_observables = Symbol("MergeObservable_observables");
    const isMergeObservable = (observable) => isSome(observable[MergeObservable_observables]);
    const flattenObservables = (observables) => observables.some(isMergeObservable)
        ? observables.flatMap(observable => isMergeObservable(observable)
            ? flattenObservables(observable[MergeObservable_observables])
            : observable)
        : observables;
    const MergeObservableMixin = mix(function MergeObservable(instance, observables) {
        observables = flattenObservables(observables);
        instance[ComputationLike_isPure] = Computation.areAllPure(observables);
        instance[ComputationLike_isSynchronous] =
            Computation.areAllSynchronous(observables);
        instance[MergeObservable_observables] = observables;
        return instance;
    }, props({
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
    const createDeferredMergeObservable = mixInstanceFactory(include(MergeObservableMixin), function DeferredMergeObservable(instance, observables) {
        init(MergeObservableMixin, instance, observables);
        return instance;
    });
    const createMulticastMergeObservable = mixInstanceFactory(include(MergeObservableMixin, DelegatingDisposableContainerMixin), function MulticastMergeObservable(instance, observables) {
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin, instance, disposable);
        init(MergeObservableMixin, instance, observables);
        const count = observables[Array_length];
        let completed = 0;
        for (const observable of observables) {
            pipe(observable, DisposableContainer.onDisposed(e => {
                completed++;
                if (completed >= count || isSome(e)) {
                    disposable[DisposableLike_dispose](e);
                }
            }));
        }
        return instance;
    }, props(), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
    });
    return (...observables) => observables.every(Computation.isMulticasted)
        ? createMulticastMergeObservable(observables)
        : createDeferredMergeObservable(observables);
})();
export default Observable_merge;
