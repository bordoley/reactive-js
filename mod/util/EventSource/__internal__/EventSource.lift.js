/// <reference types="./EventSource.lift.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/containers.js";
import { bindMethod, newInstance, pipeUnsafe, } from "../../../functions.js";
import { EventSourceLike_addEventListener, } from "../../../util.js";
class LiftedEventSource {
    [LiftedLike_source];
    [LiftedLike_operators];
    constructor(source, operators) {
        this[LiftedLike_source] = source;
        this[LiftedLike_operators] = operators;
    }
    [EventSourceLike_addEventListener](listener) {
        pipeUnsafe(listener, ...this[LiftedLike_operators], bindMethod(this[LiftedLike_source], EventSourceLike_addEventListener));
    }
}
const EventSource_lift = (operator) => (source) => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return newInstance(LiftedEventSource, sourceSource, allFunctions);
};
export default EventSource_lift;
