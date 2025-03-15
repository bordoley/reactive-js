/// <reference types="./Observable.subscribeOn.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_toProducer from "./Observable.toProducer.js";
const Observable_subscribeOn = ((scheduler) => (observable) => Observable_createWithConfig(observer => 
// FIXME: Conceivably could do some introspection to determine if the observer
// is using the same scheduler and backpressure config and bypass the intermediary
pipe(observable, Observable_toProducer(scheduler), invoke(ProducerLike_consume, observer)), {
    [ComputationLike_isPure]: observable[ComputationLike_isPure],
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_subscribeOn;
