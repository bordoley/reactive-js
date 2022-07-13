/// <reference types="./ContinuationLike.d.ts" />
const ContinuationLike_run = Symbol("ContinuationLike_run");
const run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};

export { ContinuationLike_run, run };
