/// <reference types="./Continuation.d.ts" />

export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_dueTime = Symbol("ContinuationLike_dueTime");
export const ContinuationLike_id = Symbol("ContinuationLike_id");
export const compare = (a, b) => {
    const diff = a[ContinuationLike_dueTime] - b[ContinuationLike_dueTime];
    return diff !== 0 ? diff : a[ContinuationLike_id] - b[ContinuationLike_id];
};
