/// <reference types="./Producer.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import * as Computation from "../../Computation.js";
import { LiftedSourceLike_sink, LiftedSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";
const operatorToConsumer = 
/*@__PURE__*/ (() => {
    const createOperatorToConsumer = mixInstanceFactory(include(LiftedSinkToConsumerMixin()), function OperatorToConsumer(delegate, operator) {
        init(LiftedSinkToConsumerMixin(), this, operator, delegate);
        return this;
    });
    return delegate => operator => createOperatorToConsumer(delegate, operator);
})();
const createLiftedProducer = /*@__PURE__*/ (() => {
    return mixInstanceFactory(function LiftedProducer(source, op, config) {
        const liftedSource = source[LiftedSourceLike_source] ?? source;
        const ops = [op, ...(source[LiftedSourceLike_sink] ?? [])];
        this[LiftedSourceLike_source] = liftedSource;
        this[LiftedSourceLike_sink] = ops;
        this[ComputationLike_isPure] =
            Computation.isPure(source) && Computation.isPure(config ?? {});
        return this;
    }, props({
        [ComputationLike_isPure]: true,
        [LiftedSourceLike_source]: none,
        [LiftedSourceLike_sink]: none,
    }), proto({
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [SourceLike_subscribe](consumer) {
            const source = this[LiftedSourceLike_source];
            const destinationOp = pipeUnsafe(consumer, Sink.toOperator(), ...this[LiftedSourceLike_sink], operatorToConsumer(consumer));
            source[SourceLike_subscribe](destinationOp);
        },
    }));
})();
const Producer_lift = (config) => (operator) => (source) => {
    return createLiftedProducer(source, operator, config);
};
export default Producer_lift;
