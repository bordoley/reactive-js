/// <reference types="./EventSource.lift.d.ts" />

import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, } from "../../../computations.js";
import { EventSourceLike_addEventListener, } from "../../../events.js";
import { bindMethod, none, pipeUnsafe } from "../../../functions.js";
const LiftedEventSource_source = Symbol("LiftedEventSource_source");
const LiftedEventSource_operators = Symbol("LiftedEventSource_operators");
const createLiftedEventSource = /*@__PURE__*/ (() => {
    return mixInstanceFactory(function LiftedEventSource(instance, source, ops) {
        instance[LiftedEventSource_source] = source;
        instance[LiftedEventSource_operators] = ops;
        return instance;
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
