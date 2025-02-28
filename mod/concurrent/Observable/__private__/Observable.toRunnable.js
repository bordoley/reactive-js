/// <reference types="./Observable.toRunnable.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
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
        this[ComputationLike_isPure] = obs[ComputationLike_isPure] ?? true;
    }
    [RunnableLike_eval](sink) {
        pipe(this.obs, Observable_takeWhile(_ => !sink[SinkLike_isComplete]), Observable_forEach(bindMethod(sink, SinkLike_next)), Observable_run(this.options));
        sink[SinkLike_complete]();
    }
}
const Observable_toRunnable = (options) => (runnable) => newInstance(SynchronousObservableRunnable, runnable, options);
export default Observable_toRunnable;
