/// <reference types="./Producer.withBackpressure.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";
const Producer_withBackpressure = ((config) => (source) => {
    const lifted = DeferredEventSource.createLifted(source, identity, liftedSinkToConsumerWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredEventSource.create(bindMethod(lifted, EventSourceLike_subscribe), source);
});
export default Producer_withBackpressure;
