/// <reference types="./Observable.toProducer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, compose } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as CurrentScheduler from "../../../utils/__internal__/CurrentScheduler.js";
import * as Computation from "../../Computation.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_toProducer = ((options) => (observable) => DeferredEventSource.create(compose(Consumer.toObserver(options?.scheduler ?? CurrentScheduler.get()), bindMethod(observable, EventSourceLike_subscribe)), {
    [ComputationLike_isPure]: Computation.isPure(observable),
    [ComputationLike_isSynchronous]: false,
}));
export default Observable_toProducer;
