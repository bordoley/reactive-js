import { Updater } from "../../../functions";
import { ContinuationLike, ContinuationLike_run } from "../../../scheduling";

const Continuation$run: Updater<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};

export default Continuation$run;
