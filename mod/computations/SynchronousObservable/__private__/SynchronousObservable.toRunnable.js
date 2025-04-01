/// <reference types="./SynchronousObservable.toRunnable.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
class SynchronousObservableRunnable {
    s;
    o;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(s, o) {
        this.s = s;
        this.o = o;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const scheduler = VirtualTimeScheduler.create(this.o);
        const observer = pipe(sink, Sink.toObserver(scheduler));
        this.s[EventSourceLike_subscribe](observer);
        scheduler[VirtualTimeSchedulerLike_run]();
    }
}
const SynchronousObservable_toRunnable = ((options) => (runnable) => newInstance(SynchronousObservableRunnable, runnable, options));
export default SynchronousObservable_toRunnable;
