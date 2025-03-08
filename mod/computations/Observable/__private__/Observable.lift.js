/// <reference types="./Observable.lift.d.ts" />

import { include, init, mix, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { bindMethod, none, pipeUnsafe, } from "../../../functions.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
const LiftedObservableLike_operators = Symbol("LiftedObservableMixin_operators");
const createLiftedObservable = /*@__PURE__*/ (() => {
    const LiftedObservableMixin = mix(function LiftedObservable(instance, source, ops) {
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;
        return instance;
    }, props({
        [LiftedObservableLike_source]: none,
        [LiftedObservableLike_operators]: none,
    }), {
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedObservableLike_operators], bindMethod(this[LiftedObservableLike_source], ObservableLike_observe));
        },
    });
    const createDeferredLiftedObservable = mixInstanceFactory(include(LiftedObservableMixin), function DeferredLiftedObservable(instance, source, ops, config) {
        init(LiftedObservableMixin, instance, source, ops);
        instance[ComputationLike_isPure] = config[ComputationLike_isPure];
        instance[ComputationLike_isSynchronous] =
            config[ComputationLike_isSynchronous];
        return instance;
    }, props({
        [ComputationLike_isPure]: true,
        [ComputationLike_isSynchronous]: true,
    }));
    const createMulticastLiftedObservable = mixInstanceFactory(include(LiftedObservableMixin, DelegatingDisposableContainerMixin), function DeferredLiftedObservable(instance, source, ops) {
        init(LiftedObservableMixin, instance, source, ops);
        init(DelegatingDisposableContainerMixin, instance, source);
        return instance;
    }, props(), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
    });
    return (obs, ops, config) => Computation.isDeferred(config)
        ? createDeferredLiftedObservable(obs, ops, config)
        : createMulticastLiftedObservable(obs, ops);
})();
export const ObservableLift_isStateless = Symbol("ObservableLift_isStateless");
const Observable_lift = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    const isStateless = config[ObservableLift_isStateless] ?? false;
    const isDeferred = !isStateless || Computation.isDeferred(source);
    const isSynchronousObservable = config[ComputationLike_isSynchronous] &&
        source[ComputationLike_isSynchronous];
    const isPure = !isDeferred ||
        (config[ComputationLike_isPure] && source[ComputationLike_isPure]);
    const liftedConfig = {
        [ComputationLike_isDeferred]: isDeferred,
        [ComputationLike_isPure]: isPure,
        [ComputationLike_isSynchronous]: isSynchronousObservable,
    };
    return createLiftedObservable(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
