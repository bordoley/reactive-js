import Continuation$run from "../scheduling/__internal__/Continuation/Continuation.run";
import Continuation$yield from "../scheduling/__internal__/Continuation/Continuation.yield";

export const yield_ = Continuation$yield;
export const run = Continuation$run;
