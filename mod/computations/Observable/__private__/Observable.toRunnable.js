/// <reference types="./Observable.toRunnable.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
class SynchronousObservableRunnable {
    obs;
    options;
    [ComputationLike_isPure];
    constructor(obs, options) {
        this.obs = obs;
        this.options = options;
        this[ComputationLike_isPure] = Computation.isPure(obs);
    }
    [RunnableLike_eval](sink) {
        pipe(this.obs, Observable_takeWhile(_ => !sink[SinkLike_isCompleted]), Observable_forEach(bindMethod(sink, EventListenerLike_notify)), Observable_run(this.options));
        sink[SinkLike_complete]();
    }
}
const Observable_toRunnable = (options) => (runnable) => newInstance(SynchronousObservableRunnable, runnable, options);
export default Observable_toRunnable;
