/// <reference types="./Producer.withBackpressure.d.ts" />

import { ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";
const Producer_withBackpressure = ((config) => (source) => {
    const lifted = DeferredReactiveSource.createLifted(source, identity, liftedSinkToConsumerWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredReactiveSource.create(bindMethod(lifted, ReactiveSourceLike_subscribe), source);
});
export default Producer_withBackpressure;
