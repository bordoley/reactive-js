/// <reference types="./SchedulerImplementationLike.d.ts" />
import '../util/DisposableLike.mjs';
import { run } from './ContinuationLike.mjs';
import { SchedulerLike_inContinuation } from './SchedulerLike.mjs';
import { isDisposed } from '../__internal__/util/DisposableLike.mjs';

const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler[SchedulerLike_inContinuation] = true;
        run(continuation);
        scheduler[SchedulerLike_inContinuation] = false;
    }
    return scheduler;
};

export { runContinuation };
