/// <reference types="./Producer.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { LiftedSourceLike_operators, LiftedSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedOperatorToConsumerMixin from "../../__mixins__/LiftedOperatorToConsumerMixin.js";
const operatorToConsumer = /*@__PURE__*/ (() => {
    const createOperatorToConsumer = mixInstanceFactory(include(LiftedOperatorToConsumerMixin()), function OperatorToConsumer(delegate, operator) {
        init(LiftedOperatorToConsumerMixin(), this, operator, delegate);
        return this;
    });
    return delegate => operator => createOperatorToConsumer(delegate, operator);
})();
const createLiftedProducer = /*@__PURE__*/ (() => {
    return mixInstanceFactory(function LiftedProducer(source, op) {
        const liftedSource = source[LiftedSourceLike_source] ?? source;
        const ops = [op, ...(source[LiftedSourceLike_operators] ?? [])];
        this[LiftedSourceLike_source] = liftedSource;
        this[LiftedSourceLike_operators] = ops;
        return this;
    }, props({
        [LiftedSourceLike_source]: none,
        [LiftedSourceLike_operators]: none,
    }), proto({
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [SourceLike_subscribe](consumer) {
            const source = this[LiftedSourceLike_source];
            const destinationOp = pipeUnsafe(consumer, Sink.toOperator(), ...this[LiftedSourceLike_operators], operatorToConsumer(consumer));
            source[SourceLike_subscribe](destinationOp);
        },
    }));
})();
const Producer_lift = (operator) => (source) => {
    return createLiftedProducer(source, operator);
};
export default Producer_lift;
