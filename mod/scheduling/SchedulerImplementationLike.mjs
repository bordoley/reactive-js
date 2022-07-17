/// <reference types="./SchedulerImplementationLike.d.ts" />
import { i as isDisposed } from '../DisposableLike-ef44e42b.mjs';
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
