import Continuation_run from "../scheduling/Continuation/__internal__/Continuation.run";
import Continuation_yield from "../scheduling/Continuation/__internal__/Continuation.yield";

export const yield_ = Continuation_yield;
export const run = Continuation_run;

/** @ignore */
const Continuation = {
  yield: yield_,
  run,
};

export default Continuation;
