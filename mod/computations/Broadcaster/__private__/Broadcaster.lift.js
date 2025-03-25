/// <reference types="./Broadcaster.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { LiftedSourceLike_operators, LiftedSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin from "../../__mixins__/LiftedOperatorToEventListenerMixin.js";
const operatorToEventListener = /*@__PURE__*/ (() => {
    const createOperatorToEventListener = mixInstanceFactory(include(LiftedOperatorToEventListenerMixin()), function OperatorToEventListener(delegate, operator) {
        init(LiftedOperatorToEventListenerMixin(), this, operator, delegate);
        return this;
    });
    return delegate => operator => createOperatorToEventListener(delegate, operator);
})();
const createLiftedBroadcaster = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin()), function LiftedBroadcaster(source, op) {
        init(DelegatingDisposableContainerMixin(), this, source);
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
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [SourceLike_subscribe](listener) {
            const source = this[LiftedSourceLike_source];
            const destinationOp = pipeUnsafe(listener, EventListener.toOperator(), ...this[LiftedSourceLike_operators], operatorToEventListener(listener));
            source[SourceLike_subscribe](destinationOp);
        },
    }));
})();
const Broadcaster_lift = (operator) => (source) => {
    return createLiftedBroadcaster(source, operator);
};
export default Broadcaster_lift;
