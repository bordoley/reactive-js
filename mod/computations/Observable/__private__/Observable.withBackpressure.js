/// <reference types="./Observable.withBackpressure.d.ts" />

import { SourceLike_subscribe } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";
const Observable_withBackpressure = ((config) => (source) => {
    const lifted = DeferredSource.createLifted(source, identity, liftedSinkToObserverWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredSource.create(bindMethod(lifted, SourceLike_subscribe), source);
});
export default Observable_withBackpressure;
