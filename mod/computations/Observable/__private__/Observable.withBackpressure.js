/// <reference types="./Observable.withBackpressure.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";
const Observable_withBackpressure = ((config) => (source) => {
    const lifted = DeferredEventSource.createLifted(source, identity, liftedSinkToObserverWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredEventSource.create(bindMethod(lifted, EventSourceLike_subscribe), source);
});
export default Observable_withBackpressure;
