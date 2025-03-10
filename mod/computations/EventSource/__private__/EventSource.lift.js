/// <reference types="./EventSource.lift.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../../computations.js";
import { bindMethod, none, pipeUnsafe } from "../../../functions.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
const LiftedEventSource_source = Symbol("LiftedEventSource_source");
const LiftedEventSource_operators = Symbol("LiftedEventSource_operators");
const createLiftedEventSource = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableContainerMixin), function LiftedEventSource(source, ops) {
        this[LiftedEventSource_source] = source;
        this[LiftedEventSource_operators] = ops;
        init(DelegatingDisposableContainerMixin, this, source);
        return this;
    }, props({
        [LiftedEventSource_source]: none,
        [LiftedEventSource_operators]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_addEventListener](listener) {
            pipeUnsafe(listener, ...this[LiftedEventSource_operators], bindMethod(this[LiftedEventSource_source], EventSourceLike_addEventListener));
        },
    });
})();
const EventSource_lift = ((operator) => (source) => {
    const sourceSource = source[LiftedEventSource_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedEventSource_operators] ?? []),
    ];
    return createLiftedEventSource(sourceSource, allFunctions);
});
export default EventSource_lift;
