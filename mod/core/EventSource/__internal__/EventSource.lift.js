/// <reference types="./EventSource.lift.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/core.js";
import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { EventSourceLike_addEventListener, } from "../../../core.js";
import { bindMethod, none, pipeUnsafe } from "../../../functions.js";
const createLiftedEventSource = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function LiftedEventSource(instance, source, ops) {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;
        return instance;
    }, props({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            pipeUnsafe(listener, ...this[LiftedLike_operators], bindMethod(this[LiftedLike_source], EventSourceLike_addEventListener));
        },
    }));
})();
const EventSource_lift = (operator) => (source) => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return createLiftedEventSource(sourceSource, allFunctions);
};
export default EventSource_lift;
