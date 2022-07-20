/// <reference types="./scheduling.d.ts" />
import { run } from '../scheduling/ContinuationLike.mjs';
import { SchedulerLike_inContinuation } from '../scheduling/SchedulerLike.mjs';
import { isDisposed } from '../util/DisposableLike.mjs';

const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler[SchedulerLike_inContinuation] = true;
        run(continuation);
        scheduler[SchedulerLike_inContinuation] = false;
    }
    return scheduler;
};

export { runContinuation };
