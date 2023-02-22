/// <reference types="./Continuation.run.d.ts" />

import { ContinuationLike_run } from "../../../scheduling.js";
const Continuation_run = continuation => {
    continuation[ContinuationLike_run]();
    return continuation;
};
export default Continuation_run;
