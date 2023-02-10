/// <reference types="./Continuation.d.ts" />
import Continuation_run from './Continuation/__internal__/Continuation.run.mjs';
import Continuation_yield_ from './Continuation/__internal__/Continuation.yield.mjs';

const yield_ = Continuation_yield_;
const run = Continuation_run;
/** @ignore */
const Continuation = {
    yield: yield_,
    run,
};

export { Continuation as default, run, yield_ };
