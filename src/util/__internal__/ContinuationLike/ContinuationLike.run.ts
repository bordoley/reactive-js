import { Updater } from "../../../functions";
import { ContinuationLike, ContinuationLike_run } from "../../../util";

export const run: Updater<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};
