/// <reference types="./ContinuationLike.run.d.ts" />
import { ContinuationLike_run } from '../../../scheduling.mjs';

const ContinuationLike__run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};

export { ContinuationLike__run as default };
