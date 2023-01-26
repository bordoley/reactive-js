/// <reference types="./Continuation.d.ts" />
import Continuation$run from './__internal__/Continuation/Continuation.run.mjs';
import Continuation$yield_ from './__internal__/Continuation/Continuation.yield.mjs';

const yield_ = Continuation$yield_;
const run = Continuation$run;

export { run, yield_ };
