/// <reference types="./Observable.subscribeOn.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_subscribeOn = ((scheduler) => (observable) => Observable_createWithConfig(subscriber => 
// FIXME: Conceivably could do some introspection to determine if the observer
// is using the same scheduler and backpressure config and bypass the intermediary
pipe(observable, Observable_subscribe(scheduler, { subscriber })), {
    [ComputationLike_isPure]: observable[ComputationLike_isPure],
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_subscribeOn;
