/// <reference types="./Continuation.d.ts" />
import Continuation_run from './__internal__/Continuation/Continuation.run.mjs';
import Continuation_yield_ from './__internal__/Continuation/Continuation.yield.mjs';

const yield_ = Continuation_yield_;
const run = Continuation_run;

export { run, yield_ };
