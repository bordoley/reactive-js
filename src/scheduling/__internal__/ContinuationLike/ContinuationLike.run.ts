import { Updater } from "../../../functions";
import { ContinuationLike, ContinuationLike_run } from "../../../scheduling";

export const run: Updater<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};
