/// <reference types="./Broadcaster.lift.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import { none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventSourceLike_sink, LiftedEventSourceLike_source, } from "../../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "../../__mixins__/LiftedSinkToEventListenerMixin.js";
const sinkToEventListener = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToEventListenerMixin(), DelegatingDisposableMixin), function OperatorToEventListener(liftedSink) {
    init(LiftedSinkToEventListenerMixin(), this, liftedSink);
    init(DelegatingDisposableMixin, this, liftedSink);
    return this;
}))();
const createLiftedBroadcaster = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin()), function LiftedBroadcaster(source, op) {
        init(DelegatingDisposableContainerMixin(), this, source);
        const liftedSource = source[LiftedEventSourceLike_source] ?? source;
        const ops = [op, ...(source[LiftedEventSourceLike_sink] ?? [])];
        this[LiftedEventSourceLike_source] = liftedSource;
        this[LiftedEventSourceLike_sink] = ops;
        return this;
    }, props({
        [LiftedEventSourceLike_source]: none,
        [LiftedEventSourceLike_sink]: none,
    }), proto({
        [ComputationLike_isPure]: true,
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_subscribe](listener) {
            const source = this[LiftedEventSourceLike_source];
            const destinationOp = pipeUnsafe(listener, EventListener.toSink(), Sink.toLiftedSink(), ...this[LiftedEventSourceLike_sink], sinkToEventListener);
            source[EventSourceLike_subscribe](destinationOp);
        },
    }));
})();
const Broadcaster_lift = (operator) => (source) => {
    return createLiftedBroadcaster(source, operator);
};
export default Broadcaster_lift;
