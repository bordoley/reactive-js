import { Updater } from "../../../functions.js";
import { ContinuationLike, ContinuationLike_run } from "../../../scheduling.js";

const Continuation_run: Updater<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};

export default Continuation_run;
