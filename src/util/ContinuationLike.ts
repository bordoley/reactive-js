import { Identity } from "../functions";
import { ContinuationLike, ContinuationLike_run } from "../util";

export const run: Identity<ContinuationLike> = continuation => {
  continuation[ContinuationLike_run]();
  return continuation;
};
