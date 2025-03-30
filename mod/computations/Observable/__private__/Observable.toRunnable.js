/// <reference types="./Observable.toRunnable.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, SourceLike_subscribe, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
class SynchronousObservableRunnable {
    s;
    o;
    [ComputationLike_isPure];
    constructor(s, o) {
        this.s = s;
        this.o = o;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const scheduler = VirtualTimeScheduler.create(this.o);
        const observer = pipe(sink, Sink.toObserver(scheduler));
        this.s[SourceLike_subscribe](observer);
        scheduler[VirtualTimeSchedulerLike_run]();
    }
}
const Observable_toRunnable = ((options) => (runnable) => newInstance(SynchronousObservableRunnable, runnable, options));
export default Observable_toRunnable;
