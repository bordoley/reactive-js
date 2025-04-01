/// <reference types="./Broadcaster.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import { Sink_toLiftedSink } from "../../../utils/__internal__/Sink/__private__/Sink.toLiftedSink.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedReactiveSourceLike_sink, LiftedReactiveSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "../../__mixins__/LiftedSinkToEventListenerMixin.js";
const sinkToEventListener = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToEventListenerMixin(), DelegatingDisposableMixin), function OperatorToEventListener(liftedSink) {
    init(LiftedSinkToEventListenerMixin(), this, liftedSink);
    init(DelegatingDisposableMixin, this, liftedSink);
    return this;
}))();
const createLiftedBroadcaster = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin()), function LiftedBroadcaster(source, op) {
        init(DelegatingDisposableContainerMixin(), this, source);
        const liftedSource = source[LiftedReactiveSourceLike_source] ?? source;
        const ops = [
            op,
            ...(source[LiftedReactiveSourceLike_sink] ?? []),
        ];
        this[LiftedReactiveSourceLike_source] = liftedSource;
        this[LiftedReactiveSourceLike_sink] = ops;
        return this;
    }, props({
        [LiftedReactiveSourceLike_source]: none,
        [LiftedReactiveSourceLike_sink]: none,
    }), proto({
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ReactiveSourceLike_subscribe](listener) {
            const source = this[LiftedReactiveSourceLike_source];
            const destinationOp = pipeUnsafe(listener, EventListener.toSink(), Sink_toLiftedSink(), ...this[LiftedReactiveSourceLike_sink], sinkToEventListener);
            source[ReactiveSourceLike_subscribe](destinationOp);
        },
    }));
})();
const Broadcaster_lift = (operator) => (source) => {
    return createLiftedBroadcaster(source, operator);
};
export default Broadcaster_lift;
