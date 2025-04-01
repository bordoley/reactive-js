/// <reference types="./Observable.toProducer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, compose } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as Computation from "../../Computation.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Observable_toProducer = ((options) => (observable) => DeferredReactiveSource.create(compose(Consumer.toObserver(options?.scheduler ?? DefaultScheduler.get()), bindMethod(observable, ReactiveSourceLike_subscribe)), {
    [ComputationLike_isPure]: Computation.isPure(observable),
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_toProducer;
