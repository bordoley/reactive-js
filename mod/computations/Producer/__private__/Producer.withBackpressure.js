/// <reference types="./Producer.withBackpressure.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { liftedSinkToConsumerWithBackPressure } from "./Producer.lift.js";
const Producer_withBackpressure = ((config) => (source) => {
    const lifted = DeferredSource.createLifted(source, identity, liftedSinkToConsumerWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredSource.create(bindMethod(lifted, SourceLike_subscribe), source);
});
export default Producer_withBackpressure;
