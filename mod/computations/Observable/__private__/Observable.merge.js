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
import { DisposableLike_dispose, QueueableLike_complete, } from "../../../utils.js";
const Observable_merge = /*@__PURE__*/ (() => {
    const MergeObservable_observables = Symbol("MergeObservable_observables");
    const isMergeObservable = (observable) => isSome(observable[MergeObservable_observables]);
    const flattenObservables = (observables) => observables.some(isMergeObservable)
        ? observables.flatMap(observable => isMergeObservable(observable)
            ? flattenObservables(observable[MergeObservable_observables])
            : observable)
        : observables;
    const MergeObservableMixin = mix(function MergeObservable(observables) {
        observables = flattenObservables(observables);
        this[ComputationLike_isPure] = Computation.areAllPure(observables);
        this[ComputationLike_isSynchronous] =
            Computation.areAllSynchronous(observables);
        this[MergeObservable_observables] = observables;
        return this;
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
                        observer[QueueableLike_complete]();
                    }
                }), bindMethod(observable, ObservableLike_observe));
            }
        },
    });
    const createDeferredMergeObservable = mixInstanceFactory(include(MergeObservableMixin), function DeferredMergeObservable(observables) {
        init(MergeObservableMixin, this, observables);
        return this;
    });
    const createMulticastMergeObservable = mixInstanceFactory(include(MergeObservableMixin, DelegatingDisposableContainerMixin), function MulticastMergeObservable(observables) {
        const disposable = Disposable.create();
        init(DelegatingDisposableContainerMixin, this, disposable);
        init(MergeObservableMixin, this, observables);
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
        return this;
    }, props(), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
    });
    return (...observables) => Computation.areAllMulticasted(observables)
        ? createMulticastMergeObservable(observables)
        : createDeferredMergeObservable(observables);
})();
export default Observable_merge;
