/// <reference types="./Observable.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import * as Computation from "../../Computation.js";
import { LiftedSourceLike_sink, LiftedSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedSinkToObserverMixin from "../../__mixins__/LiftedSinkToObserverMixin.js";
export const operatorToObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToObserverMixin()), function OperatorToObserver(operator) {
    init(LiftedSinkToObserverMixin(), this, operator);
    return this;
}))();
const createLiftedObservable = /*@__PURE__*/ (() => {
    return mixInstanceFactory(function LiftedObservable(source, op, config) {
        const liftedSource = source[LiftedSourceLike_source] ?? source;
        const ops = [op, ...(source[LiftedSourceLike_sink] ?? [])];
        this[LiftedSourceLike_source] = liftedSource;
        this[LiftedSourceLike_sink] = ops;
        this[ComputationLike_isSynchronous] =
            Computation.isSynchronous(source) &&
                Computation.isSynchronous(config ?? {});
        this[ComputationLike_isPure] =
            Computation.isPure(source) && Computation.isPure(config ?? {});
        return this;
    }, props({
        [LiftedSourceLike_source]: none,
        [LiftedSourceLike_sink]: none,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), proto({
        [ComputationLike_isDeferred]: true,
        [SourceLike_subscribe](observer) {
            const source = this[LiftedSourceLike_source];
            const destinationOp = pipeUnsafe(observer, Sink.toOperator(), ...this[LiftedSourceLike_sink], operatorToObserver);
            source[SourceLike_subscribe](destinationOp);
        },
    }));
})();
const Observable_lift = (config) => (operator) => (source) => {
    return createLiftedObservable(source, operator, config);
};
export default Observable_lift;
