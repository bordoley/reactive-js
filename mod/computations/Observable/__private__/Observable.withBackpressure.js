/// <reference types="./Observable.withBackpressure.d.ts" />

import { ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, identity } from "../../../functions.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { liftedSinkToObserverWithBackPressure } from "./Observable.lift.js";
const Observable_withBackpressure = ((config) => (source) => {
    const lifted = DeferredReactiveSource.createLifted(source, identity, liftedSinkToObserverWithBackPressure(config), source);
    // Ensures that upstream callers don't lift away the backpressure.
    return DeferredReactiveSource.create(bindMethod(lifted, ReactiveSourceLike_subscribe), source);
});
export default Observable_withBackpressure;
