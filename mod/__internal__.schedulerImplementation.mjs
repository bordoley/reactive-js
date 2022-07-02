/// <reference types="./__internal__.schedulerImplementation.d.ts" />
import { isDisposed } from './disposable.mjs';

const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler.inContinuation = true;
        continuation.continue();
        scheduler.inContinuation = false;
    }
    return scheduler;
};

export { runContinuation };
