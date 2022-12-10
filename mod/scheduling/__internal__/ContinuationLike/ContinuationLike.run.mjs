/// <reference types="./ContinuationLike.run.d.ts" />
import { ContinuationLike_run } from '../../../scheduling.mjs';

const run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};

export { run as default };
