/// <reference types="./SchedulerImplementationLike.d.ts" />
import { isDisposed } from '../util/DisposableLike.mjs';
import { run } from './ContinuationLike.mjs';
import { SchedulerLike_inContinuation } from './SchedulerLike.mjs';

const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler[SchedulerLike_inContinuation] = true;
        run(continuation);
        scheduler[SchedulerLike_inContinuation] = false;
    }
    return scheduler;
};

export { runContinuation };
