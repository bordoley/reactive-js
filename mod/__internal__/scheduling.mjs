/// <reference types="./scheduling.d.ts" />
import { run } from '../scheduling/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed } from './util/DisposableLike.mjs';

const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler[SchedulerLike_inContinuation] = true;
        run(continuation);
        scheduler[SchedulerLike_inContinuation] = false;
    }
    return scheduler;
};

export { SchedulerLike_inContinuation, runContinuation };
