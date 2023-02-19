/// <reference types="./Continuation.d.ts" />
import Continuation_run from './Continuation/__internal__/Continuation.run.mjs';
import { Continuation__now, Continuation__yield } from './Continuation/__internal__/Continuation.create.mjs';

/**
 * @category ContinuationEffect
 */
const __now = Continuation__now;
/**
 * @category ContinuationEffect
 */
const __yield = Continuation__yield;
const run = Continuation_run;
/** @ignore */
const Continuation = {
    run,
};

export { __now, __yield, Continuation as default, run };
