/// <reference types="./Continuation.run.d.ts" />
import { ContinuationLike_run } from '../../../scheduling.mjs';

const Continuation$run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};

export { Continuation$run as default };
