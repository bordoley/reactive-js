import { Updater } from "../../../functions";
import { ContinuationLike, ContinuationLike_run } from "../../../scheduling";

const ContinuationLike__run: Updater<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};

export default ContinuationLike__run;
