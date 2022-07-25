/// <reference types="./ContinuationLike.d.ts" />
import { ContinuationLike_run } from '../util.mjs';

const run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};

export { run };
