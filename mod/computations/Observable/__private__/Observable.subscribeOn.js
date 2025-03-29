/// <reference types="./Observable.subscribeOn.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Observable_toProducer from "./Observable.toProducer.js";
const Observable_subscribeOn = ((scheduler) => (observable) => DeferredSource.create(observer => 
// FIXME: Conceivably could do some introspection to determine if the observer
// is using the same scheduler and backpressure config and bypass the intermediary
pipe(observable, Observable_toProducer({ scheduler }), invoke(SourceLike_subscribe, observer)), {
    [ComputationLike_isPure]: observable[ComputationLike_isPure],
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_subscribeOn;
